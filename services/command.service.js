export default () => {
  browser.addCommand("getUrlAndTitle", async function () {
    // `this` refers to the `browser` scope
    return {
      url: await this.getUrl(),
      title: await this.getTitle(),
    };
  });

  browser.addCommand(
    "waitAndClick",
    async function () {
      // `this` is return value of $(selector)
      await this.waitForDisplayed();
      await this.click();
    },
    true
  );
};
