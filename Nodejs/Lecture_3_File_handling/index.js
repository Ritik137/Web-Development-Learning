// console.log("file handling..  ");
import {readFile, writeFile, appendFile, mkdir} from 'fs/promises'

// Read file 
const read_file = async (fileName) =>{
    const data = await readFile(fileName, "utf-8")
    console.log(data)
}
// read_file('sample.txt');


// create file
const create_file = async(fileName, content) =>{
    await writeFile(fileName, content)
    console.log("File created successfully.. !")
}

// create_file('await.py',"this is a testing file..")
// create_file('app.jsx',"this is a react file..")


// // add content to file
const append_File = async (fileName,content)=>{
    await appendFile(fileName,content)
console.log("extra content added successfully..")
}

// append_File('app.jsx', 'this is my extra content...' )


//create folder - directory
const create_dir = async(dir) =>{
    await mkdir(dir, {recursive : true})
} 
// create_dir('src/component/java')
create_dir('src/py')





