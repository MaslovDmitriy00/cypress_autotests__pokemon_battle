import * as data from "../helpers/default_data.json"
import * as login_page from "../locators/login_page.json"
import * as main_page from "../locators/main_page.json"
import * as trainer_page from "../locators/trainer_page.json"
import * as shop_page from "../locators/shop_page.json"
import * as purchase_page from "../locators/purchase_page.json"

describe('Проверка покупки аватаров', function () {
  const totalAvatars = 12;
//   let hasFirstAvatar

  // Генерируем отдельный тест для каждого аватара
  Array.from({ length: totalAvatars }, (_, i) => i + 1).forEach(avatarNumber => {
    it(`Покупка аватара #${avatarNumber}`, function () {
      // Авторизация
      cy.visit('/');
      cy.get(login_page.email).type(data.login);
      cy.get(login_page.password).type(data.password);
      cy.get(login_page.login_button).click();

      // Переход в тренажер
      cy.get(main_page.trainer_btn, { timeout: 10000 })
        .should('be.visible')
        .click();

      // Переход в магазин
      cy.get(trainer_page.shop, { timeout: 10000 })
        .should('be.visible')
        .click();

      // Покупка аватара
      cy.get(shop_page.buy_avatar_btn.replace('{index}', avatarNumber))
        .should('be.visible')
        .click();

      cy.completePurchase(); //Кастомная команда, код которой лежит в cypress/support/commands.js

      // Проверка успешной покупки
      cy.get(purchase_page.success_text, { timeout: 10000 })
        .should('contain', 'Покупка прошла успешно')
        .and('be.visible');
    });
  });
});

