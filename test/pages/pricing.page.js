class PricingPage {
  get compareAllFeaturesHeading() {
    return $('//h1[text() = "Compare features"]')
  }

  get compareAllFeaturesLink() {
    return $('a[href="#compare-features"]')
  }

  get pricingHeading() {
    return $('h1.h2-mktg')
  }

  async setCountryOption(value) {
    await $(`option[value=${value}]`).click()
  }
}

export default new PricingPage()
