# E-Commerce Automated Testing with Cypress

This repository contains automated end-to-end tests for an e-commerce website, covering the full user journey from product selection to checkout, account creation, and post-purchase actions. The tests are written using Cypress with JavaScript.

## Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Plan and Strategy](#test-plan-and-strategy)
- [Test Cases](#test-cases)
- [Video](#video)

## Installation

Before running the tests, you need to have Node.js and npm installed on your system. Follow these steps to set up the project locally:

1. Clone the repository:
   ``
   git clone https://github.com/FGGentile/testTask.git
   ``
2. Navigate to the project directory:
``
cd testTask
``
3. Install the dependencies:
``
npm install
``
## Running Tests

To run the tests with the UI, use the following command:
``
npx cypress open
``

To run the tests headless, use the following command:
``
npx cypress run
``

## Test Plan and Strategy

### Objective
To validate the complete e-commerce transaction flow, from product selection to checkout, account creation, and post-purchase activities, ensuring all functionalities work as expected.

### Scope:

User interaction with the website's UI elements.
Form submissions and validations.
Cart functionalities.
Account creation and login/logout processes.
Checkout process, including payment simulation.
Tools: Cypress with JavaScript for end-to-end testing.

## Test Cases

Below is a summary of the test cases covered in this repository:

| Test Case ID | Scenario                                        | Test Steps                                                                                                       | Expected Outcome                                                  |
|--------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| TC01         | Navigate Home and Scroll                        | 1. Enter the website.<br>2. Scroll down about halfway down the page.                                             | Page is loaded and scrolled successfully.                         |
| TC02         | Select and View Product                         | 1. Choose a product.<br>2. Click on “View product”.                                                              | Product detail page is displayed.                                 |
| TC03         | Update Quantity and Add to Cart                 | 1. Enter 30 in the Quantity box.<br>2. Click “Add to cart”.                                                      | Product quantity updated to 30 and added to cart.                 |
| TC04         | Proceed to Checkout                             | Click on “Proceed to Checkout”.                                                                                  | Navigated to the checkout page.                                   |
| TC05         | Register / Login                                | 1. Fill in an email address.<br>2. Click on “Register / Login”.                                                  | Registration/Login page is displayed.                             |
| TC06         | New User Signup                                 | 1. Enter name and email.<br>2. Fill in all information.<br>3. Click on “Create Account”.                         | New account is created.                                           |
| TC07         | Post-Account Creation Navigation                | Click on “Continue” under “ACCOUNT CREATED!”.                                                                    | Navigated to next step in the process.                            |
| TC08         | Access Cart from Header                         | Click on the Cart in the header.                                                                                 | Cart page is displayed with selected items.                       |
| TC09         | Checkout Process                                | 1. Click on “Proceed to checkout”.<br>2. Add a comment.<br>3. Click on “Place Order”.                            | Checkout process is initiated.                                    |
| TC10         | Payment Information Entry                       | 1. Fill in fake Credit Card information.<br>2. Click on “Pay and Confirm Order”.                                 | Payment information accepted and order is confirmed.              |
| TC11         | Post-Purchase Navigation                        | Click on “Continue” button.                                                                                      | Navigated to confirmation or next step.                           |
| TC12         | Logout After Purchase                           | Click on “Logout” on top header.                                                                                 | User is logged out.                                               |
| TC13         | Login with Existing Account                     | 1. Click on “Login to your account”.<br>2. Enter credentials.<br>3. Submit.                                      | User is logged in with the previously created account.            |
| TC14         | Submit Inquiry via Contact Us                   | 1. Click on “Contact us”.<br>2. Fill required data and click on “Submit”.<br>3. Press “OK” in the pop-up.         | Inquiry is submitted and confirmation is received.                |
| TC15         | Final Logout                                    | Click on the “Logout” button on the header.                                                                       | User is logged out, ending the session.                           |

### Video


https://github.com/FGGentile/testTask/assets/114667938/e366f9b8-d345-401f-8880-e8ff22dfcf77



