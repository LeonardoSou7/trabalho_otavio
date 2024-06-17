function showProject(projectNumber) {
    // Esconde todos os projetos
    var projects = document.querySelectorAll('.project');
    projects.forEach(function (project) {
        project.classList.remove('active');
    });

    // Mostra o projeto selecionado
    var selectedProject = document.getElementById('project-' + projectNumber);
    selectedProject.classList.add('active');
}