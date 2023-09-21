// Lesson #25
import signUpPage from '../pages/sign-up.page.js'
import MainPage from '../pages/main.page.js'
import FreeTrialPage from '../pages/free-trial.page.js'
import NewsletterPage from '../pages/newsletter.page.js'

describe('GitHub main page', () => {
  xit('should open "Sign up" page', async () => {
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

  xit('should open the free trial page', async () => {
    await browser.url('https://github.com/')

    //! h2
    await MainPage.placeForEveryoneHeading.scrollIntoView()
    await expect(MainPage.placeForEveryoneHeading).toHaveTextContaining(
      'The place for anyone from anywhere to build anything'
    )

    //!Free trial button
    await FreeTrialPage.startFreeTrialLink.scrollIntoView()
    await expect(FreeTrialPage.startFreeTrialLink).toBeDisplayed()

    //! Free trial page
    await FreeTrialPage.startFreeTrialLink.click()
    await expect(FreeTrialPage.pickYourFreeTrialHeading).toExist()
    await FreeTrialPage.enterpriseCloudBox.click()
  })

  xit('should open the newsletter page', async () => {
    await browser.url('https://github.com/')

    //! Subscribe button
    await MainPage.subscribeButton.scrollIntoView()
    await expect(MainPage.subscribeButton).toBeDisplayed()
    await MainPage.subscribeButton.click()
    await expect(browser).toHaveUrl('https://resources.github.com/newsletter/')

    //! Heading
    await expect(NewsletterPage.subscribeHeading).toBeDisplayed()
    await expect(NewsletterPage.subscribeHeading).toHaveText(
      'Subscribe to our developer newsletter'
    )

    //! Form
    await NewsletterPage.emailInput.scrollIntoView()
    await NewsletterPage.emailInput.click()
    await NewsletterPage.setEmailInput('abcd12034@gmail.com')

    await NewsletterPage.countryInput.scrollIntoView()
    await NewsletterPage.countryInput.click()
    await NewsletterPage.setCountryOption('UA')

    await NewsletterPage.agreeCheckbox.click()
    await NewsletterPage.subscribeButton.click()

    await expect(NewsletterPage.subscribeHeading).toHaveText(
      'Thanks for subscribing!'
    )
  })
})
