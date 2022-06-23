const Todo = require('./todo');

Todo.methods([
    'get', 
    'post', 
    'put', 
    'delete'
]);

Todo.updateOptions({
    // Ao executar o update retorna os dados atualizados do cliente
    new: true, 
    // Validar dados de atualização do registro 
    runValidators: true
});

module.exports = Todo;