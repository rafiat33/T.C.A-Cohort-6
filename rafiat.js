const fs = require('fs');

// fs.readFile('../folder/text.txt', 'utf-8', (error, data)=> {
//     if (data) {
//         console.log(data);
//     } else{
//         console.log(error);
//     }
// })

// fs.writeFile('../folder/text.txt', 'Joshua stop sleeping in class', 'utf8',(error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Data written to file successfully');
//     }
// })

// fs.appendFile('../folder/text.txt', '\nPatrick leave Obi alone\nDivinefavour should let the class knows when ther is assignments.', 'utf-8', (error, )=> {
//     if (error) {
//         console.log(error);
        
//     } else {
//         console.log('File successfully Appended.');
        
//     }
// })

// const path = './hubs.txt';
const content = "1. Coconut hub\n2. Festac hub";

const array = [
    {
        path: './hubs.txt',
        content: "1. Coconut hub\n2. Festac hub"
    },
    {
        path: './players.txt',
        content: '1. Mata\n2. Davids\n3. Cold Palmer'
    },
    {
        path: './clubs.txt',
        content: '1. Chelsea\n2. PSG\n3. Barcelona'
    },
]

const fileSystem = (path, content)=> {
    fs.writeFile(path, content, 'utf-8', (error)=> {
        if (error) {
            console.log(error);
        } else {
            console.log('File successfully created');
        }
    })
    fs.readFile(path, 'utf8', (error, data)=>{
        if (data) {
            // console.log('Successfully read data: ', data);
            
        } else {
            console.log(error); 
        }
    })
    const newPath = .${path.split('.')[1]}1.txt
    fs.copyFile(path, newPath,(error)=>{
        if (error) {
            console.log(error);
        } else {
            console.log(Successfully duplicate file);
        }
    })
}
fileSystem(array[2].path, array[2].content)

fileSystem('./players.txt', '1. Mata\n2. Davids\n3. Cold Palmer')
// fileSystem('./clubs.txt', '1. Chelsea\n2. PSG\n3. Barcelona')
// fileSystem(path, content)

// console.log(array[2].content);
// array.forEach((e)=> fileSystem(e.path,e.content))