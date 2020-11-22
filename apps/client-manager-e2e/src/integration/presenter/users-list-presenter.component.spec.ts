describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=userslistpresentercomponent--primary&knob-users$&knob-displayedColumns'));

  it('should render the component', () => {
    cy.get('client-manager-users-list-presenter').should('exist');
  });
});
