import Utils from "../../utils";
import BasePage from "../basePage";

const utils = new Utils();

class Product extends BasePage {

    selectors = {
        header: {
            productTitle: '[data-testid="header-title"] h1',

            moreActionsButton: '[data-testid="header-blocks-actions-trigger"]',
            moreActionsPopupOptions: '[data-testid="header-blocks-actions"] [class="cui5-option"]',

            deletionMessage: '[class="cui5-message__content"]',
            restoreTheProductButton: '[data-testid="restore-product-button"]',

        },
        sidebarArea: {
            detailsElement: '[data-testid="fields-list-row"]',
            detailsElementName: '[data-testid="field-name"]',
            detailsElementValue: '~[data-testid="fields-list-row-field-components"]',
        },
        mainArea: {
            pricesRow: '[data-testid="price-row"]',
            priceRowElement: '[class*="cui5-spacing"]'

        },

        actionPopup: {
            actionPopupBody: '[role="alertdialog"]',
            actionButton: '[data-testid="action-dialog-action-button"]',
            cancelButton: '[data-testid="action-dialog-close-button"]'
        }
    }

    verifyProductName(expected_name: string) {
        this.elementShouldHaveText(this.selectors.header.productTitle, expected_name)
    }

    verifyDetailsSection(expected_product_code: string,  expected_unit: string, expected_tax: string, expected_category: string, expected_billing_frequency: string) {
        this.getElementByTextFindElementShouldHaveText(this.selectors.sidebarArea.detailsElement, 'Product code', this.selectors.sidebarArea.detailsElementValue, expected_product_code)
        this.getElementByTextFindElementShouldHaveText(this.selectors.sidebarArea.detailsElement, 'Unit', this.selectors.sidebarArea.detailsElementValue, expected_unit)
        this.getElementByTextFindElementShouldHaveText(this.selectors.sidebarArea.detailsElement, 'Tax', this.selectors.sidebarArea.detailsElementValue, expected_tax)
        this.getElementByTextFindElementShouldHaveText(this.selectors.sidebarArea.detailsElement, 'Category', this.selectors.sidebarArea.detailsElementValue, expected_category)
        this.getElementByTextFindElementShouldHaveText(this.selectors.sidebarArea.detailsElement, 'Billing frequency', this.selectors.sidebarArea.detailsElementValue, `${expected_billing_frequency} (automatically renewed)`) 
    }

    verifyPricesSection(expected_currency: string, expected_unit_price: string, expected_cost: string, expected_direct_cost: string, expected_comment: string) {
        cy.get(this.selectors.mainArea.pricesRow).within(() => {
            this.verifyListOfElements(this.selectors.mainArea.priceRowElement, [expected_currency, expected_unit_price,  expected_cost, expected_direct_cost, expected_comment])
        })
    }

    deleteProduct() {
        this.clickOnElement(this.selectors.header.moreActionsButton)
        this.clickOnElementByText(this.selectors.header.moreActionsPopupOptions, 'Delete')
        this.elementShouldBeVisible(this.selectors.actionPopup.actionPopupBody)
        this.clickOnElementByText(this.selectors.actionPopup.actionButton, 'Delete product')
    }

    verifyTextInDeletionMessage() {
        const date = utils.generateDate(30)
        this.elementShouldBeVisible(this.selectors.header.deletionMessage)
        this.elementShouldHaveText(this.selectors.header.deletionMessage, `This product will be deleted permanently soon (${date}). If needed, you can restore the product until then.`)
    }
}

export default Product
