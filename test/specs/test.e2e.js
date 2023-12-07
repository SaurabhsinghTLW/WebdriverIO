const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('Login and Navigate to digital hub screen ', async () => {
   console.log("I am line 7 Testing Webdriverio Automation");
        // await LoginPage.open("https://saurabhsingh_vZ4GAQ:yQwYzrRyiE9ciqg9X2hN@hub-cloud.browserstack.com/wd/hub")
        console.log("I am line 9 Testing Webdriverio Automation");
        
        console.log("I am line 12 Testing Webdriverio Automation");
        await LoginPage.login('jane.doe@nationwide.co.uk', 'abc123')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})

