const {chromium} = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://applitools.com/');

    // Take Screenshot content
    await page.screenshot({path: 'screenshot.png'});
    const logo = await page.$('.logo');
    await page.screenshot({path: 'logo.png'});
    await page.screenshot({path: 'fullpage.png',fullPage: true});

    await browser.close();
})();