const {chromium} = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');

    // code to handle the alerts 
    page.once('dialog', async dialog =>{
        console.log(dialog.message())
        await dialog.accept();
    })

    try {
        await page.click('#confirmButton');
    } catch (err) {
        console.error("Something went wrong");
        console.error(err);
    }
       
    page.once('dialog', async dialog =>{
        console.log(dialog.message())
        await dialog.accept('my text is this');
    })

    try {
        await page.click('#promtButton');
    } catch (err) {
        console.error("Something went wrong");
        console.error(err);
    }

    await browser.close();
})();