Feature: As a macys customer, I want to look at the items on Sale from home page.

@Sale
Scenario: Customer is displayed with macys website and wants to navigate to sales page
Given I am on macys website
When I click on "sale"
Then I should see "sales item page"