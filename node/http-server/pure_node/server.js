//Aplicação de exemplo usando módulos que estão incorporados no core do node
//módulo http para iniciar um servidor http e módulo fs para acessar o sistema de arquivos
//importando os modulos http e filesystem
const http = require('http'), fs = require('fs')

//criação do servidor http
http.createServer((req, res) =>{
    //cabeçalho da resposta
    res.writeHead(200,{
        'Content-Type':'text/html',
        'Acces-Control-Allow-Origin': '*'
    })

    //Leitura do arquivo index.html
    let readStream = fs.createReadStream(__dirname + '/index.html')
    //envio do arquivo lido para o cliente
    readStream.pipe(res)
}).listen(8000)

//informação do endpoint para o usuário
console.log('Para ver a aplicação em execução acesse: http://localhost:8000')
