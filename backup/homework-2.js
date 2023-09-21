// Lesson #13

describe.skip('Webdriver API page', () => {
  it('should display the Blog link in the footer', async () => {
    await browser.url('https://webdriver.io/')

    const apiMenuLink = await $('nav a[href="/docs/api"]')
    await apiMenuLink.click()

    const blogLink = await $('.footer__link-item[href="/blog"]')
    await blogLink.scrollIntoView()

    await expect(blogLink).toBeDisplayed()
  })

  it('should show if the "Next" link is visible and clickable', async () => {
    await browser.url('https://webdriver.io/')

    const apiMenuLink = await $('nav a[href="/docs/api"]')
    await apiMenuLink.click()

    const nextLink = await $(
      '.pagination-nav__link--next[href="/docs/api/protocols"]'
    )
    await nextLink.scrollIntoView()

    await expect(nextLink).toBeDisplayed()
    await expect(nextLink).toBeClickable()
  })

  it('should show the innerHTML of the "Next" link', async () => {
    await browser.url('https://webdriver.io/')

    const apiMenuLink = await $('nav a[href="/docs/api"]')
    await apiMenuLink.click()

    const nextLink = await $(
      '.pagination-nav__link--next[href="/docs/api/protocols"]'
    )
    const nextLinkInnerHTML = nextLink.getHTML()

    console.log('Next Link innerHTML: ' + nextLinkInnerHTML)
  })

  it('should wait until the "WebDriver Protocol" h1 heading', async () => {
    await browser.url('https://webdriver.io/')

    const apiMenuLink = await $('nav a[href="/docs/api"]')
    await apiMenuLink.click()

    const nextLink = await $(
      '.pagination-nav__link--next[href="/docs/api/protocols"]'
    )
    await nextLink.click()

    const h2WebdriverProtocol = await $('h2[id="webdriver-protocol"]')
    await h2WebdriverProtocol.waitUntil(
      async function () {
        return (await this.getText()) === 'WebDriver Protocol'
      },
      {
        timeout: 2000,
      }
    )
  })
})
