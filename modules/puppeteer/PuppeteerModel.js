const puppeteer = require("puppeteer");

const maxTranslatingTime = 5000

function PuppeteerModel() {
  this.browser = null
}
PuppeteerModel.prototype.init = async function( ) {
  this.browser = await puppeteer.launch( { 
    // headless: false 
  } );
}

PuppeteerModel.prototype.search = async function( {
  url,
  setTranslating,
  getTranslated,
  waitTime,
},  ) {
  let target
  let hasGottenTarget = false
  let page
  let pagehasBeenClosed = false
  
  const work = async () => {
    page = await this.browser.newPage()
    await page.goto( url )
    await page.evaluateHandle( setTranslating );
    const translatedHandle = await Promise.resolve( new Promise( resolve => {
      setTimeout( () => resolve( page.evaluateHandle( getTranslated ) ), waitTime )
    } ) )
    const translated = await translatedHandle.jsonValue()

    // await page.screenshot({ path: "example.png" });
    target = await translated
    hasGottenTarget = true
    ! pagehasBeenClosed && page.close()
  }

  work()

  return new Promise( (resolve, reject) => {
    let timer = setInterval( () => {
      if ( hasGottenTarget ) {
        clearInterval( timer )
        page.close()
        pagehasBeenClosed = true
        resolve( target )
      }
    } )
    setTimeout( () => {
      clearInterval( timer )
      ! pagehasBeenClosed && page.close()
      reject( target )
    }, maxTranslatingTime )
  } ) 
}

module.exports = PuppeteerModel