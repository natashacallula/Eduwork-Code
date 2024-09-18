const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCH = '#searchTerm';

class SearchPage {
    static visit() {
        cy.visit(URL);
    }
    static search(){
        return cy.get(SEARCH);
    }
}
export default SearchPage;