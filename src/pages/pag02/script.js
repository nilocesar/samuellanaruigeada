events.on('ready', function() {
    $('.botao').on('click', function() {
        $(this).find('.pulse').css('animation', 'none')
    });

    $('.btn').on('click', function() {
        var currentIndex = $(this).index('.btn');
        $('.btn').eq(currentIndex + 1).removeClass('block-2');
    });

    $('.button-type-next-page05').on('click', function() {
        scorm.saveObject('pag02', true);
        navigate.next();
    });
});