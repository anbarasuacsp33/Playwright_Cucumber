@login
Feature: Login functionality
  @l1
  Scenario Outline: Login with multiple users
    Given I launch the application
    When I login with "<username>" and "<password>"
    Then I should see the dashboard

    Examples:
      | username | password |
      | user1    | pass1    |
