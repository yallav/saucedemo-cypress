Feature:
This feature gives flow of order checkout scenarios

Scenario: Checkout Scenario
Given user launches Saucedemo application with "https://www.saucedemo.com/"
When user enters "standard_user" as user name and "secret_sauce" as password and clicks login button
And user adds two random items to cart
And user clicks on cart icon
And user clicks on Checkout button
And user fills the form and submit the form
And user clicks on Finish button
Then user should see "Thank you for your order!"