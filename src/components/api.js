import {mockData} from '../mock-data';
import axios from 'axios';
import NProgress from 'nprogress';

export const extractLocations = (events) => {
    let extractLocations = events.map((event) => event.location);
    let locations = [...new Set(extractLocations)];
    return locations;
}

export const checkToken = async (accessToken) => {
    const result = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )
        .then((res) => res.json())
        .catch((error) => error.json());

    return result;
};

export const getEvents = async() => {
    if (window.location.href.startsWith('http://localhost')) {
        return mockData;
    }
    if (!navigator.onLine) {
        const data = localStorage.getItem("lastEvents");
        NProgress.done();
        return data ? JSON.parse(data).events : [];
    }
    const token = await getAccessToken();

    const removeQuery = () => {
        let newurl;
        if (window.history.pushState && window.location.pathname) {
            newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
            window.history.pushState("", "", newurl);
        } else {
            newurl = `${window.location.protocol}//${window.location.host}`;
            window.history.pushState("", "", newurl);
        }
    };

    if (token) {
        removeQuery();
        const url = `https://gz63cch2tg.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${token}`;
        const result = await axios.get(url);
        if (result.data) {
            let locations = extractLocations(result.data.events);
            localStorage.setItem("lastEvents", JSON.stringify(result.data));
            localStorage.setItem("locations", JSON.stringify(locations));
        }
        NProgress.done();
        return result.data.events;
    }
};

const getToken = async (code) => {
    try {
        const encodeCode = encodeURIComponent(code);

        const response = await fetch( `https://gz63cch2tg.execute-api.eu-central-1.amazonaws.com/dev/api/token/${encodeCode}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const { access_token } = await response.json();
        access_token && localStorage.setItem("access_token", access_token);
        return access_token;
    } catch(error) {
        error.json();
    }
}

export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');

    const tokenCheck = accessToken && (await checkToken(accessToken));

    if (!accessToken || tokenCheck.error) {
        await localStorage.removeItem("access_token");
        const searchParams = new URLSearchParams(window.location.search);
        const code = await searchParams.get("code");
        if (!code) {
            const results = await axios.get(
                "https://gz63cch2tg.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
            );
            const { authUrl } = results.data;
            return (window.location.href = authUrl);
        }
        return code && getToken(code);
    }
    return accessToken;
}