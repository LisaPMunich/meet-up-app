export const mockEvent01 = {
    kind: "calendar#event",
    etag: "\"3181161784712000\"",
    id: "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
    status: "confirmed",
    htmlLink: "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-05-19T19:17:46.000Z",
    updated: "2020-05-27T12:01:32.356Z",
    summary: "Learn JavaScript",
    description: "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
    location: "London, UK",
    creator: {email: "fullstackwebdev@careerfoundry.com", self: true},
    organizer: {email: "fullstackwebdev@careerfoundry.com", self: true},
    start: {dateTime: "2020-05-19T16:00:00+02:00", timeZone: "Europe/Berlin"},
    end: {dateTime: "2020-05-19T17:00:00+02:00", timeZone: "Europe/Berlin"},
    recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
    originalStartTime: {dateTime: "2020-05-19T16:00:00+02:00", timeZone: "Europe/Berlin"},
    iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
    sequence: 0,
    reminders: {useDefault: true},
    eventType: "default"
};

const mockEvent02 = {
    kind: "calendar#event",
    etag: "\"3181159875584000\"",
    id: "3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",
    status: "confirmed",
    htmlLink: "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-05-19T19:14:30.000Z",
    updated: "2020-05-27T11:45:37.792Z",
    summary: "React is Fun",
    description: "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
    location: "Berlin, Germany",
    creator: {email: "fullstackwebdev@careerfoundry.com", self: true},
    organizer: {email: "fullstackwebdev@careerfoundry.com", self: true},
    start: {dateTime: "2020-05-20T14:00:00+02:00", timeZone: "Europe/Berlin"},
    end: {dateTime: "2020-05-20T15:00:00+02:00", timeZone: "Europe/Berlin"},
    recurringEventId: "3qtd6uscq4tsi6gc7nmmtpqlct",
    originalStartTime: {dateTime: "2020-05-20T14:00:00+02:00", timeZone: "Europe/Berlin"},
    iCalUID: "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
    sequence: 0,
    reminders: {useDefault: true},
    eventType: "default"
};

export const mockData = [
    mockEvent01,
    mockEvent02
]

