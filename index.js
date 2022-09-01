import express from 'express';
import {ler, lerUm, inserir, atualizar} from "./src/aluno.js"

const app = express();
const porta = 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* Rotas */
/* rota (endpoint) para a raiz da API */
app.get('/', (req, res)=>{
    res.send(`Essa é a página inicial da aplicação, ou raiz da API. É um dia lindo para aprender sobre APIs.`);
 /*    res.render(`index`); */
});

/* rota para exibir todos os alunos */
app.get('/alunos', (req, res)=>{
   // res.send(`Exibir todos os alunos.`);
   /*  res.render(`alunos`); */
   ler(res);
});

/* rota para exibir um unido aluno */
app.get('/alunos/:id', (req, res)=>{
    const idAluno = req.params.id;
    lerUm(idAluno, res);
    //res.send(`Exibir dados de UM aluno.`);
    //res.render(`alunos/:id`);
});

/* rota  */
app.post('/alunos', (req, res)=>{
    const novoAluno = req.body;
    inserir(novoAluno, res);
    //res.send(`Inserir alunos.`);
});

/* rota para atualizar todos os alunos */
app.put('/alunos/:id', (req, res)=>{
    
    res.send(`atualizar todos os dados de um aluno`);
});

/* rota para atualizar alguns/todos alunos */
app.patch('/alunos/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
    //res.send(`atualizar alguns/todos alunos`);
});

/* rota para excluir alunos */
app.delete('/alunos/:id', (req, res)=>{
    
    //res.send(`excluir aluno`);
});

/* configurando o servidor */
app.listen(porta, ()=>{
    console.log(`Servidor express rodando...`);
});