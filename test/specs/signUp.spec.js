import SignUpPage from "../page_objects/signUp.page";
import Page from "../page_objects/page.page";
import SignInPage from "../page_objects/signIn.page";
import Ultilities from "../../services/utilities.service";

import vi from "../../common/languages/vi.json";
import en from "../../common/languages/en.json";

let p = "vi";
var l;
if (p === "vi") {
  l = vi;
} else {
  l = en;
}

describe.only("Sign In Page", () => {
  it("Direct to Sign In Page from link", async () => {
    try {
      await Page.open("signup");
      await expect(SignUpPage.titlePage).toBeExisting();
      await expect(SignUpPage.titlePage).toHaveText(`Đăng Ký Tài Khoản`);
    } catch (error) {
      console.error(`🤬 Stupid! Your test failed (!_!) 🤬 `, error);
    }
  });

  it("Direct to Sign In Page from Login Page", async () => {
    try {
      await Page.open("signin");
      await SignInPage.clickSignUpButton();
      await expect(SignUpPage.titlePage).toHaveText(`Đăng Ký Tài Khoản`);
    } catch (error) {
      console.error(`🤬 Stupid! Your test failed (!_!) 🤬 `, error);
    }
  });

  it.only("Invalid full name in Sign In Page", async () => {
    try {
      const fullname = await Ultilities.generateRandomName();
      await Page.open("signin");
      await SignInPage.clickSignUpButton();
      await console.info(l.sign_up.label.fullname, " ++++++++++++");
      await expect(await SignUpPage.fullnameLabel).toHaveText(
        l.sign_up.label.fullname
      );
      await expect(SignUpPage.fullname).toHaveValue("");
      await SignUpPage.inputFullName(fullname);

      (await SignUpPage.fullname).waitUntil(async () => {}, { timeout: 5000 });
      await expect(await SignUpPage.fullname).toHaveValue(fullname);
      await expect(SignUpPage.signUpButton).toHaveAttribute("disabled");
      await expect(await SignUpPage.signUpButton).toBeDisabled();
    } catch (error) {
      console.error(`🤬 Stupid! Your test failed (!_!) 🤬 `, error);
    }
  });
});
