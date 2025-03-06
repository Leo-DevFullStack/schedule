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

    try {

        const response = await fetch('https://sheetdb.io/api/v1/gmwbxrkiy1u5g', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
    }