describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputcontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('ui-input').should('exist');
  });
});
