class SignUpPage {
  get signUpIntroText() {
    return $('span[data-target="typing-effect.content"]')
  }

  get emailInputField() {
    return $('input[aria-describedby="email-err"]')
  }
  get passwordInputField() {
    return $('input[aria-describedby="password-err"]')
  }
  get usernameInputField() {
    return $('input[aria-describedby="login-err"]')
  }
  get optInContainerField() {
    return $('input[name="opt_in"]')
  }

  get continueToPasswordButton() {
    return $('button[data-continue-to="password-container"]')
  }
  get continueToUsernameButton() {
    return $('button[data-continue-to="username-container"]')
  }
  get continueToOptInButton() {
    return $('button[data-continue-to="opt-in-container"]')
  }
  get continueToCaptchaButton() {
    return $('button[data-continue-to="captcha-and-submit-container"]')
  }

  async clickOnContinueToPasswordButton() {
    await this.continueToPasswordButton.click()
  }
  async clickOnContinueToUsernameButton() {
    await this.continueToUsernameButton.click()
  }
  async clickOnContinueToOptInButton() {
    await this.continueToOptInButton.click()
  }
  async clickOnContinueToCaptchaButton() {
    await this.continueToCaptchaButton.click()
  }

  async setEmailInputField(value) {
    await this.emailInputField.setValue(value)
  }
  async setPasswordInputField(value) {
    await this.passwordInputField.setValue(value)
  }
  async setUsernameInputField(value) {
    await this.usernameInputField.setValue(value)
  }
  async setOptInContainerField(value) {
    await this.optInContainerField.setValue(value)
  }
}

export default new SignUpPage()
