class MainPage {
  get placeForEveryoneHeading() {
    return $(
      'h2[class="color-fg-default mb-3 h3-mktg col-lg-8 mx-md-auto px-3"]'
    )
  }
  //! Subscribe button
  get subscribeButton() {
    return $('//a[normalize-space(text()) = "Subscribe"]')
  }
  //! Search field
  get searchField() {
    return $('span[data-target="qbsearch-input.inputButtonText"]')
  }

  get searchInput() {
    return $('#query-builder-test')
  }

  get pricingLink() {
    return $('nav a[href="/pricing"]')
  }

  async setSearchInput(value) {
    await this.searchInput.setValue(value)
  }
}

export default new MainPage()
