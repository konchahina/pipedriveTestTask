import BasePage from "./basePage";

class CommonElements extends BasePage {
    selectors = {
        addProductModal: {
            modalTitle: '[data-test="compound-modal"] h3',
            modalBody: '[data-test="add-modal"]',
            nameInput: '[data-test-key="name"] input',
            productCodeInput: '[data-test-key="code"] input',
            category: '[data-test-key="category"]',
            categorySearchInput: '[id="downshift-0-input"]',
            categoryItem: ( index: number ) => `[id="downshift-0-item-${index}"]`,
            unitInput: '[data-test-key="unit"] input',
            billingFrequencyDropdown: '[data-test-key="billing_frequency"]',
            billingFrequencyItem: '[id*="downshift-1-item-"]',
            unitPriceInput: '[data-test-key="unit_prices"] [data-testid="compound-input"]',
            unitPriceCurrencyDropdown: '[data-test-key="unit_prices"] [role="combobox"]',
            unitPriceCurrencyItem: '[id*="downshift-2-item-"]',
            taxInput: '[data-test-key="tax"] input',
            saveButton: '[data-test="add-modals-save"]',
            cancelButton: '[data-test="add-modals-cancel-button"]',
            importButton: '[data-test="add-modals-import-button"]',
        },

        loadSpinner: '[class="cui5-spinner__trail"]',
    }

    waitForPageToLoad() {
        this.elementShouldNotBeVisible(this.selectors.loadSpinner) 
        /**
         * this should be changed for some request waiting using cy.intersept, 
         * but I need to be more familiar with app to determine universal request for any page
         */
    }
    
    /**
     * Add product modal steps
     */

     verifyAddProductModalIsOpened() {
        this.elementShouldHaveText(this.selectors.addProductModal.modalTitle, 'Add product')    
        this.elementShouldBeVisible(this.selectors.addProductModal.modalBody)
    }

    fullfillAddProductForm(name: string, code: string, category: string, unit: string, billing_frequency: string, unit_price: string, currency: string, tax: string) {
        this.typeField(this.selectors.addProductModal.nameInput, name)
        this.typeField(this.selectors.addProductModal.productCodeInput, code)
        this.clickOnElement(this.selectors.addProductModal.category)
        this.typeField(this.selectors.addProductModal.categorySearchInput, category)
        this.clickOnElement(this.selectors.addProductModal.categoryItem(0))
        this.typeField(this.selectors.addProductModal.unitInput, unit)
        this.clickOnElement(this.selectors.addProductModal.billingFrequencyDropdown)
        this.clickOnElementByText(this.selectors.addProductModal.billingFrequencyItem, billing_frequency)
        this.typeField(this.selectors.addProductModal.unitPriceInput, unit_price)
        this.clickOnElement(this.selectors.addProductModal.unitPriceCurrencyDropdown)   
        this.clickOnElementByText(this.selectors.addProductModal.unitPriceCurrencyItem, currency)
        this.typeField(this.selectors.addProductModal.taxInput, tax)
        this.clickOnElement(this.selectors.addProductModal.saveButton)
    }
}

export default CommonElements;
