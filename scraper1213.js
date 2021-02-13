
// The file has been edited by JoyceTan
const puppeteer = require("puppeteer");

(async () => {

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  const url = "https://marketingplatform.google.com/about/partners/find-a-partner?page=1";
  
  await page.goto(url);

  const partners = await page.evaluate(() => {
      Array.from(document.querySelectorAll("div.compact")).map(compact => ({
        title: compact.querySelector("h3.title").innerText.trim(),
        logo: compact.querySelector(".logo img").src
      }))

      return {
          title,
          logo
      }
  });

  console.log(partners);  
  await browser.close();
  
})();
