describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputpresentercomponent--primary'));

  it('should render the component', () => {
    cy.get('ui-input-presenter').should('exist');
  });
});
