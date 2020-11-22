describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tinelinesentrypresentercomponent--primary'));

  it('should render the component', () => {
    cy.get('client-manager-tinelines-entry-presenter').should('exist');
  });
});
