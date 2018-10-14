require(__dirname + './../PageObjects/allPageObjects.po.js');

describe("Test Case: AddToCart", function () {

  //*********************************************** STEP  *****************************************

  describe("Test step: Go to Page",function(){
    commonFunctions.navigateToApplication(applicationURL.AmazonURL,'Amazon.com');

  });

  //*********************************************** STEP- *****************************************

  describe("Test Step ID: 367421 ",function(){
    it('Hover and click on Sign in button', function () {
      amazon.getSignInButton().isPresent().then(function(bool){
        if(bool === false){
          expect(false).toBe(" Sign in button was not found.")
        }else{
          browser.actions().mouseMove(amazon.getSignInButton()).perform();
          amazon.getSignInButton().click();
        }
      });
    });

    it("Verify that login page is displayed",function(){
      amazon.getInputBox('email').isPresent().then(function(bool){
        if(bool === false){
          expect(false).toBe(false, "Login page was not loaded after clicking on Sign in button");
        }
      });
    });

    var emailBoxRef = amazon.getInputBox('email');
    var passwordBoxRef = amazon.getInputBox('password')

    commonFunctions.enterLoginCredentials(emailBoxRef,'email',userdata.userName);

    commonFunctions.enterLoginCredentials(passwordBoxRef,'password',userdata.password);

  });

  //*********************************************** STEP - 367422 *****************************************
  describe("Test Step ID: 367422", function () {
    it("enter product name in the search box",function(){
      amazon.getSearchInputBox().sendKeys("alexa echo plus").then(function(){
        amazon.getSearchInputBox().sendKeys(protractor.Key.ENTER);
      });
    });
    it("select required product from available results.",function(){
      var productName = 'All-new Echo Plus (2nd Gen) Bundle with Philips Hue Bulb - Heather Gray';
      browser.actions().mouseMove(amazon.getProductFromResults(productName).get(0)).perform();
      amazon.getProductFromResults(productName).get(0).click();
    });

  });

  //*********************************************** STEP - 367423 *****************************************
  describe("Test Step ID: 367423", function () {

    it("Click on Add to Cart button.",function(){
      amazon.getAddToCartButton().isPresent().then(function(bool){
        if(!bool){
          expect(false).toBe("Error: Add to Cart button was not found.")
        }else {
          amazon.getAddToCartButton().click();
          amazon.isContinueButtonAppeared().isPresent().then(function(bool){
            if(bool){
              //scroll the page to make element visible
              browser.executeScript('arguments[0].scrollIntoView(true)', amazon.isContinueButtonAppeared().getWebElement());
              amazon.isContinueButtonAppeared().click();
            }
          });
        }
      });
    });

    it("Verify whether the expected product was added to cart or not.",function(){
      amazon.verifyProductAdded('All-new Echo Plus (2nd Gen)').isPresent().then(function(bool){
        if(!bool){
          expect(false).toBe("Error: Expected product was not added to the cart.")
        }
      });
    });
  });

});