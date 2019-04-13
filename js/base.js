$('.btn').click(function() {
   
    $('.modal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
    $('.modal').modal('show');

    
});
$(".name").html(localStorage.getItem("firstName"));