Feature: Login to the application
@Sanity
Scenario Outline: Login to the application
Given Navigate to url and login
When Enter "<username>" and "<password>", click on login button
Then Login should be successful

Examples:
|username|password|
|jayant.prasad.9920@gmail.com|Hanumanji@1990|