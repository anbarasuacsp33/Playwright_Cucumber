@GlobalTagSearch1   @smoke
Feature: Search at second time
    @ScenrioTagsearch1
    Scenario: To Verify Possitive search
        Given User in ebay home page
        When Enter product name in a search field
        And Click Search buttons
        Then I verified search results

    @ScenrioTagsearch2
    Scenario: To Verify Negative search
        Given User in ebay home page
        When Enter invalid product name in search field
        When Click Search button
        Then I verified no search results
