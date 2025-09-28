@placeorder
Feature: PlaceOrder Feature

  As a user
  I want to place a order

  Scenario: To Verify the home page
    Given I navigate to the ebay home page
    When I search for product
    And I Click the first product
    And I checkout as a guest user
    And I verify the checkout page
