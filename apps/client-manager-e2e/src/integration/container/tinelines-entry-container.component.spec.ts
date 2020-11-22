describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tinelinesentrycontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('client-manager-tinelines-entry-container').should('exist');
  });
});
