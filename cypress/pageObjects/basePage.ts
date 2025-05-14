class BasePage {
    defaultTimeoutValue = 10000;

    /**
     * Interraction steps
     */

    getElementByText(selector: string, expected_text: string, timeout = this.defaultTimeoutValue) {
        return cy.get(selector, { timeout: timeout }).contains(expected_text)
    }

    clickOnElement(selector: string, index = 0, timeout = this.defaultTimeoutValue) {
        return cy.get(selector, { timeout: timeout }).eq(index).click();
    }

    clickOnElementByText(selector: string, expected_text: string, timeout = this.defaultTimeoutValue,) {
        return cy.get(selector, { timeout: timeout }).contains(expected_text).click()
    }

    typeField(selector: string, expected_text: string, index = 0, timeout = this.defaultTimeoutValue,) {
        return cy.get(selector, { timeout: timeout }).eq(index).clear().type(expected_text)
    }

    goToPreviousPage(timeout = this.defaultTimeoutValue) {
        cy.go('back', { timeout: timeout })
    }

    /**
     * Confirmation steps
     */

    getElementByTextShouldNotExist(selector: string, expected_text: string, timeout = this.defaultTimeoutValue) {
        return cy.get(selector, { timeout: timeout }).contains(expected_text).should('not.exist')
    }

    getElementByTextFindElementShouldHaveText(initial_selector: string, initial_text: string, final_selector: string, expected_text: string, timeout = this.defaultTimeoutValue) {
        return cy.get(initial_selector, { timeout: timeout }).contains(initial_text).find(final_selector).should('have.text', expected_text)
    }

    elementShouldHaveText(selector: string, expected_text: string, index = 0, timeout = this.defaultTimeoutValue) {
        return cy.get(selector, { timeout: timeout }).eq(index).should('have.text', expected_text)
    }

    elementShouldContain(selector: string, expected_text: string, index = 0, timeout = this.defaultTimeoutValue) {
        return cy.get(selector, { timeout: timeout }).eq(index).should('contain', expected_text)
    }

    verifyUrl(expected_url: string, timeout = this.defaultTimeoutValue) {
        return cy.url({ timeout: timeout }).should('contain', expected_url)
    }

    elementShouldExist(selector: string, index = 0, timeout = this.defaultTimeoutValue) {
        return cy.get(selector, { timeout: timeout }).eq(index).should('exist')
    }

    elementShouldNotExist(selector: string, index = 0, timeout = this.defaultTimeoutValue) {
        return cy.get(selector, { timeout: timeout }).eq(index).should('not.exist')
    }

    elementShouldBeVisible(selector: string, index = 0, timeout = this.defaultTimeoutValue) {
        return cy.get(selector, { timeout: timeout }).eq(index).should('be.visible')
    }

    elementShouldNotBeVisible(selector: string, index = 0, timeout = this.defaultTimeoutValue) {
        return cy.get(selector, { timeout: timeout }).eq(index).should('not.be.visible')
    }

    verifyListOfElements(selector: string, expected_list: string[], timeout = this.defaultTimeoutValue) {
        return cy.get(selector, { timeout: timeout }).each((el) => {
            cy.wrap(el)
              .invoke('text')
              .then((elText) => {
                expect(elText.trim()).to.be.oneOf(expected_list);
            });
        })
    }
}

export default BasePage;
