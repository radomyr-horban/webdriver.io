class MainPage {
  get placeForEveryoneHeading() {
    return $(
      'h2[class="color-fg-default mb-3 h3-mktg col-lg-8 mx-md-auto px-3"]'
    )
  }

  get pricingLink() {
    return $('nav a[href="/pricing"]')
  }

  get searchField() {
    return $('span[data-target="qbsearch-input.inputButtonText"]')
  }

  get searchInput() {
    return $('#query-builder-test')
  }

  get signUpLink() {
    return $('a.HeaderMenu-link--sign-up')
  }

  get subscribeButton() {
    return $('//a[normalize-space(text()) = "Subscribe"]')
  }

  async setSearchInput(value) {
    await this.searchInput.setValue(value)
  }
}

export default new MainPage()
