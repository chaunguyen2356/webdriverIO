const Page = require("./page.page");

module.exports = class ForgotPassword extends Page {
  open() {
    return super.open("forgot-password");
  }
};
