describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=listpresentercomponent--primary&knob-inputData'));

  it('should render the component', () => {
    cy.get('ui-list-presenter').should('exist');
  });
});
