const http = require("http")

const server = http.createServer((req, res) => {
    res.end("hola")
})

server.listen(8080, () => {
    console.log("servidor escuchando")
})