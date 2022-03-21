const {chromium} = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

    try{
        // Check the 2nd checkbox
        const checks = await page.$$('#main div:nth-child(1) input[type="checkbox"]');
        await checks[1].check();
        await checks[0].uncheck();

        // Select the 2nd radio button
        // const radios = await page.$$('#main div:nth-child(1) input[type="radio"]');
        // await radios[1].check();
    }
    catch (err) {
        console.error("Something went wrong")
        console.error(err)
    }
    await browser.close();
})();