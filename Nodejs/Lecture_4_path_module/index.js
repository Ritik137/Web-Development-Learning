// console.log("path module");

import path from 'path'

// join two or more file

const fullPath = path.join('/path', 'index.py', 'file.java')
// console.log('file join = ', fullPath)

// absolute path
const absolutePath = path.resolve();
// console.log("we are currently working on =", absolutePath)

const extname = path.extname('resume.docs')
// console.log("extname =", extname)
if(extname == '.pdf'){
    console.log("OK")
}else{
    console.log("not support..")
}