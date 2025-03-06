const tarefas = [
    { id: 1739220546861, nome: "Estudar JavaScript", concluida: false }
];

function listarTarefas() {
    return tarefas;
}

function adicionarTarefa(nomeTarefa) {
    const novaTarefa = {
        id: Date.now().toString(),
        nome: nomeTarefa,
        concluida: false
    };
    tarefas.push(novaTarefa);
}

function removerTarefa(idTarefa) {
    const posicao = tarefas.findIndex(task => task.id == idTarefa);
    if (posicao !== -1) {
        tarefas.splice(posicao, 1);
    } else {
        console.log("Tarefa não encontrada!");
    }
}

function modificarTarefa(idTarefa, tarefaModificada) {
    const tarefaLocalizada = tarefas.find(tarefa => tarefa.id == idTarefa);
    if (tarefaLocalizada) {
        Object.assign(tarefaLocalizada, tarefaModificada);
    } else {
        console.log("Tarefa não encontrada!");
    }
}

function exibirMenu() {
    console.log("MENU PRINCIPAL");
    console.log("1 - Adicionar tarefas");
    console.log("2 - Listar tarefas");
    console.log("3 - Remover tarefa");
    console.log("4 - Modificar tarefa");
    console.log("5 - Sair");
}

function escolherOpcao(opcao) {
    switch (opcao) {
        case "1": {
            const nome = readline.question("Entre com o nome da tarefa: ");
            adicionarTarefa(nome);
            break;
        }
        case "2": {
            const tarefas = listarTarefas();
            console.log("Minhas tarefas");
            tarefas.forEach((tarefa) => {
                console.log(`ID: ${tarefa.id} - Nome: ${tarefa.nome} - Concluída: ${tarefa.concluida}`);
            });
            break;
        }
        case "3": {
            const id = readline.question("Entre com o id da tarefa: ");
            removerTarefa(id);
            break;
        }
        case "4": {
            const id = readline.question("Entre com o id da tarefa: ");
            const nome = readline.question("Entre com o nome da tarefa: ");
            const concluida = readline.question("Entre com o status da tarefa (true/false): ");
            modificarTarefa(id, { nome, concluida: concluida === 'true' });
            break;
        }
        case "5":
            console.log("Saindo...");
            process.exit(0);
            break;

        default:
            console.log("Opção inválida. Tente novamente!");
    }
}

function main() {
    while (true) {
        exibirMenu();
        const opcao = readline.question("Escolha uma opção: ");
        escolherOpcao(opcao);
    }
}

import readline from 'readline-sync';
main();
