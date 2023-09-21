// Lesson #8

describe.skip('Webdriver main page', () => {
  xit('should open the API link correctly', async () => {
    await browser.url('https://webdriver.io/')

    const apiMenuLink = await $('.navbar__link[href="/docs/api"]')
    await apiMenuLink.click()
    await expect(browser).toHaveUrl('https://webdriver.io/docs/api')
  })
})

describe('Webdriver API page', () => {
  xit('should have the correct h1 text', async () => {
    await browser.url('https://webdriver.io/docs/api')

    const introHeader = await $('header h1').getText()
    await expect(introHeader).toBe('Introduction')
  })

  xit('should have a correct breadcrumb text', async () => {
    await browser.url('https://webdriver.io/docs/api')

    const nameBreadcrumb = await $(
      '.breadcrumbs__link[itemprop="name"]'
    ).getText()

    await expect(nameBreadcrumb).toBe('Introduction')
  })

  xit('should have a correct `WebDriver` link ', async () => {
    await browser.url('https://webdriver.io/docs/api')

    const WebDriverLink = await $('a=WebDriver')

    await expect(WebDriverLink).toHaveHref('/docs/api/webdriver')
  })

  xit('should open and close the search field', async () => {
    await browser.url('https://webdriver.io/docs/api')

    const searchField = await $('.DocSearch-Button-Placeholder')

    await searchField.click()

    let seacrhInput = await $('#docsearch-input')
    await seacrhInput.setValue('all is done')

    const resetButton = $('aria/Clear the query')
    await resetButton.click()
  })
})
