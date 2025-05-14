import BasePage from "./basePage";

class SidebarComponent extends BasePage {
    selectors = {
        sidebarItem: (button_name: string) => `[role="menuitem"] [aria-label="${button_name}"]`,
    }

    clickOnSidebarItemByText(expected_text: string, expected_url: string) {
        this.clickOnElement(this.selectors.sidebarItem(expected_text));
        this.verifyUrl(expected_url)
    }

}
export default SidebarComponent;