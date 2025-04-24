import loginPage from '../pages/loginPage.cy.js'
import userData from '../fixtures/User/userData.json'
import dashboardPage from '../pages/dashboardPage.cy.js'

const loginPageObject = new loginPage()
const dashboardPageObject = new dashboardPage()
describe('Dashboard Tests', () => {
  it.only('Dashboard', () => {
    //login
    loginPageObject.loginWithUser(userData.userSuccess.login, userData.userSuccess.password)
    //access dashboard page
    dashboardPageObject.accessDashboardPage()
  })
})