const {chromium, devices} = require('playwright');
const iPhone = devices['iPhone 11'];

( async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 300});
    const context = await browser.newContext({
        ...iPhone,
        permissions:['geolocation'],
        geolocation:{latitude: 19.432608, longitude: -99144209 },
        locale: 'fr-FR'
    });

    try{
        const page = await context.newPage();
        await page.goto('https://www.google.com/maps');
        await page.waitForTimeout(5000);
        await browser.close();
    }
    catch(err){
        console.error("Something went wrong");
        console.error(err);
    }

})();