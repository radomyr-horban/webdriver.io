class PricingPage {
  get pricingHeading() {
    return $('h1.h2-mktg')
  }

  get compareAllFeaturesLink() {
    return $('a[href="#compare-features"]')
  }

  get compareAllFeaturesHeading() {
    return $('//h1[text() = "Compare features"]')
  }

  async setCountryOption(value) {
    await $(`option[value=${value}]`).click()
  }
}

export default new PricingPage()
