describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=selectpresentercomponent--primary&knob-inputData'));

  it('should render the component', () => {
    cy.get('ui-select-presenter').should('exist');
  });
});
