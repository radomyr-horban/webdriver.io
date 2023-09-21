class FreeTrialPage {
  //! free trial link
  get startFreeTrialLink() {
    return $('a[data-test-selector="start-trial-button"]')
  }
  //! h1 - Pick your free trial
  get pickYourFreeTrialHeading() {
    return $('//h1[normalize-space(text()) = "Pick your trial plan"]')
  }
  // ! Enterprise Cloud
  get enterpriseCloudBox() {
    return $('div.pricing-recommended-plan')
  }
}

export default new FreeTrialPage()
