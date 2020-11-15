describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=datepickerpresentercomponent--primary'));

  it('should render the component', () => {
    cy.get('ui-date-picker-presenter').should('exist');
  });
});
