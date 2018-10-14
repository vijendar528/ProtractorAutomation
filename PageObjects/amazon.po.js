var amazon = function() {

};

amazon.prototype.getSearchInputBox = function() {
  var xpathSearchInputBox = '//*[@class="nav-search-field "]//*[@type="text"]';
  return element(by.xpath(xpathSearchInputBox));
};

amazon.prototype.getSignInButton = function() {
  var xpathSignInButton = '//*[@id="nav-link-accountList"]';
  return element(by.xpath(xpathSignInButton));
};

amazon.prototype.isLoginPageDisplayed = function() {
  var xpathLoginPageDisplayed = '//*[contains(text(),"Sign in")]';
  return element(by.xpath(xpathLoginPageDisplayed));
};

amazon.prototype.getInputBox = function(inputType) {
  var xpathEmailInputBox = '//*[@type="'+inputType+'"]'
  return element(by.xpath(xpathEmailInputBox));
};

amazon.prototype.getContinueButton = function() {
  var xpathSearchDropDown = '//*[@type="submit"]';
  return element(by.xpath(xpathSearchDropDown));
};

amazon.prototype.getProductFromResults = function(resultName) {
  var xpathProductFromResults = '//*[contains(@title,"'+resultName+'")]';
  return element.all(by.xpath(xpathProductFromResults));
};

amazon.prototype.getAddToCartButton = function() {
  var xpathAddToCartButton = '//*[@id="add-to-cart-button"]';
  return element(by.xpath(xpathAddToCartButton));
};

amazon.prototype.isContinueButtonAppeared = function() {
  var xpathContinueButtonAppeared = '//*[@id="abb-intl-pop-cta"]//*[@class="a-button-input"]';
  return element(by.xpath(xpathContinueButtonAppeared));
};

amazon.prototype.verifyProductAdded = function(productName) {
  var xpathConfirmedMessage = '//*[@id="hl-feedback-details"]//*[contains(@title,"'+productName+'")]';
  return element(by.xpath(xpathConfirmedMessage));
};


module.exports = new amazon();
