import FreeTrialPage from '../pages/free-trial.page.js'
import MainPage from '../pages/main.page.js'
import NewsletterPage from '../pages/newsletter.page.js'
import PricingPage from '../pages/pricing.page.js'
import SearchResultsPage from '../pages/search.results.page.js'
import SignUpPage from '../pages/sign-up.page.js'

describe('GitHub main page', () => {
  it('should open "Sign up" page', async () => {
    await browser.url('https://github.com/')

    await MainPage.signUpLink.click()

    //! sign-up box
    await expect(SignUpPage.signUpIntroText).toHaveTextContaining(
      'Welcome to GitHub!',
      'Let’s begin the adventure'
    )

    //! email
    await SignUpPage.emailInputField.waitForDisplayed()
    await SignUpPage.setEmailInputField('abcd12034@gmail.com')

    await SignUpPage.continueToPasswordButton.waitForEnabled()
    await SignUpPage.continueToPasswordButton.click()

    //! password
    await SignUpPage.passwordInputField.waitForDisplayed()
    await SignUpPage.setPasswordInputField('very-strong-pass123')

    await SignUpPage.continueToUsernameButton.waitForEnabled()
    await SignUpPage.continueToUsernameButton.click()

    //! username
    await SignUpPage.usernameInputField.waitForDisplayed()
    await SignUpPage.setUsernameInputField('Thomas-469725')

    await SignUpPage.continueToOptInContainerButton.waitForEnabled()
    await SignUpPage.continueToOptInContainerButton.click()

    //! opt-in
    await SignUpPage.optInContainerField.waitForDisplayed()
    await SignUpPage.setOptInContainerField('n')

    await SignUpPage.continueToCaptchaButton.waitForEnabled()
    await SignUpPage.continueToCaptchaButton.click()
  })

  it('should open the free trial page', async () => {
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

  it('should open the newsletter page', async () => {
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

  it('should show pages containing the searched text', async () => {
    await browser.url('https://github.com/')

    //! Search field
    await MainPage.searchField.click()
    await MainPage.setSearchInput('act')
    await browser.keys('Enter')
    await SearchResultsPage.isRepositoryTitleRelevant('act')
  })

  it('should open Pricing page', async () => {
    await browser.url('https://github.com/')

    //! Search field
    await MainPage.pricingLink.click()

    await expect(PricingPage.pricingHeading).toBeDisplayed()
    await expect(PricingPage.pricingHeading).toHaveText(
      'Get the complete developer platform.'
    )

    //! Compare all features
    await PricingPage.compareAllFeaturesLink.scrollIntoView()
    await PricingPage.compareAllFeaturesLink.click()

    await PricingPage.compareAllFeaturesHeading.scrollIntoView()
    await expect(PricingPage.compareAllFeaturesHeading).toBeDisplayed()
  })
})
