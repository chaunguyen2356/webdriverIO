import SignInPage from "./signIn.page";

const TITLE_PAGE_TEXT = `body > div > div > .login-area > div > .my-auto > .w-full > span`;
const FULL_NAME_LABEL = `body > div > div > div.login-area.h-screen.flex-1 > div > div.my-auto > div.w-full.flex.flex-col.items-center.gap-5.px-5 > form > div:nth-child(1) > div:nth-child(1) > span`;
const FULL_NAME_TEXT = `form > :nth-child(1) > :nth-child(1) > div > input`;

const SIGN_UP_BUTTON = `form > :nth-child(1) > .text-right > button`;
class SignUpPage {
  /**
   * define selectors using getter methods
   */
  // constructors() {
  //   this.inputFields = SignInPage.inputFields;
  //   this.login = SignInPage.login;
  //   this.secondClick = SignInPage.secondClick;
  //   this.firstClick = SignInPage.firstClick;
  // }
  get titlePage() {
    return $(TITLE_PAGE_TEXT);
  }
  get fullnameLabel() {
    return $(FULL_NAME_LABEL);
  }
  get fullname() {
    return $(FULL_NAME_TEXT);
  }
  get signUpButton() {
    return $(SIGN_UP_BUTTON);
  }
  async inputFullName(fullname) {
    (await this.fullname).setValue(fullname);
  }

  async clickSignUpButton() {
    await this.signUpButton.click();
  }
}
export default new SignUpPage();
