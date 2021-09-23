const puppeteer = require("puppeteer");
url = `https://www.moc.go.th/index.php/rice-iframe-11.html`;

const getPrice = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const [el] = await page.$x('//*[@id="tblCheckprice"]/tbody/tr[1]/td[2]');
  const name = await el.getProperty("name");
  const namek = await name.jsonValue();
  console.log(namek);
  /*const [el2] = await page.$x("//*[@id="tblCheckprice"]/tbody/tr[1]/td[3]");
  const [el3] = await page.$x("//*[@id="tblCheckprice"]/tbody/tr[1]/td[4]")*/
};
getPrice(url);
