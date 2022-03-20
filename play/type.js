const {chromium} = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/forgot_password');

    // code to type in email textbox
    // single "$" = single element
    // type="text" name="email" id="email"
    const email = await page.$('#email');
    await email.type('testing123@gmail.com', {delay: 10})

    await browser.close();
})();