describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=skillslistcontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('client-manager-skills-list-container').should('exist');
  });
});
