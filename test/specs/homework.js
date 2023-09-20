describe('Homework 1', () => {
  xit('should open correct API url', async () => {
    await browser.url('https://webdriver.io/')

    const apiLink = await $('=API')
    await apiLink.click()
    await expect(browser).toHaveUrl('https://webdriver.io/docs/api')
  })

  xit('should contain correct header', async () => {
    await browser.url('https://webdriver.io/docs/api')

    const introHeader = await $('header h1').getText()
    await expect(introHeader).toBe('Introduction')
  })

  xit('should have a correct breadcrumb', async () => {
    await browser.url('https://webdriver.io/docs/api')

    const nameBreadcrumb = await $('span.breadcrumbs__link').getText()

    await expect(nameBreadcrumb).toBe('Introduction')
  })

  xit('should have a correct `WebDriver` link ', async () => {
    await browser.url('https://webdriver.io/docs/api')

    const WebDriverLink = await $('=WebDriver')

    await expect(WebDriverLink).toHaveHref('/docs/api/webdriver')
  })

  it('should have a search field', async () => {
    await browser.url('https://webdriver.io/docs/api')

    const searchField = await $('.DocSearch-Button-Placeholder')

    await searchField.click()

    let seacrhInput = await $('#docsearch-input')
    await seacrhInput.setValue('all is done')

    // const resetButton = $('.DocSearch-Reset')
    const resetButton = $('aria/Clear the query')
    await resetButton.click()
  })
})
