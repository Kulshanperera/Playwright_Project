import { test, expect } from '@playwright/test';

const LoginSignUp_BTN="//*[@class='sign-in-label']";
const NewUser="//a[@class='linkBtn float-left']";
const PopupTitlt="//h2[@id='loginPopupHead']";
const RegTitle="//h1[@class='account-page__header']";
//----Form xpth locators/fileds
const Email="//input[@id='login.email']";
const TypeEmail="ABC@gmail.com";
const Email2="//input[@id='login.email2']";
const Pass="//input[@id='login.password']";
const Pass2="//input[@id='login.password2']";
const TypePass="12345";
const DropDown1="//*[@id='taxonomy[0].values']";
const DropDown2="//*[@id='taxonomy[1].values']";
const Fname="//input[@id='personal.givenNames']";
const Lname="//input[@id='personal.surname']";
const TypeFName="FName"
const TypeLName="LName"
const Checkbox2="(//label[@class='checkbox--primary'])[2]";//there are 2 check boxes use index 2 for to check 2nd box
const ResiterBtn="//input[@class='button btn primary float-right']";
const RegErrMsg="//span[@class='error']";
//----Form xpth locators/fileds

//Test Case Name
test.only('Validate error messages in registor funtion', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // verfy page title for  
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works",{timeout:5000});//verify page title
  await page.locator(LoginSignUp_BTN).click();//Clcik login register button
  await expect(page.locator(PopupTitlt)).toHaveText("Log in to Wiley Online Library",{timeout:2000});
  await page.locator(NewUser).click();
  await expect(page.locator(RegTitle)).toHaveText("Register"); //Validate we are on the correct page
  await page.locator(Email).pressSequentially(TypeEmail);//Type Email
  await page.locator(Email2).pressSequentially(TypeEmail);//Retype Email
  await page.locator(Pass).pressSequentially(TypePass);//Type Passeword
  await page.locator(Pass2).pressSequentially(TypePass);//Retype Password
  await page.locator(DropDown1).selectOption({ index: 14 })//Select conuntry 
  await page.locator(DropDown2).selectOption({ index: 4 })//Select Subject area
  await page.locator(Fname).pressSequentially(TypeFName);//Type First Name
  await page.locator(Lname).pressSequentially(TypeLName);//Type Last Name
  await page.locator(Checkbox2).check();//check checkbox
  expect(page.locator(Checkbox2)).toBeChecked();//validated check box is checked
  await page.locator(ResiterBtn).click();//click register button
  await expect(page.locator(RegErrMsg)).toHaveText("Your registration cannot be completed. Missing fields and other types of errors are highlighted in red.",{timeout:2000});
  //Validate error message is present  
});

