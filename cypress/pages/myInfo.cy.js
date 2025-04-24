class myInfoPage{
  Selectors(){
    const selectorList   = {
      sectionTopBar: ".oxd-topbar-header",
      sectionTopBarText: "PIM",
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      myInfoFormFirstName: "[placeholder='First Name']",
      myInfoFormMidName: "[name='middleName']",
      myInfoFormLastName: "[name='lastName']",
      myInfoGenericFild: ".oxd-input",
      driverLicenseExpiryDate: "[placeholder='yyyy-dd-mm']",
    }
    return selectorList
  }
  accessMyInfoPage(){
    cy.visit('/pim/viewPersonalDetails/empNumber/7')
  }
  clickMyInfoButton(){
    cy.get(this.Selectors().myInfoButton).click()
    cy.url().should('include', '/dashboard/i/pim/viewPersonalDetails/empNumber/7')
    cy.location('pathname').should('eq', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
  }
  FillMyInfoForm(firstName, midName, lastName, nickname, employeeID, otherID, driverLicenseNumber, licenseExpiryDate){
    cy.get(this.Selectors().myInfoFormFirstName).clear().type(firstName)
    cy.get(this.Selectors().myInfoFormMidName).clear().type(midName)
    cy.get(this.Selectors().myInfoFormLastName).clear().type(lastName)
    cy.get(this.Selectors().myInfoGenericFild).eq(5).clear().type(nickname)
    cy.get(this.Selectors().myInfoGenericFild).eq(6).clear().type(employeeID)
    cy.get(this.Selectors().myInfoGenericFild).eq(7).clear().type(otherID)
    cy.get(this.Selectors().myInfoGenericFild).eq(8).clear().type(driverLicenseNumber)
    cy.get(this.Selectors().driverLicenseExpiryDate).eq(0).clear().type(licenseExpiryDate)
  }
}
export default myInfoPage
