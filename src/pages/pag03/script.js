events.on('ready', function() {
    $('.button-type-next-page01').on('click', function() {
        scorm.saveObject('pag03', true);
        navigate.next();
    })

    sec02Adaptative();

    function sec02Adaptative() {
        $('.image-mapping-container').addClass('bloquear');

        $('.image-mapping-pin').on('click', function() {
            $(this).addClass('checked');
        });

        $('.sec02 .image-mapping-pin-2-0-2').on('click', function() {
            $('.image-mapping-info-2-0-2').addClass('bloquear');
        });

        $('.sec02 .image-mapping-pin').on('click', function() {
            if ($('.image-mapping-info-2-0-0').css('display') === 'flex') {
                $('.image-mapping-info-2-0-0').addClass('bloquear');
            }
            if ($('.image-mapping-info-2-0-1').css('display') === 'flex') {
                $('.image-mapping-info-2-0-1').addClass('bloquear');
            }
        });

        $('.closeBox1').on('click', function() {
            $('.image-mapping-info.image-mapping-info-2-0-0').removeClass('bloquear');
            $('.image-mapping-info.image-mapping-info-2-0-0').css('display', 'none');
        });
        $('.closeBox2').on('click', function() {
            $('.image-mapping-info.image-mapping-info-2-0-1').removeClass('bloquear');
            $('.image-mapping-info.image-mapping-info-2-0-1').css('display', 'none');
        });
        $('.closeBox3').on('click', function() {
            $('.image-mapping-info.image-mapping-info-2-0-2').removeClass('bloquear');
            $('.image-mapping-info.image-mapping-info-2-0-2').css('display', 'none');
        });
    }

});