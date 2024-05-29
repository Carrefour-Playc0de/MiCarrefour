import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/Login/LoginPage'
// import { ProfilePage } from '../pageObjectModel/Login/ProfilePage'

const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    loginPage: LoginPage
    // profilePage: ProfilePage
}>({
    loginPage: async ({ page, context }, use) => {
        const loginPage = new LoginPage(page, context, environment)
        await use(loginPage)
    },

    // mainPageAndAcceptCookies: async ({ page, context }, use) => {
    //     await use(new MainPageAndAcceptCookies(page, context, environment))
    // },

    // profilePage: async ({ page, context }, use) => {
    //     const profilePage = new ProfilePage(page, context, environment)
    //     await use(profilePage)
    // },
})

export default test
