describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=skillslistpresentercomponent--primary&knob-skills$&knob-displayedColumns'));

  it('should render the component', () => {
    cy.get('client-manager-skills-list-presenter').should('exist');
  });
});
