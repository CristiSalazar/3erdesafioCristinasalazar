//  const http = require("http")

//  const server = http.createServer((req, res) => {
//       res.end("hola")
//   })

//   server.listen(8080, () => {
//       console.log("servidor escuchando")
//   })

const express = require("express")
const app = express()
const PORT = 8080

const usuarios = [
    {id: "1", nombre:"Javier", apellido:"Jimenez", edad: "20"},
    {id: "2", nombre:"Matias", apellido:"Jimenez", edad: "22"}
]

app.get("/", (req,res) => {
    res.send(usuarios)
})

app.get("/:idUsuario", (req, res) => {
    let idUsuario = req.params.idUsuario
    let usuario = usuarios.find(u => u.id === idUsuario)
    res.send({usuario})
})

app.listen(PORT, () => {
    console.log("server escuchando")
})