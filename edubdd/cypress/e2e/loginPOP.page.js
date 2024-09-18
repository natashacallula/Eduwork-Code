const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME = '#user_login';
const PASSWORD = '#user_password';
const SIGN_IN = 'Sign in';

class LoginPage {
    static visit() {
        cy.visit(URL);
    }

    static FillUsername(username) {
        cy.get(USERNAME).type(username);
    }

    static FillPassword(password){
        cy.get(PASSWORD).type(password);
    }

    static SignIn(){
        cy.contains(SIGN_IN).click();
    }
}
export default LoginPage;