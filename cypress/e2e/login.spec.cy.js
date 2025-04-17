import loginPage from '../pages/loginPage.cy.js'
import userData from '../fixtures/User/userData.json'
import dashboardPage from '../pages/dashboardPage.cy.js'

const loginPageObject = new loginPage()
const dashboardPageObject = new dashboardPage()
describe('Orange Tests', () => {

  it('login - Success', () => {
    loginPageObject.accessLoginPage()
    loginPageObject.loginWithUser(userData.userSuccess.login, userData.userSuccess.password)
    cy.get(loginPageObject.Selectors().loginFailAlert).should('not.exist')
  })
  it('login - Fail', () => {
    loginPageObject.accessLoginPage()
    loginPageObject.loginWithUser(userData.userFail.login, userData.userFail.password)
    cy.get(loginPageObject.Selectors().loginFailAlert).should('exist')

  })
  it.only('Dashboard', () => {
    //login
    loginPageObject.accessLoginPage()
    loginPageObject.loginWithUser(userData.userSuccess.login, userData.userSuccess.password)
    cy.get(loginPageObject.Selectors().loginFailAlert).should('not.exist')
    //access dashboard page
    dashboardPageObject.accessDashboardPage()
  })
})