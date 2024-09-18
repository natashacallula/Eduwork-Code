Feature: Search functionality on Zero Bank website

Scenario: Successful search for a keyword
    Given I am on the Zero Bank homepage
    When I type "online" into search box
    Then I should see the search results page
    Then I should see a link for "Zero - online statements" 

Scenario: Unsuccessful search with no matching results
    Given I am on the Zero Bank homepage
    When I type "Loid Forger" into the search box
    Then I should see the search results page
    Then I should see a message containing "No results were found for the query: Loid Forger"