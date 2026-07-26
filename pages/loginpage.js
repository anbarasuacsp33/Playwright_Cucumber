class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = "//input[@id='user_name']";
        this.passwordInput = "//input[@id='user_password']";
        this.loginButton = "//button[@id='submit_btn']";
    }

    async goto() {
        await this.page.goto('https://www.walgreens.com/login.jsp?ru=%2F');
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
    }

    async clickLogin() {
        await this.page.click(this.loginButton);
    }

}

module.exports = { LoginPage };
