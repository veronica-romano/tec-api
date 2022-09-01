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

function atualizar(id, aluno, res){
     const sql = "UPDATE alunos SET ? WHERE id = ?";
     /* a ordem importa por conta do sql, primeiro pega dados do aluno dps o id */
     conexao.query(sql,[aluno, id],(erro,resultados)=>{
         if(erro){
             res.status(400).json(erro.code);
         }else{/* 
             res.status(200).json({"status":"atualizado com sucesso!"}); */
             /* spread operator(operador de 'espalhamento' de objeto) */
             res.status(200).json({...aluno,id});
 
         }
     });
}

function excluir(id, res){
     const sql = "DELETE FROM alunos WHERE id = ?";
     if(erro){
          res.status(400).json(erro.code);
      }else{/* 
          res.status(200).json({"status":"atualizado com sucesso!"}); */
          /* spread operator(operador de 'espalhamento' de objeto) */
          res.status(200).json({...aluno,id});

      } 
}
export {ler, lerUm, inserir, atualizar};