$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('input').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).addClass('texto-riscado');
    });
    
})