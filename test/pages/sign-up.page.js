class SignUpPage {
  get emailInputField() {
    return $('input[aria-describedby="email-err"]')
  }

  async setEmailInputField(value) {
    await this.emailInputField.setValue(value)
  }
}

export default new SignUpPage()
