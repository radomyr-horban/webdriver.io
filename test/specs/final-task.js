// Lesson #25
import signUpPage from '../pages/sign-up.page.js'

describe('GitHub main page', () => {
  it('should open "Sign up" page', async () => {
    await browser.url('https://github.com/')

    const signUpLink = await $('a.HeaderMenu-link--sign-up')
    await signUpLink.click()

    //! sign-up box
    await expect(signUpPage.signUpIntroText).toHaveTextContaining(
      'Welcome to GitHub!',
      'Let’s begin the adventure'
    )

    //! email
    await signUpPage.emailInputField.waitForDisplayed()
    await signUpPage.setEmailInputField('abcd12034@gmail.com')

    await signUpPage.continueToPasswordButton.waitForEnabled()
    await signUpPage.continueToPasswordButton.click()

    //! password
    await signUpPage.passwordInputField.waitForDisplayed()
    await signUpPage.setPasswordInputField('very-strong-pass123')

    await signUpPage.continueToUsernameButton.waitForEnabled()
    await signUpPage.continueToUsernameButton.click()

    //! username
    await signUpPage.usernameInputField.waitForDisplayed()
    await signUpPage.setUsernameInputField('Thomas-469725')

    await signUpPage.continueToOptInContainerButton.waitForEnabled()
    await signUpPage.continueToOptInContainerButton.click()

    //! opt-in
    await signUpPage.optInContainerField.waitForDisplayed()
    await signUpPage.setOptInContainerField('n')

    await signUpPage.continueToCaptchaButton.waitForEnabled()
    await signUpPage.continueToCaptchaButton.click()
  })
})
