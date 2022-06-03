import puppeteer from "puppeteer";


describe('show/hide an event detail', () => {
    beforeEach(async () => {
        jest.setTimeout(10000)
    });


    test('An event element is collapsed by default', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
        const eventDetails = await page.$('.event .event__details');
        expect(eventDetails).toBeNull();
        await browser.close();
    });
    test('User can expand an event to see its details', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
        await page.click('.event .button');
        const eventDetails = await page.$('.event .event__details');
        expect(eventDetails).toBeDefined();
        await browser.close();
    });
    test('User can collapse an event to hide its details', async()=> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
        const eventDetails = await page.$('.event .event__details');
        expect(eventDetails).toBeDefined();
        await page.click('.event .button');
        expect(eventDetails).toBeNull();
        await browser.close();
    });
});

describe('Filter events by city', () => {
    beforeEach(async () => {
        jest.setTimeout(10000)
    });

    test('When user hasn\'t searched for a city, show upcoming events from all cities.', async()=> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event-item-wrapper');
        const eventList = await page.$('.event-item-wrapper');
        expect(eventList).toBeDefined();
    });

    test('User should see a list of suggestions when they search for a city', async()=> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event-item-wrapper');
        await page.type('.city', 'Berlin, Germany', {delay: 100});
        const citySuggestions = await page.$('.city-search .suggestions');
        expect(citySuggestions).toBeDefined();
    });

    test('User can select a city from the suggested list', async()=> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const inputSelector = '.city-search .city';
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.city-search');
        await page.type('.city-search .city', 'Berlin, Germany', {delay: 100});
        await page.click('.suggestions li:first-of-type');
        await page.waitForSelector(inputSelector);
        const value =  await page.$eval(inputSelector, ele => ele.value);
        expect(value).toContain('Berlin, Germany');
        await browser.close();
    });

})
