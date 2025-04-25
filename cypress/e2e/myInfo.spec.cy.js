import loginPage from '../pages/loginPage.cy.js'
import userData from '../fixtures/User/userData.json'
import myInfoPage from '../pages/myInfo.cy.js'

const loginPageObject = new loginPage()
const myInfoPageObject = new myInfoPage()
describe('My Info Tests', () => {
  it.only('myInfo', () => {
    //login
    loginPageObject.Login(userData.userSuccess.login, userData.userSuccess.password)
    //access myInfo page
    myInfoPageObject.accessMyInfoPage()
    myInfoPageObject.fillMyInfoFormPersonal("giovanni", "mario", "rossi")
    myInfoPageObject.fillMyInfoFormProfessional("123456", "123456", "123456", "2024-12-31")
    myInfoPageObject.fillMyInfoFormStatus()
    myInfoPageObject.fillMyInfoCustomFields()
  })
})  