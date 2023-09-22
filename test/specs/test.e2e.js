import FreeTrialPage from '../pages/free-trial.page.js'
import MainPage from '../pages/main.page.js'
import NewsletterPage from '../pages/newsletter.page.js'
import PricingPage from '../pages/pricing.page.js'
import SearchResultsPage from '../pages/search.results.page.js'
import SignUpPage from '../pages/sign-up.page.js'

describe('GitHub main page', () => {
  it('should open the sign up page', async () => {
    await browser.url('https://github.com/')

    await MainPage.clickOnSignUpLink()
    await expect(SignUpPage.signUpIntroText).toHaveTextContaining(
      'Welcome to GitHub!',
      'Let’s begin the adventure'
    )

    await SignUpPage.emailInputField.waitForDisplayed()
    await SignUpPage.setEmailInputField('abcd12034@gmail.com')
    await SignUpPage.continueToPasswordButton.waitForEnabled()
    await SignUpPage.clickOnContinueToPasswordButton()

    await SignUpPage.passwordInputField.waitForDisplayed()
    await SignUpPage.setPasswordInputField('very-strong-pass123')
    await SignUpPage.continueToUsernameButton.waitForEnabled()
    await SignUpPage.clickOnContinueToUsernameButton()

    await SignUpPage.usernameInputField.waitForDisplayed()
    await SignUpPage.setUsernameInputField('Thomas-469725')
    await SignUpPage.continueToOptInButton.waitForEnabled()
    await SignUpPage.clickOnContinueToOptInButton()

    await SignUpPage.optInContainerField.waitForDisplayed()
    await SignUpPage.setOptInContainerField('n')
    await SignUpPage.continueToCaptchaButton.waitForEnabled()
    await SignUpPage.clickOnContinueToCaptchaButton
  })

  it('should open the free trial page', async () => {
    await browser.url('https://github.com/')

    await MainPage.placeForEveryoneHeading.scrollIntoView()
    await expect(MainPage.placeForEveryoneHeading).toHaveTextContaining(
      'The place for anyone from anywhere to build anything'
    )

    await FreeTrialPage.startFreeTrialLink.scrollIntoView()
    await expect(FreeTrialPage.startFreeTrialLink).toBeDisplayed()
    await FreeTrialPage.clickOnStartFreeTrialLink()

    await expect(FreeTrialPage.pickYourFreeTrialHeading).toExist()
    await FreeTrialPage.clickOnEnterpriseCloudBox()
  })

  it('should open the newsletter page', async () => {
    await browser.url('https://github.com/')

    await MainPage.subscribeButton.scrollIntoView()
    await expect(MainPage.subscribeButton).toBeDisplayed()
    await MainPage.clickOnSubscribeButton()
    await expect(browser).toHaveUrl('https://resources.github.com/newsletter/')

    await expect(NewsletterPage.subscribeHeading).toBeDisplayed()
    await expect(NewsletterPage.subscribeHeading).toHaveText(
      'Subscribe to our developer newsletter'
    )

    await NewsletterPage.emailInput.scrollIntoView()
    await NewsletterPage.clickOnEmailInput()
    await NewsletterPage.setEmailInput('abcd12034@gmail.com')

    await NewsletterPage.countryInput.scrollIntoView()
    await NewsletterPage.clickOnCountryInput()
    await NewsletterPage.setCountryOption('UA')

    await NewsletterPage.clickOnAgreeCheckbox()
    await NewsletterPage.clickOnSubscribeNewsletterButton()

    await expect(NewsletterPage.subscribeHeading).toHaveText(
      'Thanks for subscribing!'
    )
  })

  it('should show repositories with the searched text', async () => {
    await browser.url('https://github.com/')

    await MainPage.clickOnSearchField()
    await MainPage.setSearchInput('act')
    await browser.keys('Enter')

    await SearchResultsPage.isRepositoryTitleRelevant('act')
  })

  it('should open the pricing page', async () => {
    await browser.url('https://github.com/')

    await MainPage.clickOnPricingLink()

    await expect(PricingPage.pricingHeading).toBeDisplayed()
    await expect(PricingPage.pricingHeading).toHaveText(
      'Get the complete developer platform.'
    )

    await PricingPage.compareAllFeaturesLink.scrollIntoView()
    await PricingPage.clickOnCompareAllFeaturesLink()
    await PricingPage.compareAllFeaturesHeading.scrollIntoView()

    await expect(PricingPage.compareAllFeaturesHeading).toBeDisplayed()
  })
})
