import { test, expect } from '@playwright/test';

const SearchBar="//input[@id='searchField1']";
const TyKeyword="Agriculture";
const SearchIcon="//button[@class='btn quick-search__button icon-search']";
const title="//*[@class='single_highlight_class']";


//Test Case Name
test.only('Search and vaildate results', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // verfy page title to validate the site is correct 
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works",{timeout:5000});//verify page title
  await page.locator(SearchBar).click();//click to Type
  await page.locator(SearchBar).pressSequentially(TyKeyword);//type keyword
  await page.locator(SearchIcon).click();//click search
  await page.locator(title).first().waitFor();//wait for the elemet 
  //count the articles that have Agriculture keyword on the title in 1st page and print it on console
  console.log("Number of Agriculture keyword in the first page in this search results", await page.locator(title).count());

});

