class SignUpPage {
  //! sign up box
  get signUpIntroText() {
    return $('span[data-target="typing-effect.content"]')
  }

  //! input fields
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

  //! continue buttons
  get continueToPasswordButton() {
    return $('button[data-continue-to="password-container"]')
  }
  get continueToUsernameButton() {
    return $('button[data-continue-to="username-container"]')
  }
  get continueToOptInContainerButton() {
    return $('button[data-continue-to="opt-in-container"]')
  }
  get continueToCaptchaButton() {
    return $('button[data-continue-to="captcha-and-submit-container"]')
  }

  //! methods
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
