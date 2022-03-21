const {chromium} = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    try{
        await page.click('input');
        await page.keyboard.type('one does not simply exit vim');
        await page.keyboard.down("Shift");
        for(let i = 0; i < ' exit vim'.length; i++){
            await page.keyboard.press('ArrowLeft')
        }
        await page.keyboard.up('Shift');
        await page.keyboard.press('Backspace')
        await page.keyboard.type(' walk into mortor')
    }
    catch(err){
        console.error("Something went wrong")
        console.error(err)
    }
    await browser.close();
})();