$(document).ready(function () {

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

    // $('body').on('click', function (div) {
    //     //alert('Yeah');
    //     console.log($('.action-drop').hasClass('show'));
    //     if ($('.action-drop').hasClass('show')) {
    //         if (!div.target.classList.contains('action-drop')) {
    //             $('.action-drop').removeClass('show');
    //         }
    //     }
    // });

    // $(document).on("click", function(event){

    //     var $trigger = $(".action-drop");
    //     if($trigger !== event.target && !$trigger.has(event.target).length){
    //        $(".action-drop").slideUp('fast');
    //        alert('yeah');
    //     }            
    // });

    $('#int-platform').on('change', function () {
        var apiKey = true;
        var apiUrl = true;
        var apiSecret = false;
        var secretKey = false;
        var accessToken = false;
        var refrehToken = false;
        var accountID = false;
        var clientID = false;
        var clientSecret = false;
        var redirectURL = false;
        var password = false;
        var username = false;
        var hashKey = false;
        var sendlaneSubdomain = false;
        var webhookURL = false;

        switch ($(this).val()) {
            case 'active-campaign':
                apiKey = true;
                apiUrl = true;
                apiSecret = false;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'convert-kit':
                apiKey = true;
                apiUrl = false;
                apiSecret = false;
                secretKey = true;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'aweber':
                apiKey = false;
                apiUrl = false;
                apiSecret = false;
                secretKey = false;
                accessToken = true;
                refrehToken = true;
                accountID = true;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'constant-contact':
                apiKey = true;
                apiUrl = false;
                apiSecret = false;
                secretKey = false;
                accessToken = true;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'infusion-soft':
                apiKey = false;
                apiUrl = false;
                apiSecret = false;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = true;
                clientSecret = true;
                redirectURL = true;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'drip':
                apiKey = false;
                apiUrl = false;
                apiSecret = true;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'klaviyo':
                apiKey = true;
                apiUrl = false;
                apiSecret = false;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'get-response':
                apiKey = true;
                apiUrl = false;
                apiSecret = false;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'i-contact':
                apiKey = true;
                apiUrl = false;
                apiSecret = false;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = true;
                username = true;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'mailer-lite':
                apiKey = true;
                apiUrl = false;
                apiSecret = false;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'mail-chimp':
                apiKey = true;
                apiUrl = false;
                apiSecret = false;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'sendiio':
                apiKey = true;
                apiUrl = false;
                apiSecret = true;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = false;
                break;
            case 'send-lane':
                apiKey = true;
                apiUrl = false;
                apiSecret = false;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = true;
                sendlaneSubdomain = true;
                webhookURL = false;
                break;
            case 'web-hook':
                apiKey = false;
                apiUrl = false;
                apiSecret = false;
                secretKey = false;
                accessToken = false;
                refrehToken = false;
                accountID = false;
                clientID = false;
                clientSecret = false;
                redirectURL = false;
                password = false;
                username = false;
                hashKey = false;
                sendlaneSubdomain = false;
                webhookURL = true;
                break;
            default:
        }

        if (apiKey) {
            $('#api-key').css('display', 'inline');
        } else {
            $('#api-key').css('display', 'none');
        }

        if (apiUrl) {
            $('#api-url').css('display', 'inline');
        } else {
            $('#api-url').css('display', 'none');
        }

        if (secretKey) {
            $('#secret-key').css('display', 'inline');
        } else {
            $('#secret-key').css('display', 'none');
        }

        if (apiSecret) {
            $('#api-secret').css('display', 'inline');
        } else {
            $('#api-secret').css('display', 'none');
        }
        if (accessToken) {
            $('#access-token').css('display', 'inline');
        } else {
            $('#access-token').css('display', 'none');
        }
        if (accountID) {
            $('#account-id').css('display', 'inline');
        } else {
            $('#account-id').css('display', 'none');
        }
        if (clientID) {
            $('#client-id').css('display', 'inline');
        } else {
            $('#client-id').css('display', 'none');
        }
        if (clientSecret) {
            $('#client-secret').css('display', 'inline');
        } else {
            $('#client-secret').css('display', 'none');
        }
        if (redirectURL) {
            $('#redirect-url').css('display', 'inline');
        } else {
            $('#redirect-url').css('display', 'none');
        }
        if (password) {
            $('#pwd').css('display', 'inline');
        } else {
            $('#pwd').css('display', 'none');
        }
        if (username) {
            $('#username').css('display', 'inline');
        } else {
            $('#username').css('display', 'none');
        }
        if (hashKey) {
            $('#hash-key').css('display', 'inline');
        } else {
            $('#hash-key').css('display', 'none');
        }
        if (sendlaneSubdomain) {
            $('#sendlane-subdomain').css('display', 'inline');
        } else {
            $('#sendlane-subdomain').css('display', 'none');
        }
        if (webhookURL) {
            $('#webhook-url').css('display', 'inline');
        } else {
            $('#webhook-url').css('display', 'none');
        }

    });

    $('.action-drop-btn').each(function () {
        //removeClass('show');
        $(this).on('click', function () {

            if ($(this).siblings('.action-drop').hasClass('show')) {

            } else {
                closeAllActions();
            }
            // if ($(this).siblings('.action-drop').hasClass('show')) {
            //     console.log($(this).siblings('.action-drop').hasClass('show'));
            //     console.log('yeah');
            //     $(this).siblings('.action-drop').removeClass('show');
            // } else {
            //      console.log($(this).siblings('.action-drop').hasClass('show'));
            //     console.log('Nah');
            //     $(this).siblings('.action-drop').addClass('show');
            // }
            //$(this).siblings('.action-drop').addClass('show');
            if ($(this).siblings('.action-drop').hasClass('show')) {

                $(this).siblings('.action-drop').removeClass('show');
            } else {
                //alert('Nah');
                $(this).siblings('.action-drop').addClass('show');
            }

            //$(this).siblings($(this).attr('data-target').addClass('show'));
            //console.log($($(this) + ' ' + $(this).attr('data-target')));

        });
    });

    function closeAllActions() {
        $('.action-drop').each(function () {
            $(this).removeClass('show');
            if ($(this).hasClass('show')) {
                console.log('after everything i got called');
                $(this).removeClass('show');
            }
        });

        // for (var i = 0; i < $('.action-drop-btn').length; i++) {
        //     console.log($('.action-drop-btn')[i]);
        //     $('.action-drop-btn')[i].classList.remove('show');
        // }
    }

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

});