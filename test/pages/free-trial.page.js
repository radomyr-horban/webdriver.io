class FreeTrialPage {
  get enterpriseCloudBox() {
    return $('div.pricing-recommended-plan')
  }

  get pickYourFreeTrialHeading() {
    return $('//h1[normalize-space(text()) = "Pick your trial plan"]')
  }

  get startFreeTrialLink() {
    return $('a[data-test-selector="start-trial-button"]')
  }
}

export default new FreeTrialPage()
