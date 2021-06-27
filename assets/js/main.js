(function () {
    $('.btn-drop').each(function () {
        $(this).on('click', function () {
            $($(this).attr('data-target')).toggle('show');
        });

    });

    //$(btn.attr('data-toggle'))
    $('.btn-close').each(function () {
        $(this).on('click', function () {
            if ($(this).attr('data-dismiss')) {
                $(this).closest($(this).attr('data-dismiss')).removeClass('show');
            }
            console.log($(this).attr('data-dismiss'));
        });
    });

    $('[data-toggle=slide-in-wrap]').each(function () {
        $(this).on('click', function () {
            $($(this).attr('data-target')).addClass('show');

        });
    });

    $('.action-drop-btn').each(function () {
        $(this).on('click', function () {
            $(this).siblings('.action-drop').toggleClass('show')
            $(this).siblings($(this).attr('data-target').addClass('show'));
            console.log($($(this) + ' ' + $(this).attr('data-target')));

        });
    });

    $('[data-toggle=slide-in-wrap]').each(function () {
        $(this).on('click', function () {
            $($(this).attr('data-target')).addClass('show');

        });
    });

    $('.btn-toggle').each(function () {
        $(this).on('click', function () {
            removeActive('.toggle-item', 'show');
            removeActive('.btn-toggle', 'active');
            console.log($(this));
            console.log($(this).hasClass('active'));
            if ($(this).hasClass('active')) {
                alert('Yes');
                $(this).removeClass('active');
                $($(this).attr('data-target')).removeClass('show');
            }
            //removeActive('.btn-toggle', 'active');
            $(this).addClass('active');
            $($(this).attr('data-target')).addClass('show');
        });
    });

    $('.btn-page-type').each(function () {
        $(this).on('click', function () {
            removeActive('.btn-page-type', 'active');


            //removeActive('.btn-toggle', 'active');
            $(this).addClass('active');
        });
    });

    $('.box-copy').on('click', function () {
        $(this).select();
        document.execCommand("copy");
        clearSelection();
    });

    function clearSelection() {
        if (document.selection)
            document.selection.empty();
        else if (window.getSelection)
            window.getSelection().removeAllRanges();
    }

    function removeActive(elem, keyword) {
        $(elem).each(function () {
            $(this).removeClass(keyword);
        });
    }
})();