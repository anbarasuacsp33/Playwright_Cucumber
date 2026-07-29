@GlobalTagSearch1   @smoke
Feature: Search at second time
    @ScenrioTagsearch1
    Scenario: To Verify Possitive search
        Given User in ebay home page
        When Enter product name in a search field
        And Click Search buttons new
        Then I verified search results

    @ScenrioTagsearch2
    Scenario: To Verify Negative search
        Given User in ebay home page
        When Enter invalid product name in search field
        And Click Search buttons new
        Then I verified no search results
    @ScenrioTagsearch3
    Scenario: Search based on the category dd selection
        Given User in ebay home page
        When Select the category from its drop down
        And Click Search buttons new
        Then I verified search results

    @ScenrioTagsearch4
    Scenario Outline: Scenario Outline name
        Given User in ebay home page
        When Search For A Product "<Product>"
        And Click Search buttons new
        And Verify the search result
        And Click the first product from the search result
        Then Verify product detail page
        Examples:
            | Product |
            | Iphone  |
            # | samsung |
            # | Moto    |
            # | sgfsgff |
