describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logincontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('client-manager-login-container').should('exist');
  });
});
