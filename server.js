const http = require('http');
const studentDB = require('./studentDB.json');
const fs = require('fs')
const PORT = 8000;

const writeData = (data) => {
    fs.writeFile('./studentDB.json', JSON.stringify(data, null, 2), 'utf-8', (error, data) => {
        if (error) {
            console.log('Error writing to file', error)
        } else {
            return data
        }
    })
}

const server = http.createServer((request, response) => {
    if (request.method === 'POST' && request.url === '/create-student') {
        let body = '';
        request.on('data', (chunk) => {
            body += chunk
        });

        request.on('end', () => {
            const data = JSON.parse(body)
            data.id = studentDB.length + 1
            studentDB.push(data)
            console.log('Updated', studentDB);
            writeData(studentDB)
            response.writeHead(201, { 'Content-Type': 'text/plain' })
            response.end('Student Created Successfully')
        })


    } else if (request.url === '/all-students' && request.method == 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        const data = JSON.stringify(studentDB)
        response.end(data)
    } else {
        response.writeHead(200, { 'content-type': 'text/html' })
        response.end('<h1>Welcome to The Curve Africa Backend Class</h1>')
    }
});

server.listen(PORT, () => {
    console.log(Server is listening to PORT: ${PORT})
})


// console.log(studentDB[0].name)

// const server = http.createServer((request, response)=>{

//     console.log('Request: ', request)

//     response.writeHead(200, {'content-type': 'text/html'})
//     response.end('<h1>Welcome to The Curve Africa Backend Class</h1>')
// });