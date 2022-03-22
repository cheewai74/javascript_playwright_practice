const {chromium} = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 200});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    try{
        const dropdown = await page.$('#dropdown');
        // value 
        // await dropdown.selectOption({value: '1'});

        // label
        // await dropdown.selectOption({label: 'Option2'});

        // index
        await dropdown.selectOption({index: 2});

        // values inside this select
        // $$ : Retrieve more than 1 element
        const availableOptions = await dropdown.$$('option');
        for (let i = 0; i < availableOptions.length; i++){
            console.log(await availableOptions[i].innerText());
        }
    }
    catch (err) {
        console.error("Something went wrong");
        console.error(err);
    }
    await browser.close();
})();