//Aplicação básica usando servidor http com Express

//carregando módulos Express e path
const app = require('express')(),
      path = require('path')

//criação da rota
app.get('/', (req, res)=> {
        //enviando o index.html para o cliente
        res.sendFile(path.join(__dirname + '/index.html'))
    })

//inicialização do serviço na porta 8001
app.listen(8001)

//informação do endpoint para o usuário 
console.log('Para ver a aplicação em execução acesse: http://localhost:8001')
