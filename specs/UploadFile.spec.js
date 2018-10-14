require(__dirname + './../PageObjects/allPageObjects.po.js');
var execSync = require('sync-exec');

describe("Test Case: UploadFile", function () {

  //*********************************************** STEP  *****************************************

  describe("Test step: Go to Page",function(){
    commonFunctions.navigateToApplication(applicationURL.DropBoxURL,'Dropbox');
  });

  //*********************************************** STEP- 367421 *****************************************

  describe("Test Step ID: 367421 ",function(){
    it('Click on Sign in button', function () {
      dropbox.getSignInButton().isPresent().then(function(bool){
        if(bool === false){
          expect(false).toBe(" Sign in button was not found on drop box home page.")
        }else{
          browser.actions().mouseMove(dropbox.getSignInButton()).perform();
          dropbox.getSignInButton().click();
          browser.sleep(5000);
        }
      });
    });

    it("Verify that login page is displayed",function(){
      dropbox.isLoginPageDisplayed().isPresent().then(function(bool){
        if(bool === false){
          expect(false).toBe(false, "Login page was not loaded after clicking on Sign in button");
        }
      });
    });

    var emailBoxRef = dropbox.getRequiredInputBox('email');
    var passwordBoxRef = dropbox.getRequiredInputBox('password');

    commonFunctions.enterLoginCredentials(emailBoxRef,'email',userdata.userName);

    commonFunctions.enterLoginCredentials(passwordBoxRef,'password',userdata.password,true);

  });

  //*********************************************** STEP - 367422 *****************************************
  describe("Test Step ID: 367422", function () {
    var filePath = __dirname +'\\..\\..\\docs\\DummyFile.txt';
    it("Click on Upload button from home page",function(){
      dropbox.getUploadButton().isPresent().then(function(bool){
        if(bool === false){
          expect(false).toBe("Upload button was not found. Hence can not upload files to the page.");
        }else{
          dropbox.getUploadButton().click();
          dropbox.getFilesButton().click();
          browser.sleep(5000);
          execSync('start '+__dirname +'\\..\\..\\docs\\uploadFile.au3 '+filePath);
        }
      });
    });
  });

});