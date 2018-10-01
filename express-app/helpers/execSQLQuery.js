var mysql = require('mysql')
var msgError = require('./errosSQL')

function execSQLQuery(query, data, res) {
  //operador ternario!!!
  //se eu tiver passado uma funcao que ajeita os resultados da busca como parametro da funcao, eu atribuo,
  //do contrario eu apenas retorno os resultados brutos
  var funcaoDeTratamento =
    arguments.length > 3 && arguments[3] !== undefined
      ? arguments[3]
      : function(results) {
          return { resultados: results };
        };

  //   var results = {
  //     resultados: [{ id: "id1" }, { id: "id2" }]
  //   };

  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: 'lum0l4b1',
    // password: "root",
    // password: 'cin>>',
    database: "Shop00"
  });

  connection.query(query, data, function(error, results) {
    if (error){
        var err = msgError(error);
        res.send({title:"error",status:error.errno, message: err}); 
        // res.send(error)
    } 
    else if (results.length == 0) res.json({ resultados: [] });
    else {
      var formatedResults = funcaoDeTratamento(results);

    //   res.json(formatedResults);
    }
    connection.end();
    console.log("executou!");
  });
}

module.exports = execSQLQuery;