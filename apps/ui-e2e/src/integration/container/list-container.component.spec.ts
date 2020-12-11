describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=listcontainercomponent--primary&knob-dataSource'));

  it('should render the component', () => {
    cy.get('ui-list').should('exist');
  });
});
