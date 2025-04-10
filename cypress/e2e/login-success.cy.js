describe('Orange Tests', () => {

  const selectorList = {
      loginField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
      passwordField: ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
      loginButton: ".oxd-button",
      sectionTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
      sectionTopBarText: "Dashboard",
      loginFailAlert: ".oxd-alert"
  }
  it('login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.loginField).type('admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTopBar).contains('Dashboard')
  })

  it.skip('login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.loginField).type('admin')
    cy.get(selectorList.passwordField).type('admin')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.loginFailAlert).should('be.visible')
  })
})