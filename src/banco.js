import mysql from 'mysql2';
const conexao = mysql.createConnection({
    //remoto
    host: 'srv28.prodns.com.br',
    user: 'webmaio1_vero',
    password: 'umasenha1',
    database: 'webmaio1_escolave'
    /* 
    //local
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola' */
});
//conexao simples ao banco de dados
//conexao.connect();

conexao.connect( erro =>{
    if (erro) {
        console.error(`Erro ao conectar: ${erro.message}`)
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}`)
    }
});

export default conexao