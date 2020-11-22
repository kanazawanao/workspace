describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=userslistcontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('client-manager-users-list-container').should('exist');
  });
});
