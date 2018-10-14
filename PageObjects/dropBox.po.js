var dropbox = function() {

};

dropbox.prototype.getSignInButton = function() {
  var xpathSignInButton = '//*[@id="sign-up-in"]';
  return element(by.xpath(xpathSignInButton));
};

dropbox.prototype.isLoginPageDisplayed = function() {
  var xpathLoginPageDisplayed = '//*[@class="signin-form"]';
  return element(by.xpath(xpathLoginPageDisplayed));
};

dropbox.prototype.getRequiredInputBox = function(inputType) {
  var xpathEmailInputBox = '//*[@name="login_'+inputType+'"]';
  return element(by.xpath(xpathEmailInputBox));
};

dropbox.prototype.getLoginButton = function() {
  var xpathLoginButton = '//*[@class="login-button signin-button button-primary"]';
  return element(by.xpath(xpathLoginButton));
};

dropbox.prototype.isHomePageDisplayed = function() {
  var xpathHomePageDisplayed = '//*[@class="page-header__title"]';
  return element.all(by.xpath(xpathHomePageDisplayed));
};

dropbox.prototype.getUploadButton = function() {
  var xpathUploadButton = '//*[@class="primary-action-menu__button-wrapper"]//button';
  return element(by.xpath(xpathUploadButton));
};

dropbox.prototype.getFilesButton = function() {
  var xpathFilesButton = '//*[@class="action-upload-files mc-popover-content-item"]';
  return element(by.xpath(xpathFilesButton));
};

dropbox.prototype.verifyProductAdded = function(productName) {
  var xpathConfirmedMessage = '//*[@id="hl-feedback-details"]//*[contains(@title,"'+productName+'")]';
  return element(by.xpath(xpathConfirmedMessage));
};


module.exports = new dropbox();
