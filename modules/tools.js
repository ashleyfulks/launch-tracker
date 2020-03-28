var fs = require('fs'); // Filewriting

exports.saveFile = function(file, filename) {
  // Saves JSON file. If file_id exists, it will overwrite
  //
  // var data = JSON.stringify({"menu": {
  //   "id": "file",
  //   "value": "File",
  //   "popup": {
  //     "menuitem": [
  //       {"value": "New", "onclick": "CreateNewDoc()"},
  //       {"value": "Open", "onclick": "OpenDoc()"},
  //       {"value": "Close", "onclick": "CloseDoc()"}
  //     ]
  //   }
  // }});
  var data = JSON.stringify(file);
  // Save merchant file
  fs.writeFile("./merchants/" + filename + ".json", data, function(err, data) {
    if(err) { console.log("Error:", err)};
  });

}
