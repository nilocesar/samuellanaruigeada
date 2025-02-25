events.on('ready', function() {
    $('.button-type-next-page01').on('click', function() {
        scorm.saveObject('pag04', true);
        navigate.next();
    });

    sec02TimeLine();

    function sec02TimeLine() {
        $('.button').on('click', function() {
            $(this).addClass('checked');
            $(this).siblings('.boxText').removeClass('opacity0');
        });
        $('.boxText').on('focus', function() {
            $(this).removeClass('opacity0');
        })
    }
});