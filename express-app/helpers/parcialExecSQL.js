var mysql = require('mysql')
var msgError = require('./errosSQL')

function parcialExecSQLQuery(query, data, res, callback) {
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
    database: "SisenexDev"
  });

  connection.query(query, data, callback);
  connection.end();
}



module.exports = parcialExecSQLQuery;