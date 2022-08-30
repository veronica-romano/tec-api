import conexao from "./banco.js";

function ler (res){
    const sql = "SELECT * FROM alunos ORDER BY nome";
    conexao.query(sql,(erro, resultados)=>{
       if (resultados.length === 0) {
        res.status(204).end();
        return;
       }
       if (erro) {
            res.status(400).json(erro.code);
       } else {
            res.status(200).json(resultados);
       }
    })
}

function lerUm (id, res){
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados)=>{
       if (resultados.length === 0) {
        res.status(204).end();
        return;
       }
       if (erro) {
            res.status(400).json(erro.code);
       } else {
            res.status(200).json(resultados[0]);
       }
    })
}

function inserir (aluno, res){
    //SET ? É UM CARACTER CORINGA (mysql2), recebe dados e atribui na ordem
    const sql = "INSERT INTO alunos SET ?";
    conexao.query(sql, aluno, (erro)=>{
       if (erro) {
            res.status(400).json(erro.code);
       } else {
            res.status(201).json({"status":"Aluno inserido!"});
       }
    })
}

export {ler, lerUm, inserir};