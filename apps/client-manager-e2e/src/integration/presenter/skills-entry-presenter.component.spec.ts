describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=skillsentrypresentercomponent--primary&knob-formGroup'));

  it('should render the component', () => {
    cy.get('client-manager-skills-entry-presenter').should('exist');
  });
});
