import BasePage from "../basePage";

class ProductsPage extends BasePage {
    selectors = {
        header: {
            addProductButton: '[data-testid="add-product-button"]',
        },
        productsTable: {
            tableCell: '[data-testid="expandable-cell"]',
            tableRow: '[role="row"]:not([type="head"])',
            editButton: '[data-testid="cell-edit"]'
        }, 
    }

    clickOnProductButton() {
        this.clickOnElement(this.selectors.header.addProductButton)
    }

    verifyProductIsAdded(row: number, expected_name: string, expected_product_code: string) {
        cy.get(this.selectors.productsTable.tableRow).eq(row).within(() => {
        this.elementShouldContain(this.selectors.productsTable.tableCell, expected_name, 0)
        this.elementShouldHaveText(this.selectors.productsTable.tableCell, expected_product_code, 1)
        })
    }

    verifyProductIsNotPresent(expected_name: string) {
        this.getElementByTextShouldNotExist(this.selectors.productsTable.tableCell, expected_name)
    }

    selectProductByName(expected_name: string) {
        this.clickOnElementByText(this.selectors.productsTable.tableCell, expected_name)
    }
}
export default ProductsPage;
