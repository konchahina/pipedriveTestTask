import BasePage from "./basePage";

class LoginPage extends BasePage {
    selectors = {
        loginForm: {
            emailInput: '[id="login"]',
            passwordInput: '[id="password"]',
            logInButton: '[class="login"] button',
        }
    }

    fillLoginFormAndLogin(email: string, password: string) {
        this.typeField(this.selectors.loginForm.emailInput, email)
        this.typeField(this.selectors.loginForm.passwordInput, password)
        this.clickOnElement(this.selectors.loginForm.logInButton)
    }


}
export default LoginPage;