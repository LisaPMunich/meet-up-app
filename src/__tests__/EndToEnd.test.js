import puppeteer from "puppeteer/lib/cjs/puppeteer/node-puppeteer-core";


describe('show/hide an event detail', () => {
    test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch({
        // headless: false,
        // slowMo: 250 // slow down by 250ms
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');

    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
    await browser.close();
});



});