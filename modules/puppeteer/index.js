const PuppeteerModel = require( './PuppeteerModel' )
const model = new PuppeteerModel()


const engineMap = {
  google: {
    url: "https://translate.google.com/",
    setTranslating: () => {
      document.getElementById("source").value = "这是一段测试!"
    },
    getTranslated: () => document.getElementsByClassName("translation")[0].innerText,
  },
  youdao: {
    url: "http://fanyi.youdao.com/",
    setTranslating: () => {
      document.getElementById("inputOriginal").value = `这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字`
      document.getElementById("transMachine").click()
    },
    getTranslated: () => document.getElementById("transTarget").innerText,
    waitTime: 1000
  },
}



model.init().then( () => {
  model.search( {  waitTime: 1000, ...engineMap.youdao, } ).then( data => console.log( data ) )
  // model.search( {  waitTime: 1000, ...engineMap.google, } ).then( data => console.log( data ) )
} )

