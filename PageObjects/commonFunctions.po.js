require( __dirname + '/allPageObjects.po' );

var commonFunctions = function(){
};


//*********************************************** function *****************************************

commonFunctions.prototype.navigateToApplication = function (appURL,appTitle) {
  it('Navigate to application URL', function () {
    browser.waitForAngularEnabled(false);
    browser.get(appURL);
  });

  it("Verify that application URL is navigated.",function(){
    expect( browser.getCurrentUrl() ).toContain(appURL);
  });

  it("Verify the expected page was loaded",function(){
    browser.getTitle().then(function(title){
      if(title.indexOf(appTitle) === -1){
        expect(true).toBe(false, " Expected page was not loaded.")
      }
    });
  });
};

//*********************************************** function *****************************************

commonFunctions.prototype.enterLoginCredentials = function(inputBoxRef,inputType,inputData,clickOnLoginBtn){
  it("Enter "+inputType+".",function(){
    inputBoxRef.click().clear();
    inputBoxRef.sendKeys(inputData).then( function() {}, function( err ) {
      if (err){
        expect( true ).toBe(false, "Could not enter the "+inputType+" into input box." );
      }
    });
  });

  it("verify that an "+inputType+" is entered.",function(){
    inputBoxRef.getAttribute('value').then(function(text){
      console.log('text is  '+ text);
      if(text.indexOf(inputData) == -1){
        expect(true).toBe(false, "Entered Email or Phone number was not matched with given input.");
      }
    });
  });

  it("Click on 'Continue/Login' button to login.",function(){
    if(clickOnLoginBtn === true){
      dropbox.getLoginButton().isPresent().then(function(bool){
        if(bool === false){
          expect(true).toBe(false, "Login button was not found.");
        }
        else{
          dropbox.getLoginButton().click();
          browser.sleep(5000);
        }
      });
    }else{
      amazon.getContinueButton().isPresent().then(function(bool){
        if(bool === false){
          expect(true).toBe(false, "Continue button was not found.");
        }
        else{
          amazon.getContinueButton().click();
        }
      });
    }
  });
};

module.exports = new commonFunctions();