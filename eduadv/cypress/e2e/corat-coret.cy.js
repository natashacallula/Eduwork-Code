/// <reference types ="cypress" />
    
describe('Searchbox Test', () => {
    before(() => {
      cy.visit('http://zero.webappsecurity.com/index.html');
    });
  
    it('Should type into searchbox and submit', () => {
      cy.get('#searchTerm', { timeout: 10000 }).type('some text {enter}'); // Menambah timeout untuk memastikan elemen muncul
      cy.wait(2000); // Menunggu halaman selesai dimuat
      cy.get('h2').should('contain.text', 'Search Result'); // Assertion
    });
  
    it('Percobaan1', () => {
      cy.get('#searchTerm').type('some text {enter}');
    });
  });
  