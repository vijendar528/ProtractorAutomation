require(__dirname + './../PageObjects/allPageObjects.po.js');

describe("Test Case: searchFlight", function () {

  //*********************************************** Script level function *****************************************
  var selectToAndFromCity = function(inputType,cityName){
    it('Enter city name in Source & destination input box.', function () {
      makeMyTrip.getInputBox(inputType).isPresent().then(function(bool){
        if(bool === false){
          expect(false).toBe("Required Source/Destination input box was not found..")
        }else{
          makeMyTrip.getInputBox(inputType).click().clear();
          browser.sleep(2000);
          browser.actions().mouseMove(makeMyTrip.getDesiredCityName(inputType,cityName)).perform();
          makeMyTrip.getDesiredCityName(inputType,cityName).click();
        }
      });
    });
  };
  //*********************************************** Script level function *****************************************
  var dragTimeSlider = function(adjustType){
    var initialValue = 0;
    var eleRef;
    it("Adjust the departure/Arrival time by sliding the element",function(){
      if(adjustType === 'Departure'){
        eleRef = makeMyTrip.getTimeSliderRef().get(0)
      }else{
        eleRef = makeMyTrip.getTimeSliderRef().get(1)
      }
      eleRef.getAttribute('aria-valuenow').then(function(value){
        initialValue = value;
      });
      browser.actions().mouseDown(eleRef).perform();
      browser.sleep(1000);
      browser.actions().mouseMove({x: -45, y: -60}).perform();
      browser.actions().mouseUp().perform();
      eleRef.getAttribute('aria-valuenow').then(function(value){
        if(initialValue === value ){
          expect(true).toBe(adjustType+" time slider was not adjusted.");
        }
      });
      browser.sleep(3000)
    });
  };

  //*********************************************** STEP  *****************************************

  describe("Test step: Go to Page",function(){
    commonFunctions.navigateToApplication(applicationURL.makeMyTripURL,'MakeMyTrip');
  });

  //*********************************************** STEP- 367421 *****************************************

  describe("Test Step ID: 367421 ",function(){

    selectToAndFromCity('from','Hyderabad');

    selectToAndFromCity('To','Dubai');


    it('Enter city name in Source input box.', function () {
      makeMyTrip.selectRequiredDate('28').click();
      browser.sleep(2000);
    });

    it("Click on Search button",function(){
      makeMyTrip.getSearchButton().isPresent().then(function(bool){
        if(bool === false){
          expect(false).toBe(false, "Search buton was not found..");
        }else {
          makeMyTrip.getSearchButton().click();
          browser.sleep(5000);
        }
      });
    });

    dragTimeSlider('Departure');

    dragTimeSlider('Arrival');

  })

});