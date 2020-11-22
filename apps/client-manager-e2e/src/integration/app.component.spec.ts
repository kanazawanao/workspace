describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('client-manager-root').should('exist');
  });
});
