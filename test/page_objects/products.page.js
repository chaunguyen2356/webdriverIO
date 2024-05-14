const TITLE_PAGE_TEXT = "#main > div.h-10.bg-white > div > h6";

class ProductPage {
  get titlePage() {
    return $(TITLE_PAGE_TEXT);
  }
  open() {
    return super.open("products");
  }
}
export default new ProductPage();
