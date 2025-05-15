import BasePage from "./basePage";

class HeaderComponent extends BasePage {

    selectors = {
        quickAddButton: '[data-testid="quick-add-anchor"]',
        quickAddMenuBody: '[data-testid="quick-add-anchor"] ~[role="menu"]',
        quickAddMenuItems: '[data-testid="fe-root-quick-add-menu-item_product"]',
    }

    clickOnQuickAddButtonAndSelectOption(expected_item: string) {
        this.clickOnElement(this.selectors.quickAddButton)
        this.clickOnElementByText(this.selectors.quickAddMenuItems, expected_item)
    }

    pickQuickAddMenuItemByShortkey(shortcut: string) {
        this.pressKey(shortcut)
    }

    openQuickAddMenu() {
        this.clickOnElement(this.selectors.quickAddButton)
        this.elementShouldBeVisible(this.selectors.quickAddMenuBody)
    }
}
export default HeaderComponent;
