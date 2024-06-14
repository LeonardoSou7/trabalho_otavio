function showProject(projectNumber) {
    // Esconde todos os projetos
    var projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
        project.classList.remove('active');
    });

    // Mostra o projeto selecionado
    var selectedProject = document.getElementById('project-' + projectNumber);
    selectedProject.classList.add('active');
}

function voltar() {
    // Ação para o botão Voltar
    alert('Função de voltar ainda não implementada.');
}

function processo() {
    // Ação para o botão Processo
    alert('Função de processo ainda não implementada.');
}
