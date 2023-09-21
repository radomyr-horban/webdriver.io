class NewsletterPage {
  get subscribeHeading() {
    return $('h1[id="hero-section-brand-heading"]')
  }
  get emailInput() {
    return $('input[type="email"]')
  }
  get countryInput() {
    return $('select[data-testid="countrySelect"]')
  }
  get optionUkraine() {
    return $('option[value="UA"]')
  }
  get agreeCheckbox() {
    return $('input[id="gated-agree-marketingEmailOptin1"]')
  }
  get subscribeButton() {
    return $('//span[text()="Subscribe"]')
  }

  async setEmailInput(value) {
    await this.emailInput.setValue(value)
  }
  async setCountryOption(value) {
    await $(`option[value=${value}]`).click()
  }
}

export default new NewsletterPage()
