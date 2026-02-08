@HomePage
Feature: Home Page

    Feature Description
    @HS1
    Scenario: To Verify Home Page Header Elements
        Given I am on ebay home page
        When User mouseover to embalem
        And User Verified SignIn and signup links
        Then Home Page Header Emenets Verified
    @HS2
    Scenario: To Verify Home Page Footer link
        Given I am on ebay home page
        When User Scroll Down to the Footer
        Then Home Page Footer Menu Verified

