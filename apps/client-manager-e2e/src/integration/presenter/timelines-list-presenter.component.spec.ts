describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=timelineslistpresentercomponent--primary'));

  it('should render the component', () => {
    cy.get('client-manager-timelines-list-presenter').should('exist');
  });
});
