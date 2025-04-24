class loginPage{
  Selectors(){
    const selectorList = {
      loginField: "[placeholder='Username']",
      passwordField: ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
      loginButton: ".oxd-button",
      loginFailAlert: ".oxd-alert",
    }
    return selectorList
  }

  accessLoginPage(){
    cy.visit('/auth/login')
  }

  loginWithUser(username, password){
    cy.get(this.Selectors().loginField).type(username)
    cy.get(this.Selectors().passwordField).type(password)
    cy.get(this.Selectors().loginButton).click() 
  }
  Login(username, password){
    this.accessLoginPage()
    this.loginWithUser(username, password)
    cy.get(this.Selectors().loginFailAlert).should('not.exist')
  }
}


export default loginPage
