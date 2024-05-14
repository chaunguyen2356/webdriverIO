/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

export default new (class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */

  get baseURL() {
    return "https://skale.vn/";
  }

  open(path) {
    return browser.url(this.baseURL + `${path}`);
  }
  async close() {
    await browser.pause(3000);
    return browser.closeWindow();
  }
  async refresh() {
    await browser.pause(3000);
    return browser.refresh();
  }
})();
