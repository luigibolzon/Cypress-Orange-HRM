class dashboardPage{
  Selectors(){
    const selectorList   = {
      sectionTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
      sectionTopBarText: "Dashboard",
      myDashboardButton: ":nth-child(6) > .oxd-main-menu-item",
      myDashboardInfoForm: ".orangehrm-edit-employee-content > :nth-child(1)"
    }
    return selectorList
  }
  accessDashboardPage(){
    cy.visit('/dashboard/index')
  }
  clickMyDashboardButton(){
    cy.get(this.Selectors().myDashboardButton).click()
    cy.url().should('include', '/dashboard/index')
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')

  }
}
export default dashboardPage