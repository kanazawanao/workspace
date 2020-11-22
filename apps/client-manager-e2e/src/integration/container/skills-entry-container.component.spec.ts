describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=skillsentrycontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('client-manager-skills-entry-container').should('exist');
  });
});
