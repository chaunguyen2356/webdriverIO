import host from "../../common/path";
import ProductPage from "./products.page";
import ProfilePage from "./profile.page";
import SignUpPage from "./signUp.page";
// const ForgotPasswordPage = require("./forgotPassword.page");

const USERNAME_TEXT = `input[name="username"]`;
const PASSWORD_TEXT = `input[name="currentPassword"]`;
const SUBMIT_BUTTON = 'button[type="submit"]';
const REMEMBER_CHECKBOX = `input[name="remember"]`;

const FORGOT_PASSWORD_BUTTON = `body.overflow-y-auto:nth-child(2) div.login-page-wrapper.main-signin-background.min-h-screen.overflow-hidden:nth-child(9) div.login-page-content.h-full.flex.flex-row.items-center div.login-area.h-screen.flex-1 div.login-form.bg-white.h-full.w-full div.my-auto div.w-full.flex.flex-col.items-center.gap-5.px-5 form.flex.flex-col.items-center.justify-center.max-w-md.w-full div.mt-4.text-center:nth-child(3) > button.skale-button.md.link.button-primary:nth-child(1)`;
const SIGN_UP_BUTTON = `body.overflow-y-auto:nth-child(2) div.login-page-wrapper.main-signin-background.min-h-screen.overflow-hidden:nth-child(9) div.login-page-content.h-full.flex.flex-row.items-center div.login-area.h-screen.flex-1 div.login-form.bg-white.h-full.w-full div.my-auto div.w-full.flex.flex-col.items-center.gap-5.px-5 form.flex.flex-col.items-center.justify-center.max-w-md.w-full div.mt-4.text-center:nth-child(3) > button.skale-button.md.link.button-primary:nth-child(2)`;
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignInPage {
  /**
   * define selectors using getter methods
   */

  get username() {
    return $(USERNAME_TEXT);
  }

  get password() {
    return $(PASSWORD_TEXT);
  }

  get rememberMe() {
    return $(REMEMBER_CHECKBOX);
  }

  get submit() {
    return $(SUBMIT_BUTTON);
  }

  get forgotPassword() {
    return $(FORGOT_PASSWORD_BUTTON);
  }
  get signUp() {
    return $(SIGN_UP_BUTTON);
  }

  open() {
    // const windowSize = await browser.getWindowSize();
    // await browser.setWindowSize(windowSize.width * 2, windowSize.height * 2);
    return browser.url(host + "signin");
  }
  async inputFields(username, password) {
    await this.username.setValue(username);

    await this.password.setValue(password);
    // (await this.rememberMe).click();
    return this;
  }

  async getInputFields() {
    const usernameValue = await this.username.getValue();
    const passwordValue = await this.password.getValue();
    const rememberValue = (await this.rememberMe).getValue();
    return { usernameValue, passwordValue, rememberValue };
  }

  async secondClick() {
    await this.submit.click();
    return ProductPage;
  }

  async firstClick() {
    await this.submit.click();
    return ProfilePage;
  }

  async rememberMeClick() {
    (await this.rememberMe).click();
    return this;
  }

  async doubleClick() {
    await this.btnSubmit.doubleClick();
    return this;
  }

  async login(username, password) {
    await this.inputFields(username, password);
    await this.secondClick();
  }

  async forgotPassword() {
    await this.forgotPassword.click();
    return ForgotPasswordPage;
  }

  async clickSignUpButton() {
    await this.signUp.click();
    return SignUpPage;
  }
}

export default new SignInPage();
