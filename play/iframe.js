const {webkit} = require('playwright');

( async() => {
    //function code
    const browser = await webkit.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/frames');

    //logic to handle iframes
    try{
        const frame1 = await page.frame({url: /\/sample/});
        const heading1 = await frame1.$('h1');
        console.log(await heading1.innerText());
    }
    catch (err) {
        console.error("Something went wrong");
        console.error(err);
    }

    await browser.close();
})();