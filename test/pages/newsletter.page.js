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
  get subscribeNewsletterButton() {
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

  async clickOnSubscribeNewsletterButton() {
    await this.subscribeNewsletterButton.click()
  }
  async clickOnEmailInput() {
    await this.emailInput.click()
  }
  async clickOnCountryInput() {
    await this.countryInput.click()
  }
  async clickOnAgreeCheckbox() {
    await this.agreeCheckbox.click()
  }
}

export default new NewsletterPage()
