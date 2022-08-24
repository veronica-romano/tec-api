import express from 'express';
const app = express();
const porta = 3000;


/* Rotas */
/* rota (endpoint) para a raiz da API */
app.get('/', (req, res)=>{
    res.send(`É um dia lindo para aprender sobre APIs.`);
 /*    res.render(`index`); */
});

/* rota para exibir todos os alunos */
app.get('/alunos', (req, res)=>{
    res.send(`Exibir todos os alunos.`);
   /*  res.render(`alunos`); */
});

/* rota para exibir um unido aluno */
app.get('/alunos/:id', (req, res)=>{
    res.send(`Exibir dados de UM aluno.`);
    res.render(`alunos/:id`);
});

/* rota  */
app.post('/alunos', (req, res)=>{
    
    res.send(`Inserir alunos.`);
});

/* rota para atualizar todos os alunos */
app.put('/alunos/:id', (req, res)=>{
    
    res.send(`atualizar todos os dados de um aluno`);
});

/* rota para atualizar alguns/todos alunos */
app.patch('/alunos/:id', (req, res)=>{
    
    res.send(`atualizar alguns/todos alunos`);
});

/* rota para excluir alunos */
app.delete('/alunos/:id', (req, res)=>{
    
    res.send(`excluir aluno`);
});

/* configurando o servidor */
app.listen(porta, ()=>{
    console.log(`Servidor express rodando...`);
});