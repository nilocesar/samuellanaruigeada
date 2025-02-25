events.on('ready', function() {
    $('.button-type-next-page01').on('click', function() {
        scorm.saveObject('pag01', true);
        navigate.next();
    })
});