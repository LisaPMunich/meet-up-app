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