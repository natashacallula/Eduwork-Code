/// <reference types="cypress" />

describe('Automation Testing of Saucedemo website', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
      })

    it('Login using registered username & password 1',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
            
            //Visit the website
            cy.url().should('include', 'saucedemo.com')

            //Type username
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            
            //Type password
            cy.get('#password').clear()
            cy.get('#password').type(password)

            //Click login button
            cy.get('#login-button').click()
            cy.get('.title')
            .should('be.visible')
            .and('contain.text', 'Products');
        })
     });

     it('Login using registered username & password 2',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username2
            const password = sauce.password1
            
            //Visit the website
            cy.url().should('include', 'saucedemo.com')

            //Type username
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            
            //Type password
            cy.get('#password').clear()
            cy.get('#password').type(password)

            //Click login button
            cy.get('#login-button').click()
            cy.get('h3[data-test="error"')
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
        })
     });

     it('Login using registered username & password 3',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username3
            const password = sauce.password1
            
            //Visit the website
            cy.url().should('include', 'saucedemo.com')

            //Type username
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            
            //Type password
            cy.get('#password').clear()
            cy.get('#password').type(password)

            //Click login button
            cy.get('#login-button').click()
            cy.get('.title')
            .should('be.visible')
            .and('contain.text', 'Products');
        })
     });

     it('Login using registered username & password 4',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username4
            const password = sauce.password1
            
            //Visit the website
            cy.url().should('include', 'saucedemo.com')

            //Type username
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            
            //Type password
            cy.get('#password').clear()
            cy.get('#password').type(password)

            //Click login button
            cy.get('#login-button').click()
            cy.get('.title')
            .should('be.visible')
            .and('contain.text', 'Products');
        })
     });

     it('Login using unregistered username & registered password',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username5
            const password = sauce.password1
            
            //Visit the website
            cy.url().should('include', 'saucedemo.com')

            //Type username
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            
            //Type password
            cy.get('#password').clear()
            cy.get('#password').type(password)

            //Click login button
            cy.get('#login-button').click()
            cy.get('h3[data-test="error"')
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
        })
     });

     it('Login using registered username & unregistered password',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password2
            
            //Visit the website
            cy.url().should('include', 'saucedemo.com')

            //Type username
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            
            //Type password
            cy.get('#password').clear()
            cy.get('#password').type(password)

            //Click login button
            cy.get('#login-button').click()
            cy.get('h3[data-test="error"')
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
        })
     });

     it('Login using unregistered username & password',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username5
            const password = sauce.password2
            
            //Visit the website
            cy.url().should('include', 'saucedemo.com')

            //Type username
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            
            //Type password
            cy.get('#password').clear()
            cy.get('#password').type(password)

            //Click login button
            cy.get('#login-button').click()
            cy.get('h3[data-test="error"')
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
        })
     });
     it('Filling out all the information for shipping',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
            const firstname = sauce.first
            const lastname = sauce.last
            const postalcode = sauce.postal
            
            //Login Account
            cy.url().should('include', 'saucedemo.com')

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)

            cy.get('#login-button').click()
            cy.get('.title')
            .should('be.visible')
            .and('contain.text', 'Products');
            
            //Add an item to the cart & Checkout
            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('.shopping_cart_link').click()
            cy.url().should('include', 'cart.html')

            cy.get('#checkout').click()
            cy.url().should('include', 'one.html')

            //Filling shipping information
            cy.get('#first-name').clear()
            cy.get('#first-name').type(firstname)
            cy.get('#last-name').clear()
            cy.get('#last-name').type(lastname)
            cy.get('#postal-code').clear()
            cy.get('#postal-code').type(postalcode)
            cy.get('#continue').click()

            cy.url().should('include', 'checkout-step-two.html')

        })
     });
     it('Not filling out all the postal code',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
            const firstname = sauce.first
            const lastname = sauce.last
            
            //Login Account
            cy.url().should('include', 'saucedemo.com')

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)

            cy.get('#login-button').click()
            cy.get('.title')
            .should('be.visible')
            .and('contain.text', 'Products');
            
            //Add an item to the cart & Checkout
            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('.shopping_cart_link').click()
            cy.url().should('include', 'cart.html')

            cy.get('#checkout').click()
            cy.url().should('include', 'one.html')

            //Filling shipping information
            cy.get('#first-name').clear()
            cy.get('#first-name').type(firstname)
            cy.get('#last-name').clear()
            cy.get('#last-name').type(lastname)
            cy.get('#continue').click()

            cy.get('h3[data-test="error"')
            .should('be.visible')
            .and('contain.text', 'Error: Postal Code is required');
        })
     });

     it('Not filling out the first name for shipping',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
            const lastname = sauce.last
            const postalcode = sauce.postal
            
            //Login Account
            cy.url().should('include', 'saucedemo.com')

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)

            cy.get('#login-button').click()
            cy.get('.title')
            .should('be.visible')
            .and('contain.text', 'Products');
            
            //Add an item to the cart & Checkout
            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('.shopping_cart_link').click()
            cy.url().should('include', 'cart.html')

            cy.get('#checkout').click()
            cy.url().should('include', 'one.html')

            //Filling shipping information
            cy.get('#last-name').clear()
            cy.get('#last-name').type(lastname)
            cy.get('#postal-code').clear()
            cy.get('#postal-code').type(postalcode)
            cy.get('#continue').click()

            cy.get('h3[data-test="error"')
            .should('be.visible')
            .and('contain.text', 'Error: First Name is required');

        })
     });


     it('Not filling out all the last name for shipping',() => {
        
        cy.fixture("sauce").then(sauce => {
            const username = sauce.username1
            const password = sauce.password1
            const firstname = sauce.first
            const postalcode = sauce.postal
            
            //Login Account
            cy.url().should('include', 'saucedemo.com')

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)

            cy.get('#login-button').click()
            cy.get('.title')
            .should('be.visible')
            .and('contain.text', 'Products');
            
            //Add an item to the cart & Checkout
            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('.shopping_cart_link').click()
            cy.url().should('include', 'cart.html')

            cy.get('#checkout').click()
            cy.url().should('include', 'one.html')

            //Filling shipping information
            cy.get('#first-name').clear()
            cy.get('#first-name').type(firstname)
            cy.get('#postal-code').clear()
            cy.get('#postal-code').type(postalcode)
            cy.get('#continue').click()

            cy.get('h3[data-test="error"')
            .should('be.visible')
            .and('contain.text', 'Error: Last Name is required');

        })
     });

 });