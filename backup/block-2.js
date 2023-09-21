//! isDisplayed(), isClickable()
describe.skip('Webdriver main page', () => {
  xit('should show if an element is clickable', async () => {
    await browser.url('https://webdriver.io/')

    const blogButton = await $('.button[href="/docs/gettingstarted"]')
    let clickable = await blogButton.isClickable()
    console.log('Is clickable: ' + clickable)
  })

  xit('should show if an element is displayed', async () => {
    await browser.url('https://webdriver.io/')

    const blogButton = await $('.button[href="/docs/gettingstarted"]')
    let displayed = await blogButton.isDisplayed()
    console.log('Is displayed: ' + displayed)
  })

  xit('should show if an element is visible', async () => {
    await browser.url('https://webdriver.io/')

    const blogButton = await $('.button[href="/docs/gettingstarted"]')
    let displayedInViewport = await blogButton.isDisplayedInViewport()
    console.log('Is blog button displayed in viewport: ' + displayedInViewport)
  })

  xit('should show if an element is visible in viewport', async () => {
    await browser.url('https://webdriver.io/')

    const footerLink = await $(
      '.footer__link-item[href="/docs/gettingstarted"]'
    )
    let displayedInViewport = await footerLink.isDisplayedInViewport()
    console.log('Is footer link displayed in viewport: ' + displayedInViewport)
  })
})

//! isEnabled(), isFocused(), scrollIntoView()
describe.skip('Webdriver main page', () => {
  xit('should show if an element is enabled', async () => {
    await browser.url('https://webdriver.io/')

    const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
    let isEnabled = await getStartedButton.isEnabled()
    console.log('Is get started button enabled: ' + isEnabled)
  })

  xit('should show if an element is focused', async () => {
    await browser.url('https://webdriver.io/')

    const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
    let isFocused = await getStartedButton.isFocused()
    console.log('Is get started button focused before click: ' + isFocused)
    await browser.pause(2000)
    await getStartedButton.click()
    console.log('Is get started button focused after click: ' + isFocused)
    await browser.pause(2000)
  })

  xit('should show movement to element action', async () => {
    await browser.url('https://webdriver.io/')

    const getStartedLink = await $(
      '.footer__link-item[href="/docs/gettingstarted"]'
    )
    await browser.pause(2000)
    await getStartedLink.scrollIntoView()
    await browser.pause(2000)
  })
})

//! saveScreenshot, newWindow(), switchWindow()
describe.skip('Webdriver main page', () => {
  xit('should save screenshot command', async () => {
    await browser.url('https://webdriver.io/')

    const getStartedLink = await $(
      '.footer__link-item[href="/docs/gettingstarted"]'
    )
    await browser.pause(2000)
    await getStartedLink.scrollIntoView()
    await browser.pause(2000)
    await getStartedLink.saveScreenshot('linkScreenshot.png')
  })

  xit('should save screenshot command', async () => {
    await browser.url('https://webdriver.io/')

    await browser.newWindow('https://www.google.com/')
    await browser.pause(2000)

    await browser.switchWindow('https://webdriver.io/')
    await browser.pause(2000)
  })
})
