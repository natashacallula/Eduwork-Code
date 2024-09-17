/// <reference types="cypress" />

describe('Automation Testing of Saucedemo website', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include', 'saucedemo.com')
    });
      
    it('Login using registered username & password',() => {
        
      cy.fixture("sauce").then(sauce => {
          const username = sauce.username1
          const password = sauce.password1
          
          cy.loginsauce(username, password)

          cy.url().should('include', 'inventory.html');
      })
   });

   it('Sort test 1 high to low', () => {
    cy.fixture("sauce").then(sauce => {
      const username = sauce.username1
      const password = sauce.password1
      
      cy.loginsauce(username, password)

      cy.url().should('include', 'inventory.html')

      cy.get('.product_sort_container').select('Price (high to low)')
      cy.get('option[value="hilo"]').should('have.value','hilo')
  })
});

it('Sort test 2 low to high', () => {
  cy.fixture("sauce").then(sauce => {
    const username = sauce.username1
    const password = sauce.password1
    
    cy.loginsauce(username, password)

    cy.url().should('include', 'inventory.html')

    cy.get('.product_sort_container').select('Price (low to high)')
    cy.get('option[value="lohi"]').should('have.value','lohi')
  })
});

it('Sort test 3 Z to A', () => {
  cy.fixture("sauce").then(sauce => {
    const username = sauce.username1
    const password = sauce.password1
    
    cy.loginsauce(username, password)

    cy.url().should('include', 'inventory.html')

    cy.get('.product_sort_container').select('Name (Z to A)')
    cy.get('option[value="za"]').should('have.value','za')
  })
});

it('Sort test 4 A to Z', () => {
  cy.fixture("sauce").then(sauce => {
    const username = sauce.username1
    const password = sauce.password1
    
    cy.loginsauce(username, password)

    cy.url().should('include', 'inventory.html')

    cy.get('.product_sort_container').select('Name (Z to A)')
    cy.get('.product_sort_container').select('Name (A to Z)')

    cy.get('option[value="az"]').should('have.value','az')
  })
});

it('cart 1',() => {
      
  cy.fixture("sauce").then(sauce => {
      const username = sauce.username1
      const password = sauce.password1
  
      cy.loginsauce(username, password)

      cy.url().should('include', 'inventory.html')
      
      cy.cartsauce()

      cy.url().should('include', 'one.html')
  })
});

it('cart 2',() => {
      
  cy.fixture("sauce").then(sauce => {
      const username = sauce.username1
      const password = sauce.password1
  
      cy.loginsauce(username, password)

      cy.url().should('include', 'inventory.html')
      
      cy.get('.shopping_cart_link').click()
      cy.url().should('include', 'cart.html')
      
      cy.get('#checkout').click()

      cy.url().should('include', 'one.html')
  })
});

   it('Filling out all the information for shipping',() => {
      
      cy.fixture("sauce").then(sauce => {
          const username = sauce.username1
          const password = sauce.password1
          const firstname = sauce.first
          const lastname = sauce.last
          const postalcode = sauce.postal
          
          cy.loginsauce(username, password)
      
            cy.url().should('include', 'inventory.html')
            
            cy.cartsauce()
      
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
          
          cy.loginsauce(username, password)
      
            cy.url().should('include', 'inventory.html')
            
            cy.cartsauce()
      
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
          
          cy.loginsauce(username, password)
      
            cy.url().should('include', 'inventory.html')
            
            cy.cartsauce()
      
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
          
         cy.loginsauce(username, password)
      
            cy.url().should('include', 'inventory.html')
            
            cy.cartsauce()
      
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