Feature: Home Page Feature

  As a user
  I want to be in home page

  Scenario: To Verify the home page
    Given I navigate to the ebay home page
    When I verify the header menu
    And I verify the sub menu
    And I verify all categories section
    And I scroll to the footer menu
    And I verify the footer menu
    Then I Verified the home page
