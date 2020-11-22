describe('client-manager', () => {
  beforeEach(() => cy.visit('/iframe.html?id=timelineslistcontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('client-manager-timelines-list-container').should('exist');
  });
});
