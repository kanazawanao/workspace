describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=usersentrycontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('client-manager-users-entry-container').should('exist');
  });
});
