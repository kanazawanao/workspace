describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tablepresentercomponent--primary&knob-columns$'));

  it('should render the component', () => {
    cy.get('ui-table-presenter').should('exist');
  });
});
