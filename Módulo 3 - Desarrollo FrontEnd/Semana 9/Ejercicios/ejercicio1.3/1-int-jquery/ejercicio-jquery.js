$(document).ready(function() {
    $('#toggleColorsBtn').on('click', function() {
        $('.container .box').each(function() {
            var $box = $(this);
    
            if ($box.hasClass('box--color-primary')) {
                $box.removeClass('box--color-primary').addClass('box--color-secondary');
            } else if ($box.hasClass('box--color-secondary')) {
                $box.removeClass('box--color-secondary').addClass('box--color-primary');
            } else {
                $box.addClass('box--color-primary');
            }
        });
    });

    $('#toggleRoundedBordersBtn').on('click', function() {
        $('.container .box').toggleClass('box--rounded');
    });

    $('#addNewBoxBtn').on('click', function() {
        var newBox = $('<div class="box box--color-primary"></div>'); 
        $('#boxContainer').append(newBox);
    });
});