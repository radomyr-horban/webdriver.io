class NewsletterPage {
  get agreeCheckbox() {
    return $('input[id="gated-agree-marketingEmailOptin1"]')
  }

  get countryInput() {
    return $('select[data-testid="countrySelect"]')
  }

  get emailInput() {
    return $('input[type="email"]')
  }

  get optionUkraine() {
    return $('option[value="UA"]')
  }

  get subscribeButton() {
    return $('//span[text()="Subscribe"]')
  }

  get subscribeHeading() {
    return $('h1[id="hero-section-brand-heading"]')
  }

  async setCountryOption(value) {
    await $(`option[value=${value}]`).click()
  }

  async setEmailInput(value) {
    await this.emailInput.setValue(value)
  }
}

export default new NewsletterPage()
