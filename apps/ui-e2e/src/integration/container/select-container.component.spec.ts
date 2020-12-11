describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=selectcontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('ui-select').should('exist');
  });
});
