var makeMyTrip = function() {

};

makeMyTrip.prototype.getInputBox = function(type) {
  var xpathSourceInputBox = '//*[@id="hp-widget__s'+type+'"]';
  return element(by.xpath(xpathSourceInputBox));
};

makeMyTrip.prototype.getDesiredCityName = function(inputType,cityName) {
  var xpathgetDesiredCityName = '//*[contains(@class,"hp-widget__s'+inputType+'")]//*[contains(text(),"'+cityName+'")]';
  return element(by.xpath(xpathgetDesiredCityName));
};

makeMyTrip.prototype.selectRequiredDate = function(date) {
  var xpathselectRequiredDate = '//*[@class="ui-datepicker-group ui-datepicker-group-first"]//a[contains(text(),"28")]';
  return element(by.xpath(xpathselectRequiredDate));
};

makeMyTrip.prototype.getSearchButton = function() {
  var xpathSearchButton = '//*[@id="searchBtn"]';
  return element(by.xpath(xpathSearchButton));
};

makeMyTrip.prototype.getTimeSliderRef = function() {
  var xpathTimeSliderRef = '//*[@class="rc-slider-handle rc-slider-handle-2"]';
  return element.all(by.xpath(xpathTimeSliderRef));
};

module.exports = new makeMyTrip();
