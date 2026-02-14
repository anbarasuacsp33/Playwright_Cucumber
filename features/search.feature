@Search
Feature: Search Feature
  @Sce01
  Scenario: Possitive Search
    Given I am on ebay home page
    When  Search for iphone
    # And Search Result Verified
    # When I login with valid credentials
    # Then I should be logged in successfully
  @Sce02
  Scenario: Negative Search
    Given I am on ebay home page
    When Search For Negativesceario

  @Master
  Scenario Outline: Product Search
   Given I am on ebay home page
   When Search a Product "<Product>"
   Then Vserify The Search Results
   Examples:
       | Product  |
       | iphone   |
       | %&^FJJ*& |
       | moto     |
  
  @Search-multi
   Scenario: multi window handling by click first product fromebay search result
    Given I am on ebay home page
    When Search a Product "<Product>"
    And Click first product from the search result
    Then Product detail page verified
    Examples:
       | Product  |
       | iphone   |
       | moto     |
  
  
  


       



