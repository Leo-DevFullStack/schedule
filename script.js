document.getElementById('taskForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const tarefa = document.getElementById('tarefa').value;
    const periodo = document.getElementById('periodo').value;
    const tipo = document.getElementById('tipo').value;

    const data = {
        tarefa,
        periodo,
        tipo
    };
