import BasePage from "./basePage";

class HeaderComponent extends BasePage {

    selectors = {
        quickAddButton: '[data-testid="quick-add-anchor"]',
        quickAddMenuItems: '[data-testid="fe-root-quick-add-menu-item_product"]',
    }

    clickOnQuickAddButton(expected_item: string) {
        this.clickOnElement(this.selectors.quickAddButton)
        this.clickOnElementByText(this.selectors.quickAddMenuItems, expected_item)
    }
}
export default HeaderComponent;