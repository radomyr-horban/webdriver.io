// Lesson #25
import signUpPage from '../pages/sign-up.page.js'

describe('GitHub main page', () => {
  it('should open "Sign up" block', async () => {
    await browser.url('https://github.com/')

    //! sign-up box
    const signUpLink = await $('a.HeaderMenu-link--sign-up')
    await signUpLink.click()

    const signUpIntroText = await $('span[data-target="typing-effect.content"]')
    // await signUpBlock.waitForDisplayed({ timeout: 10000 })
    await expect(signUpIntroText).toHaveTextContaining(
      'Welcome to GitHub!',
      'Let’s begin the adventure'
    )

    //! email
    const emailInputField = await $('input[aria-describedby="email-err"]')

    // await signUpPage.emailInputField.waitForDisplayed()
    // await emailInputField.setValue('abcd12034@gmail.com')
    await signUpPage.setEmailInputField('abcd12034@gmail.com')

    const continueToPasswordButton = await $(
      'button[data-continue-to="password-container"]'
    )
    await continueToPasswordButton.waitUntil(async function () {
      return await this.isEnabled()
    })
    await continueToPasswordButton.click()

    // //! password
    // const passwordInputField = await $('input[aria-describedby="password-err"]')
    // await passwordInputField.waitForDisplayed()
    // await passwordInputField.setValue('very-strong-pass123')

    // const continueToUsernameButton = await $(
    //   'button[data-continue-to="username-container"]'
    // )

    // await continueToUsernameButton.waitUntil(async function () {
    //   return await this.isEnabled()
    // })
    // await continueToUsernameButton.click()

    // //! username
    // const usernameInputField = await $('input[aria-describedby="login-err"]')
    // await usernameInputField.setValue('Thomas-469725')

    // const continueToOptInContainerButton = await $(
    //   'button[data-continue-to="opt-in-container"]'
    // )
    // await continueToOptInContainerButton.waitUntil(async function () {
    //   return await this.isEnabled()
    // })
    // await continueToOptInContainerButton.click()

    // // ! opt-in
    // const optInContainerField = await $('input[name="opt_in"]')
    // await optInContainerField.setValue('n')

    // const continueToCaptchaButton = await $(
    //   'button[data-continue-to="captcha-and-submit-container"]'
    // )
    // await continueToCaptchaButton.waitUntil(async function () {
    //   return await this.isEnabled()
    // })
    // await continueToCaptchaButton.click()
  })
})
