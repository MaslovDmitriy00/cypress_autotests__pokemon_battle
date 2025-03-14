import * as data from "../helpers/default_data.json"
import * as login_page from "../locators/login_page.json"
import * as main_page from "../locators/main_page.json"
import * as trainer_page from "../locators/trainer_page.json"
import * as shop_page from "../locators/shop_page.json"
import * as purchase_page from "../locators/purchase_page.json"

describe('Проверка авторизации', function () {

    it('Проверка, что каждый аватар можно купить', function () {
        cy.visit('/');

        cy.get(login_page.email).type(data.login);
        cy.get(login_page.password).type(data.password);
        cy.get(login_page.login_button).click();

        cy.wait(2000);

        cy.get(main_page.trainer_btn).click();

        cy.wait(2000);

        cy.get(trainer_page.shop).click();
        
        // В следующей строке кода выбирается, какой именно аватар хотим купить. 
        // В этом месте: ('{index}', Номер_Аватара_По_Счёту) указываем номер аватара, который хотим купить. Важно, чтобы он не был уже куплен.
        cy.get(shop_page.buy_avatar_btn.replace('{index}', 5)).click();

        cy.get(purchase_page.card_number).type(data.data_card_number);
        cy.get(purchase_page.card_cvv).type(data.data_card_cvv);
        cy.get(purchase_page.card_period).type(data.data_card_period);
        cy.get(purchase_page.card_name).type(data.data_card_name);
        cy.get(purchase_page.purchase_btn).click();

        cy.get(purchase_page.confirm_sms).type(data.data_confirm_sms);
        cy.get(purchase_page.confirm_btn).click();

        cy.get(purchase_page.success_text).contains('Покупка прошла успешно').should('be.visible');
     })

    
 }) 