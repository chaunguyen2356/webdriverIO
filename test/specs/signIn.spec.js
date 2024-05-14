import SignInPage from "../page_objects/signIn.page";
import ProductPage from "../page_objects/products.page.js";
import user from "../../common/user.default.js";
import Page from "../page_objects/page.page.js";
const { generateString } = require("../../services/utilities.service.js");

const newGenerateString = generateString(10, false);
let username = null;
let password = null;

describe("Sign In Page Testing", async () => {
  beforeEach(async () => {
    try {
      await SignInPage.open("signin");
    } catch (error) {
      console.error(`🤬 Stupid! Your test failed (!_!) 🤬 `, error);
    }
  });
  it("The Second Login success", async () => {
    try {
      username = await user?.usernameForTestSecondLogin;
      password = await user?.passwordForTestSecondLogin;

      await SignInPage.inputFields(username, password);
      await expect(await SignInPage.username.getValue()).toEqual(username);
      await expect((await SignInPage.password.getValue()).toString()).toEqual(
        password
      );
      await expect(await SignInPage.rememberMe.getValue()).toEqual("undefined");
      await SignInPage.rememberMeClick();
      await expect(await SignInPage.rememberMe).toBeChecked(console.info("OK"));
      await SignInPage.secondClick();
      await expect(await ProductPage.titlePage.getText()).toEqual(
        `Product category`
      );
    } catch (error) {
      await console.error(`🤬 Stupid! Your test failed (!_!) 🤬 `, error);
    }
  });

  it.only("The First Login success", async () => {
    try {
      username = await user?.usernameForTestFirstLogin;
      password = await user?.passwordForTestFirstLogin;

      await SignInPage.inputFields(username, password);
      await expect(await SignInPage.username.getValue()).toEqual(username);
      await expect((await SignInPage.password.getValue()).toString()).toEqual(
        password
      );
      await expect(await SignInPage.rememberMe.getValue()).toEqual("undefined");
      await SignInPage.rememberMeClick();
      await expect(await SignInPage.rememberMe).toBeChecked(console.info("OK"));
      await SignInPage.firstClick();
      await expect(await ProductPage.titlePage.getText()).toEqual(
        `Thông tin cá nhân`
      );
    } catch (error) {
      await console.error(`🤬 Stupid! Your test failed (!_!) 🤬 `, error);
    }
  });

  it("Invalid username", async () => {
    try {
      const usernameInput = await SignInPage.username;
      const getOldCurrentURL = await SignInPage.currentURL;
      const getNewCurrentURL = await browser.getUrl();

      await usernameInput.setValue(newGenerateString);
      const getUsernameValue = await usernameInput.getValue();
      await assert.equal(getUsernameValue, newGenerateString);
      await SignInPage.click();
      await assert.equal(getOldCurrentURL, getNewCurrentURL);
    } catch (error) {
      console.log("🚀 ~ it ~ error:", error);
    }
  });

  it("Invalid password", async () => {
    try {
      const passwordInput = await SignInPage.password;
      const getOldCurrentURL = await SignInPage.currentURL;
      const getNewCurrentURL = await browser.getUrl();
      await console.log(newGenerateString);

      await passwordInput.setValue(newGenerateString);
      const getPasswordValue = await passwordInput.getValue();
      await assert.equal(getPasswordValue, newGenerateString);
      await SignInPage.click();
      await assert.equal(getOldCurrentURL, getNewCurrentURL);
    } catch (error) {
      console.log("🚀 ~ it ~ error:", error);
    }
  });

  it("Reload Page", async () => {
    try {
      const getOldCurrentURL = await SignInPage.currentURL;
      const getNewCurrentURL = await browser.getUrl();

      await SignInPage.inputFields(user?.username, user?.password);
      await Page.refresh();
      await assert.equal(getOldCurrentURL, getNewCurrentURL);

      await assert.notEqual(
        SignInPage.getInputFields(),
        SignInPage.inputFields(user?.username, user?.password)
      );
    } catch (error) {
      console.log("🚀 ~ it ~ error:", error);
    }
  });
});
