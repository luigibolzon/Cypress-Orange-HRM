class myInfoPage {
  Selectors() {
    const selectorList = {
      sectionTopBar: ".oxd-topbar-header",
      sectionTopBarText: "PIM",
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      myInfoFormFirstName: "[placeholder='First Name']",
      myInfoFormMidName: "[name='middleName']",
      myInfoFormLastName: "[name='lastName']",
      myInfoGenericFild: ".oxd-input",
      driverLicenseExpiryDate: "[placeholder='yyyy-dd-mm']",
      formEmployeeID: ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
      formOtherID: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
      formDriverLicenseNumber: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
      formNationality: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text",
      formMartialStatus: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text", 
      formComboboxNationality: ".oxd-select-text--active >",   // importante manter esse > para o eq funcionar quando chamar ele lá no cyget
      formComboboxMaritalStatus: ".oxd-select-text--active >",
      formComboboxBloodType: ".oxd-select-text--active >",
      comboboxOption: ".oxd-select-dropdown >",

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
  fillMyInfoFormPersonal(firstName, midName, lastName){
    cy.get(this.Selectors().myInfoFormFirstName).clear().type(firstName)
    cy.get(this.Selectors().myInfoFormMidName).clear().type(midName)
    cy.get(this.Selectors().myInfoFormLastName).clear().type(lastName)
    //cy.get(this.Selectors().myInfoGenericFild).eq(5).clear().type(nickname)

  }
  fillMyInfoFormProfessional(employeeID, otherID, driverLicenseNumber, licenseExpiryDate){
    cy.get(this.Selectors().formEmployeeID).clear().type(employeeID)
    //cy.get(this.Selectors().myInfoGenericFild).eq(6).clear().type(employeeID)
    //cy.get(this.Selectors().myInfoGenericFild).eq(7).clear().type(otherID)
    //cy.get(this.Selectors().myInfoGenericFild).eq(8).clear().type(driverLicenseNumber)
    cy.get(this.Selectors().formOtherID).clear().type(otherID)    
    cy.get(this.Selectors().formDriverLicenseNumber).clear().type(driverLicenseNumber)
    cy.get(this.Selectors().driverLicenseExpiryDate).eq(0).clear().type(licenseExpiryDate)
    cy.get('.--close').click()
    cy.get(this.Selectors().formComboboxNationality).eq(0).click()
    cy.get(this.Selectors().comboboxOption).eq(4).click()
    cy.get(this.Selectors().formComboboxMaritalStatus).eq(2).click()
    cy.get(this.Selectors().comboboxOption).eq(2).click()
    cy.get(this.Selectors().formComboboxBloodType).eq(4).click()
    cy.get(this.Selectors().comboboxOption).eq(3).click()
    
  }
  fillMyInfoFormStatus(){

  }
  fillMyInfoCustomFields(){

  }
}
export default myInfoPage
