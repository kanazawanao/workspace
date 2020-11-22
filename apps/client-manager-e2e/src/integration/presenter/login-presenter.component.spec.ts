describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=loginpresentercomponent--primary&knob-formGroup'));

  it('should render the component', () => {
    cy.get('client-manager-login-presenter').should('exist');
  });
});
