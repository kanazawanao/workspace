describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=datepickercontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('ui-date-picker-container').should('exist');
  });
});
