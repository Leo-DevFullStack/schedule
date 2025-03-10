/*

    Os dados capturados pelo formulário são salvos em:
    https://docs.google.com/spreadsheets/d/1ykDu_EGt469j1H8q_KaKWDktxzHj9qWv1Wo1Qn7xdzQ/edit?gid=0#gid=0

*/

document.getElementById('tarefasFormulario').addEventListener('submit', async function(e) {
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

        if (response.ok) {
            alert('Tarefa adicionada com sucesso!');
            document.getElementById('tarefasFormulario').reset();
        } else {
            alert('Erro ao adicionar tarefa.');
        }

    } catch (error) {
        alert('Erro ao conectar com a API.');
    }
    
});