export const mockFullData = [
    {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220615T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA2MTVUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-15T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-15T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-06-15T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220615T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA2MTVUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-15T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-15T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-06-15T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220616T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA2MTZUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-16T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-16T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-06-16T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220616T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA2MTZUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-16T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-16T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-06-16T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220616T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA2MTZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-16T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-16T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-06-16T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220616T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA2MTZUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-16T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-16T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-06-16T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220616T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA2MTZUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-17T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-17T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-06-17T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220617T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA2MTdUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-17T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-17T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-06-17T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220617T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA2MTdUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-17T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-17T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-06-17T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220617T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA2MTdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-17T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-17T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-06-17T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220617T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA2MTdUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-17T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-17T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-06-17T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220617T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA2MTdUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-17T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-17T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-06-17T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220618T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA2MThUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-18T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-18T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-06-18T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220618T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA2MThUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-18T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-18T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-06-18T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220618T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA2MThUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-18T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-18T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-06-18T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220619T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA2MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-19T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-19T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-06-19T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220619T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA2MTlUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-19T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-19T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-06-19T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220619T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA2MTlUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-20T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-20T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-06-20T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220620T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA2MjBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-20T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-20T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-06-20T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220620T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA2MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-20T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-20T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-06-20T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220620T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA2MjBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-20T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-20T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-06-20T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220620T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA2MjBUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-20T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-20T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-06-20T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220620T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA2MjBUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-20T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-20T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-06-20T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221506816000\"",
        "id": "48m09le389vijbqfs2mcr6i87q_20220621T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMjA2MjFUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:39:01.000Z",
        "updated": "2020-07-01T13:39:13.408Z",
        "summary": "Node Gang",
        "description": "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
        "location": "Sydney NSW, Australia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-21T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-21T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "48m09le389vijbqfs2mcr6i87q",
        "originalStartTime": {"dateTime": "2022-06-21T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "48m09le389vijbqfs2mcr6i87q@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wdc-wutt-tji",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wdc-wutt-tji",
                "label": "meet.google.com/wdc-wutt-tji"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wdc-wutt-tji?pin=3796108774207",
                "pin": "3796108774207"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618974",
                "label": "+49 40 8081618974",
                "pin": "170634768"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wdc-wutt-tji"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220621T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA2MjFUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-21T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-21T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-06-21T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220621T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA2MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-21T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-21T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-06-21T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187238088812000\"",
        "id": "7e4k9oop7bb86svd42vui37k6o_20220621T150000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA2MjFUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:56:05.000Z",
        "updated": "2020-07-01T15:57:24.406Z",
        "summary": "Angular Moscow",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Moscow, Russia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-21T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-21T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7e4k9oop7bb86svd42vui37k6o",
        "originalStartTime": {"dateTime": "2022-06-21T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7e4k9oop7bb86svd42vui37k6o@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/fip-gdth-tdu",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/fip-gdth-tdu",
                "label": "meet.google.com/fip-gdth-tdu"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/fip-gdth-tdu?pin=1369000914291",
                "pin": "1369000914291"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616684",
                "label": "+49 40 8081616684",
                "pin": "516915292"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "fip-gdth-tdu"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220621T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA2MjFUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-21T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-21T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-06-21T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220621T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA2MjFUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-22T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-22T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-06-22T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220622T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA2MjJUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-22T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-22T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-06-22T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220622T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA2MjJUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-22T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-22T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-06-22T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220622T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-22T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-22T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-06-22T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220622T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA2MjJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-22T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-22T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-06-22T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220622T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA2MjJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-22T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-22T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-06-22T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220622T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA2MjJUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-22T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-22T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-06-22T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220622T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA2MjJUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-22T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-22T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-06-22T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220623T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA2MjNUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-23T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-23T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-06-23T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220623T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA2MjNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-23T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-23T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-06-23T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220623T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA2MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-23T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-23T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-06-23T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220623T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA2MjNUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-23T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-23T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-06-23T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220623T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA2MjNUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-24T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-24T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-06-24T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220624T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA2MjRUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-24T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-24T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-06-24T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220624T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA2MjRUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-24T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-24T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-06-24T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220624T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA2MjRUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-24T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-24T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-06-24T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220624T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA2MjRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-24T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-24T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-06-24T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220624T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA2MjRUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-24T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-24T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-06-24T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220625T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA2MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-25T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-25T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-06-25T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220625T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA2MjVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-25T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-25T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-06-25T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220625T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA2MjVUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-25T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-25T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-06-25T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220626T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA2MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-26T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-26T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-06-26T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220626T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA2MjZUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-26T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-26T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-06-26T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220626T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA2MjZUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-27T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-27T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-06-27T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220627T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA2MjdUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-27T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-27T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-06-27T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220627T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA2MjdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-27T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-27T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-06-27T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220627T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA2MjdUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-27T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-27T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-06-27T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220627T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA2MjdUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-27T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-27T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-06-27T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220627T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA2MjdUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-27T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-27T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-06-27T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221506816000\"",
        "id": "48m09le389vijbqfs2mcr6i87q_20220628T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMjA2MjhUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:39:01.000Z",
        "updated": "2020-07-01T13:39:13.408Z",
        "summary": "Node Gang",
        "description": "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
        "location": "Sydney NSW, Australia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-28T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-28T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "48m09le389vijbqfs2mcr6i87q",
        "originalStartTime": {"dateTime": "2022-06-28T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "48m09le389vijbqfs2mcr6i87q@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wdc-wutt-tji",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wdc-wutt-tji",
                "label": "meet.google.com/wdc-wutt-tji"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wdc-wutt-tji?pin=3796108774207",
                "pin": "3796108774207"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618974",
                "label": "+49 40 8081618974",
                "pin": "170634768"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wdc-wutt-tji"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220628T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA2MjhUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-28T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-28T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-06-28T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220628T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA2MjhUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-28T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-28T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-06-28T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187238088812000\"",
        "id": "7e4k9oop7bb86svd42vui37k6o_20220628T150000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA2MjhUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:56:05.000Z",
        "updated": "2020-07-01T15:57:24.406Z",
        "summary": "Angular Moscow",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Moscow, Russia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-28T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-28T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7e4k9oop7bb86svd42vui37k6o",
        "originalStartTime": {"dateTime": "2022-06-28T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7e4k9oop7bb86svd42vui37k6o@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/fip-gdth-tdu",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/fip-gdth-tdu",
                "label": "meet.google.com/fip-gdth-tdu"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/fip-gdth-tdu?pin=1369000914291",
                "pin": "1369000914291"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616684",
                "label": "+49 40 8081616684",
                "pin": "516915292"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "fip-gdth-tdu"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220628T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA2MjhUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-28T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-28T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-06-28T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220628T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA2MjhUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-29T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-29T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-06-29T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220629T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA2MjlUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-29T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-29T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-06-29T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220629T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA2MjlUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-29T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-29T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-06-29T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220629T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA2MjlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-29T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-29T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-06-29T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220629T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA2MjlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-29T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-29T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-06-29T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220629T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA2MjlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-29T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-29T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-06-29T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220629T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA2MjlUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-29T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-29T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-06-29T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220629T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA2MjlUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-29T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-29T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-06-29T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220630T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA2MzBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-30T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-30T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-06-30T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220630T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA2MzBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-30T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-30T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-06-30T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220630T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA2MzBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-30T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-30T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-06-30T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220630T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA2MzBUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-06-30T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-06-30T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-06-30T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220630T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA2MzBUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-01T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-01T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-01T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220701T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA3MDFUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-01T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-01T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-07-01T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220701T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA3MDFUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-01T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-01T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-07-01T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220701T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MDFUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-01T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-01T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-01T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220701T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MDFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-01T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-01T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-01T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220701T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MDFUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-01T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-01T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-01T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220702T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MDJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-02T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-02T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-02T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220702T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MDJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-02T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-02T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-02T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220702T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA3MDJUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-02T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-02T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-07-02T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220703T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA3MDNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-03T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-03T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-07-03T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220703T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA3MDNUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-03T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-03T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-07-03T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220703T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MDNUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-04T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-04T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-04T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220704T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA3MDRUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-04T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-04T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-07-04T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220704T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MDRUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-04T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-04T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-04T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220704T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MDRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-04T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-04T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-04T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220704T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA3MDRUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-04T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-04T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-07-04T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220704T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MDRUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-04T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-04T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-04T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221506816000\"",
        "id": "48m09le389vijbqfs2mcr6i87q_20220705T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMjA3MDVUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:39:01.000Z",
        "updated": "2020-07-01T13:39:13.408Z",
        "summary": "Node Gang",
        "description": "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
        "location": "Sydney NSW, Australia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-05T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-05T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "48m09le389vijbqfs2mcr6i87q",
        "originalStartTime": {"dateTime": "2022-07-05T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "48m09le389vijbqfs2mcr6i87q@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wdc-wutt-tji",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wdc-wutt-tji",
                "label": "meet.google.com/wdc-wutt-tji"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wdc-wutt-tji?pin=3796108774207",
                "pin": "3796108774207"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618974",
                "label": "+49 40 8081618974",
                "pin": "170634768"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wdc-wutt-tji"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220705T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MDVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-05T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-05T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-05T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220705T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MDVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-05T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-05T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-05T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187238088812000\"",
        "id": "7e4k9oop7bb86svd42vui37k6o_20220705T150000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA3MDVUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:56:05.000Z",
        "updated": "2020-07-01T15:57:24.406Z",
        "summary": "Angular Moscow",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Moscow, Russia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-05T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-05T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7e4k9oop7bb86svd42vui37k6o",
        "originalStartTime": {"dateTime": "2022-07-05T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7e4k9oop7bb86svd42vui37k6o@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/fip-gdth-tdu",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/fip-gdth-tdu",
                "label": "meet.google.com/fip-gdth-tdu"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/fip-gdth-tdu?pin=1369000914291",
                "pin": "1369000914291"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616684",
                "label": "+49 40 8081616684",
                "pin": "516915292"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "fip-gdth-tdu"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220705T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA3MDVUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-05T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-05T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-07-05T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220705T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MDVUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-06T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-06T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-06T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220706T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA3MDZUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-06T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-06T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-07-06T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220706T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA3MDZUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-06T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-06T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-07-06T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220706T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MDZUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-06T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-06T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-06T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220706T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MDZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-06T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-06T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-06T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220706T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA3MDZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-06T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-06T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-07-06T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220706T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA3MDZUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-06T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-06T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-07-06T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220706T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MDZUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-06T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-06T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-06T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220707T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA3MDdUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-07T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-07T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-07-07T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220707T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MDdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-07T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-07T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-07T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220707T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MDdUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-07T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-07T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-07T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220707T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA3MDdUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-07T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-07T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-07-07T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220707T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MDdUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-08T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-08T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-08T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220708T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA3MDhUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-08T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-08T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-07-08T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220708T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA3MDhUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-08T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-08T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-07-08T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220708T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MDhUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-08T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-08T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-08T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220708T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MDhUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-08T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-08T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-08T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220708T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MDhUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-08T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-08T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-08T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220709T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MDlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-09T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-09T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-09T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220709T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MDlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-09T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-09T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-09T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220709T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA3MDlUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-09T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-09T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-07-09T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220710T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA3MTBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-10T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-10T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-07-10T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220710T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA3MTBUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-10T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-10T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-07-10T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220710T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MTBUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-11T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-11T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-11T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220711T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA3MTFUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-11T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-11T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-07-11T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220711T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MTFUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-11T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-11T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-11T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220711T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MTFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-11T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-11T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-11T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220711T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA3MTFUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-11T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-11T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-07-11T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220711T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MTFUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-11T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-11T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-11T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221506816000\"",
        "id": "48m09le389vijbqfs2mcr6i87q_20220712T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMjA3MTJUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:39:01.000Z",
        "updated": "2020-07-01T13:39:13.408Z",
        "summary": "Node Gang",
        "description": "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
        "location": "Sydney NSW, Australia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-12T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-12T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "48m09le389vijbqfs2mcr6i87q",
        "originalStartTime": {"dateTime": "2022-07-12T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "48m09le389vijbqfs2mcr6i87q@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wdc-wutt-tji",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wdc-wutt-tji",
                "label": "meet.google.com/wdc-wutt-tji"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wdc-wutt-tji?pin=3796108774207",
                "pin": "3796108774207"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618974",
                "label": "+49 40 8081618974",
                "pin": "170634768"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wdc-wutt-tji"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220712T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MTJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-12T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-12T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-12T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220712T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MTJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-12T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-12T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-12T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187238088812000\"",
        "id": "7e4k9oop7bb86svd42vui37k6o_20220712T150000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA3MTJUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:56:05.000Z",
        "updated": "2020-07-01T15:57:24.406Z",
        "summary": "Angular Moscow",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Moscow, Russia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-12T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-12T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7e4k9oop7bb86svd42vui37k6o",
        "originalStartTime": {"dateTime": "2022-07-12T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7e4k9oop7bb86svd42vui37k6o@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/fip-gdth-tdu",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/fip-gdth-tdu",
                "label": "meet.google.com/fip-gdth-tdu"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/fip-gdth-tdu?pin=1369000914291",
                "pin": "1369000914291"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616684",
                "label": "+49 40 8081616684",
                "pin": "516915292"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "fip-gdth-tdu"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220712T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA3MTJUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-12T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-12T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-07-12T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220712T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MTJUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-13T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-13T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-13T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220713T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA3MTNUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-13T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-13T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-07-13T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220713T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA3MTNUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-13T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-13T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-07-13T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220713T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MTNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-13T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-13T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-13T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220713T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MTNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-13T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-13T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-13T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220713T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA3MTNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-13T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-13T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-07-13T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220713T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA3MTNUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-13T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-13T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-07-13T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220713T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MTNUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-13T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-13T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-13T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220714T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA3MTRUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-14T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-14T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-07-14T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220714T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MTRUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-14T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-14T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-14T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220714T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MTRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-14T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-14T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-14T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220714T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA3MTRUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-14T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-14T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-07-14T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220714T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MTRUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-15T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-15T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-15T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220715T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA3MTVUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-15T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-15T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-07-15T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220715T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA3MTVUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-15T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-15T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-07-15T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220715T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MTVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-15T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-15T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-15T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220715T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MTVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-15T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-15T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-15T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220715T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MTVUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-15T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-15T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-15T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220716T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MTZUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-16T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-16T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-16T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220716T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MTZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-16T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-16T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-16T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220716T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA3MTZUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-16T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-16T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-07-16T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220717T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA3MTdUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-17T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-17T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-07-17T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220717T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA3MTdUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-17T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-17T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-07-17T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220717T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MTdUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-18T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-18T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-18T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220718T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA3MThUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-18T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-18T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-07-18T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220718T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MThUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-18T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-18T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-18T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220718T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MThUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-18T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-18T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-18T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220718T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA3MThUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-18T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-18T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-07-18T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220718T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MThUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-18T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-18T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-18T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221506816000\"",
        "id": "48m09le389vijbqfs2mcr6i87q_20220719T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMjA3MTlUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:39:01.000Z",
        "updated": "2020-07-01T13:39:13.408Z",
        "summary": "Node Gang",
        "description": "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
        "location": "Sydney NSW, Australia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-19T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-19T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "48m09le389vijbqfs2mcr6i87q",
        "originalStartTime": {"dateTime": "2022-07-19T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "48m09le389vijbqfs2mcr6i87q@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wdc-wutt-tji",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wdc-wutt-tji",
                "label": "meet.google.com/wdc-wutt-tji"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wdc-wutt-tji?pin=3796108774207",
                "pin": "3796108774207"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618974",
                "label": "+49 40 8081618974",
                "pin": "170634768"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wdc-wutt-tji"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220719T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MTlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-19T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-19T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-19T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220719T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-19T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-19T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-19T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187238088812000\"",
        "id": "7e4k9oop7bb86svd42vui37k6o_20220719T150000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA3MTlUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:56:05.000Z",
        "updated": "2020-07-01T15:57:24.406Z",
        "summary": "Angular Moscow",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Moscow, Russia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-19T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-19T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7e4k9oop7bb86svd42vui37k6o",
        "originalStartTime": {"dateTime": "2022-07-19T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7e4k9oop7bb86svd42vui37k6o@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/fip-gdth-tdu",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/fip-gdth-tdu",
                "label": "meet.google.com/fip-gdth-tdu"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/fip-gdth-tdu?pin=1369000914291",
                "pin": "1369000914291"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616684",
                "label": "+49 40 8081616684",
                "pin": "516915292"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "fip-gdth-tdu"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220719T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA3MTlUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-19T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-19T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-07-19T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220719T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MTlUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-20T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-20T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-20T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220720T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA3MjBUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-20T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-20T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-07-20T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220720T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA3MjBUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-20T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-20T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-07-20T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220720T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-20T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-20T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-20T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220720T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MjBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-20T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-20T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-20T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220720T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA3MjBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-20T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-20T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-07-20T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220720T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA3MjBUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-20T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-20T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-07-20T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220720T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MjBUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-20T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-20T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-20T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220721T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA3MjFUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-21T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-21T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-07-21T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220721T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MjFUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-21T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-21T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-21T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220721T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-21T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-21T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-21T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220721T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA3MjFUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-21T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-21T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-07-21T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220721T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MjFUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-22T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-22T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-22T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220722T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA3MjJUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-22T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-22T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-07-22T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220722T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA3MjJUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-22T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-22T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-07-22T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220722T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-22T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-22T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-22T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220722T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MjJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-22T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-22T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-22T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220722T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MjJUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-22T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-22T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-22T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220723T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MjNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-23T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-23T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-23T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220723T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-23T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-23T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-23T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220723T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA3MjNUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-23T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-23T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-07-23T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220724T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA3MjRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-24T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-24T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-07-24T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220724T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA3MjRUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-24T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-24T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-07-24T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220724T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MjRUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-25T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-25T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-25T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220725T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA3MjVUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-25T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-25T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-07-25T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220725T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-25T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-25T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-25T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220725T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MjVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-25T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-25T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-25T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220725T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA3MjVUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-25T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-25T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-07-25T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220725T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MjVUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-25T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-25T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-25T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221506816000\"",
        "id": "48m09le389vijbqfs2mcr6i87q_20220726T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMjA3MjZUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:39:01.000Z",
        "updated": "2020-07-01T13:39:13.408Z",
        "summary": "Node Gang",
        "description": "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
        "location": "Sydney NSW, Australia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-26T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-26T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "48m09le389vijbqfs2mcr6i87q",
        "originalStartTime": {"dateTime": "2022-07-26T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "48m09le389vijbqfs2mcr6i87q@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wdc-wutt-tji",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wdc-wutt-tji",
                "label": "meet.google.com/wdc-wutt-tji"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wdc-wutt-tji?pin=3796108774207",
                "pin": "3796108774207"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618974",
                "label": "+49 40 8081618974",
                "pin": "170634768"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wdc-wutt-tji"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220726T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MjZUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-26T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-26T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-26T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220726T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-26T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-26T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-26T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187238088812000\"",
        "id": "7e4k9oop7bb86svd42vui37k6o_20220726T150000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA3MjZUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:56:05.000Z",
        "updated": "2020-07-01T15:57:24.406Z",
        "summary": "Angular Moscow",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Moscow, Russia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-26T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-26T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7e4k9oop7bb86svd42vui37k6o",
        "originalStartTime": {"dateTime": "2022-07-26T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7e4k9oop7bb86svd42vui37k6o@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/fip-gdth-tdu",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/fip-gdth-tdu",
                "label": "meet.google.com/fip-gdth-tdu"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/fip-gdth-tdu?pin=1369000914291",
                "pin": "1369000914291"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616684",
                "label": "+49 40 8081616684",
                "pin": "516915292"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "fip-gdth-tdu"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220726T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA3MjZUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-26T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-26T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-07-26T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220726T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MjZUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-27T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-27T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-27T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220727T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA3MjdUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-27T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-27T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-07-27T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220727T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA3MjdUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-27T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-27T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-07-27T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220727T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MjdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-27T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-27T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-27T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220727T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MjdUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-27T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-27T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-27T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220727T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA3MjdUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-27T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-27T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-07-27T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220727T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA3MjdUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-27T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-27T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-07-27T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220727T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MjdUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-27T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-27T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-27T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220728T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA3MjhUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-28T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-28T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-07-28T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220728T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MjhUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-28T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-28T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-28T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220728T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MjhUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-28T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-28T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-28T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220728T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA3MjhUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-28T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-28T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-07-28T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220728T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MjhUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-29T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-29T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-07-29T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220729T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA3MjlUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-29T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-29T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-07-29T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220729T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA3MjlUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-29T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-29T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-07-29T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220729T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA3MjlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-29T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-29T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-07-29T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220729T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA3MjlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-29T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-29T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-07-29T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220729T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA3MjlUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-29T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-29T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-07-29T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220730T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA3MzBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-30T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-30T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-07-30T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220730T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA3MzBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-30T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-30T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-07-30T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220730T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA3MzBUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-30T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-30T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-07-30T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220731T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA3MzFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-31T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-31T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-07-31T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220731T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA3MzFUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-07-31T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-07-31T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-07-31T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220731T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA3MzFUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-01T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-01T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-08-01T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220801T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA4MDFUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-01T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-01T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-08-01T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220801T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA4MDFUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-01T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-01T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-08-01T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220801T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA4MDFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-01T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-01T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-08-01T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220801T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA4MDFUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-01T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-01T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-08-01T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220801T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA4MDFUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-01T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-01T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-08-01T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221506816000\"",
        "id": "48m09le389vijbqfs2mcr6i87q_20220802T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMjA4MDJUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:39:01.000Z",
        "updated": "2020-07-01T13:39:13.408Z",
        "summary": "Node Gang",
        "description": "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
        "location": "Sydney NSW, Australia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-02T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-02T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "48m09le389vijbqfs2mcr6i87q",
        "originalStartTime": {"dateTime": "2022-08-02T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "48m09le389vijbqfs2mcr6i87q@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wdc-wutt-tji",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wdc-wutt-tji",
                "label": "meet.google.com/wdc-wutt-tji"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wdc-wutt-tji?pin=3796108774207",
                "pin": "3796108774207"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618974",
                "label": "+49 40 8081618974",
                "pin": "170634768"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wdc-wutt-tji"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220802T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA4MDJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-02T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-02T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-08-02T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220802T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA4MDJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-02T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-02T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-08-02T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187238088812000\"",
        "id": "7e4k9oop7bb86svd42vui37k6o_20220802T150000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMjA4MDJUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:56:05.000Z",
        "updated": "2020-07-01T15:57:24.406Z",
        "summary": "Angular Moscow",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Moscow, Russia",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-02T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-02T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7e4k9oop7bb86svd42vui37k6o",
        "originalStartTime": {"dateTime": "2022-08-02T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7e4k9oop7bb86svd42vui37k6o@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/fip-gdth-tdu",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/fip-gdth-tdu",
                "label": "meet.google.com/fip-gdth-tdu"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/fip-gdth-tdu?pin=1369000914291",
                "pin": "1369000914291"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616684",
                "label": "+49 40 8081616684",
                "pin": "516915292"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "fip-gdth-tdu"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232583216000\"",
        "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20220802T163000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMjA4MDJUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:54:32.000Z",
        "updated": "2020-07-01T15:11:31.608Z",
        "summary": "Build Your First App with JavaScript",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
        "location": "Amsterdam, Netherlands",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-02T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-02T19:30:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
        "originalStartTime": {"dateTime": "2022-08-02T18:30:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/vxc-jcvs-juv",
                "label": "meet.google.com/vxc-jcvs-juv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
                "pin": "7178471106778"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081619886",
                "label": "+49 40 8081619886",
                "pin": "257304091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "vxc-jcvs-juv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220802T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA4MDJUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-03T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-03T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-08-03T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220803T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA4MDNUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-03T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-03T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-08-03T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220803T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA4MDNUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-03T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-03T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-08-03T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220803T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA4MDNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-03T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-03T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-08-03T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220803T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA4MDNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-03T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-03T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-08-03T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187231386852000\"",
        "id": "7qqm95l3op6khilck5cprvbq2u_20220803T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMjA4MDNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:00:58.000Z",
        "updated": "2020-07-01T15:01:33.426Z",
        "summary": "Fun with Angular",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "Dubai - United Arab Emirates",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-03T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-03T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7qqm95l3op6khilck5cprvbq2u",
        "originalStartTime": {"dateTime": "2022-08-03T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7qqm95l3op6khilck5cprvbq2u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/bim-zvvi-nio",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/bim-zvvi-nio",
                "label": "meet.google.com/bim-zvvi-nio"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/bim-zvvi-nio?pin=8340594476418",
                "pin": "8340594476418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617267",
                "label": "+49 40 8081617267",
                "pin": "692195842"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "bim-zvvi-nio"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234769062000\"",
        "id": "46717o686s7ibj1lp300pabro9_20220803T180000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMjA4MDNUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:28:56.000Z",
        "updated": "2020-07-01T15:29:44.531Z",
        "summary": "React Workshop",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Toronto, ON, Canada",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-03T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-03T21:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "46717o686s7ibj1lp300pabro9",
        "originalStartTime": {"dateTime": "2022-08-03T20:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/jnj-edux-duq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/jnj-edux-duq",
                "label": "meet.google.com/jnj-edux-duq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
                "pin": "3356856978418"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195194",
                "label": "+49 30 300195194",
                "pin": "599388176"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jnj-edux-duq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220803T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA4MDNUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-03T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-03T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-08-03T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20220804T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMjA4MDRUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-04T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-04T10:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
        "originalStartTime": {"dateTime": "2022-08-04T09:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ceo-behe-ssp",
                "label": "meet.google.com/ceo-behe-ssp"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
                "pin": "2641490783465"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617770",
                "label": "+49 40 8081617770",
                "pin": "889553795"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ceo-behe-ssp"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232532588000\"",
        "id": "20c51je3q99mnolr1rp06dt9jd_20220804T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMjA4MDRUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:17:12.000Z",
        "updated": "2020-07-01T15:11:06.294Z",
        "summary": "Use jQuery, bring in interactivity easily ",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Mumbai, Maharashtra, India",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-04T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-04T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
        "originalStartTime": {"dateTime": "2022-08-04T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/nns-htdr-ijk",
                "label": "meet.google.com/nns-htdr-ijk"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
                "pin": "9302146320475"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618430",
                "label": "+49 40 8081618430",
                "pin": "810644618"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "nns-htdr-ijk"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20220804T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMjA4MDRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-04T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-04T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {"dateTime": "2022-08-04T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187224991890000\"",
        "id": "3glt4dve9uip7oh5g5kb2bid2s_20220804T160000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMjA4MDRUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T14:07:59.000Z",
        "updated": "2020-07-01T14:08:15.945Z",
        "summary": "Fun with Node.js",
        "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
        "location": "Nairobi, Kenya",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-04T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-04T19:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
        "originalStartTime": {"dateTime": "2022-08-04T18:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/wkx-akyy-omd",
                "label": "meet.google.com/wkx-akyy-omd"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
                "pin": "9536747460380"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081616512",
                "label": "+49 40 8081616512",
                "pin": "576339034"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkx-akyy-omd"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232047578000\"",
        "id": "013qoq4ns44cam7q4hqcf13eab_20220804T230000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMjA4MDRUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:05:49.000Z",
        "updated": "2020-07-01T15:07:03.789Z",
        "summary": "jQuery and More",
        "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
        "location": "Santiago, Santiago Metropolitan Region, Chile",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-05T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-05T02:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
        "originalStartTime": {"dateTime": "2022-08-05T01:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/mqx-jyfg-uoc",
                "label": "meet.google.com/mqx-jyfg-uoc"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
                "pin": "9759553023326"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618734",
                "label": "+49 40 8081618734",
                "pin": "678190650"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "mqx-jyfg-uoc"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187222416180000\"",
        "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20220805T010000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMjA4MDVUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:44:15.000Z",
        "updated": "2020-07-01T13:46:48.090Z",
        "summary": "React California",
        "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
        "location": "California, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-05T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-05T04:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
        "originalStartTime": {"dateTime": "2022-08-05T03:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/imt-kabh-cib",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/imt-kabh-cib",
                "label": "meet.google.com/imt-kabh-cib"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
                "pin": "8711708481601"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618688",
                "label": "+49 40 8081618688",
                "pin": "752695860"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "imt-kabh-cib"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187232499498000\"",
        "id": "7rclpdp8egm60g7kepei7j0bt9_20220805T090000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMjA4MDVUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:10:03.000Z",
        "updated": "2020-07-01T15:10:49.749Z",
        "summary": "Hello JavaScript!!",
        "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
        "location": "Bangkok, Thailand",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-05T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-05T12:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
        "originalStartTime": {"dateTime": "2022-08-05T11:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/tbu-cgma-ikb",
                "label": "meet.google.com/tbu-cgma-ikb"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
                "pin": "5464596701700"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081618071",
                "label": "+49 40 8081618071",
                "pin": "382271360"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "tbu-cgma-ikb"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20220805T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMjA4MDVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-05T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-05T15:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {"dateTime": "2022-08-05T14:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187234500432000\"",
        "id": "65jg7h2f96klim15fie75mj1a1_20220805T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMjA4MDVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:26:57.000Z",
        "updated": "2020-07-01T15:27:30.216Z",
        "summary": "AngularJS Workshop",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
        "location": "Cape Town, South Africa",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-05T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-05T17:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
        "originalStartTime": {"dateTime": "2022-08-05T16:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
        "sequence": 1,
        "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/ctp-pwtc-pmq",
                "label": "meet.google.com/ctp-pwtc-pmq"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
                "pin": "2824243883315"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-30-300195220",
                "label": "+49 30 300195220",
                "pin": "987090091"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "ctp-pwtc-pmq"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    }, {
        "kind": "calendar#event",
        "etag": "\"3187221858184000\"",
        "id": "3gi3kabkm3bua5lq3jhscc8s4c_20220805T200000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMjA4MDVUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T13:23:24.000Z",
        "updated": "2020-07-01T13:42:09.092Z",
        "summary": "Intro to AngularJS-Remote",
        "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
        "location": "New York, NY, USA",
        "creator": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "organizer": {"email": "fullstackwebdev@careerfoundry.com", "self": true},
        "start": {"dateTime": "2022-08-05T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "end": {"dateTime": "2022-08-05T23:00:00+02:00", "timeZone": "Europe/Berlin"},
        "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
        "originalStartTime": {"dateTime": "2022-08-05T22:00:00+02:00", "timeZone": "Europe/Berlin"},
        "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
        "sequence": 2,
        "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
        "conferenceData": {
            "entryPoints": [{
                "entryPointType": "video",
                "uri": "https://meet.google.com/xcb-hfjb-psv",
                "label": "meet.google.com/xcb-hfjb-psv"
            }, {
                "entryPointType": "more",
                "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
                "pin": "4442155852117"
            }, {
                "regionCode": "DE",
                "entryPointType": "phone",
                "uri": "tel:+49-40-8081617300",
                "label": "+49 40 8081617300",
                "pin": "657955248"
            }],
            "conferenceSolution": {
                "key": {"type": "hangoutsMeet"},
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xcb-hfjb-psv"
        },
        "reminders": {"useDefault": true},
        "eventType": "default"
    },
];