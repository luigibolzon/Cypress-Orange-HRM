class loginPage{
  Selectors(){
    const selectorList   = {
      loginField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
      passwordField: ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
      loginButton: ".oxd-button",
      sectionTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
      sectionTopBarText: "Dashboard",
      loginFailAlert: ".oxd-alert",
      myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
      myInfoForm: ".orangehrm-edit-employee-content > :nth-child(1)"
    }
    return selectorList
  }
  accessLoginPage(){
    cy.visit('/auth/login')
  }
  loginWithUser(username, password){
    cy.get(this.Selectors.selectorList.loginField).type(username)
    cy.get(this.Selectors.selectorList.passwordField).type(password)
    cy.get(this.Selectors.selectorList.loginButton).click() 
  }
}




import userData from '../fixtures/User/userData.json'


describe('Orange Tests', () => {

  const selectorList = {
      loginField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
      passwordField: ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
      loginButton: ".oxd-button",
      sectionTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
      sectionTopBarText: "Dashboard",
      loginFailAlert: ".oxd-alert",
      myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
      myInfoForm: ".orangehrm-edit-employee-content > :nth-child(1)"

  }



  it.only('login success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.loginField).type(userData.userSuccess.login)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.loginFailAlert).should('not.exist')
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.myInfoForm).should('exist')

  })

  it('login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.loginField).type(userData.userFail.login)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.loginFailAlert).should('exist')
  })
})  

export default loginPage
