const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
    //Write your code here
    //Don't change function name
    await fs.appendFile(fileName, fileContent);
};

writeFile(fileName, fileContent);
module.exports =  writeFile ;
