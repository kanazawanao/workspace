describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=usersentrypresentercomponent--primary&knob-formGroup&knob-editMode'));

  it('should render the component', () => {
    cy.get('client-manager-users-entry-presenter').should('exist');
  });
});
