import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

const LoginSignUp_BTN="//*[@class='sign-in-label']";
const Ebox="//*[@id='username']";
const Pbox="//*[@id='password']";
const Login="//*[@class='button btn submit primary no-margin-bottom accessSubmit']";
const LoginEr="//*[@id='login-error-message']";
const Email="ABC@gmail.com";
const Pass="1234";

//Test Case Name
test.only('Login with Invaild Credentioals', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // verfy page title for  
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works",{timeout:5000});//verify page title
  await page.locator(LoginSignUp_BTN).click();//clcik login register button
  await page.locator(Ebox).pressSequentially(Email);//type Email
  await page.locator(Pbox).pressSequentially(Pass);//Type Passeword
  await page.locator(Login).click();//click the login button
  await expect(page.locator(LoginEr)).toHaveText("Your email or password is incorrect. Please try again.",{timeout:10000});// verfy login error message and wait 10 sec
  await page.close();//close the current page
;
});

