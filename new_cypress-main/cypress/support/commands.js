// Кастомные команды, которых нет в cypress

import * as purchase_page from "../locators/purchase_page.json";
import * as data from "../helpers/default_data.json";

Cypress.Commands.add('completePurchase', () => {
    cy.get(purchase_page.card_number).type(data.data_card_number);
    cy.get(purchase_page.card_cvv).type(data.data_card_cvv);
    cy.get(purchase_page.card_period).type(data.data_card_period);
    cy.get(purchase_page.card_name).type(data.data_card_name);
    cy.get(purchase_page.purchase_btn).click();

    cy.get(purchase_page.confirm_sms).type(data.data_confirm_sms);
    cy.get(purchase_page.confirm_btn).click();
  });


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })