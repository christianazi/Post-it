let fs = require('fs')

function addElementToJSON(json,element){
  json.push(element)
}

function writeFileJSON(file, dataJSON) {
  fs.writeFile(file, JSON.stringify(dataJSON), (err) => {
    if (err) {
      throw err;
      
    }
  })
}


module.exports = {addElementToJSON, writeFileJSON}