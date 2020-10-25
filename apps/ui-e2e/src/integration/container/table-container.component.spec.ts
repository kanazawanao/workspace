describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tablecontainercomponent--primary&knob-dataSource&knob-columns'));

  it('should render the component', () => {
    cy.get('ui-table-container').should('exist');
  });
});
