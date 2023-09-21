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
}

export default new MainPage()
