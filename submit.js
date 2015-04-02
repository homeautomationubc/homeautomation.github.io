$(function() {

    $('.form-signin').submit(function( e ) {
        e.preventDefault();
        var email = $( '#inputEmail' ).val();
        var password = $( '#inputPassword' ).val();
        var name = $( '#inputName' ).val();
        
        var signup = {
            'email': email,
            'password': password,
            'name': name
        };

        console.log(signup);

        $.ajax({
            type: 'POST',
            data: JSON.stringify(signup),
            contentType: 'application/json',
            url: '',
            success: function(data){
                //console.log(data);
            },
            error: function() {
                console.log('fuck');
            }
        });
    });

    $('.form-login').submit(function( e ) {
        e.preventDefault();
        var email = $( '#inputEmail' ).val();
        var password = $( '#inputPassword' ).val();
        var remember = $('#checkbox').is(':checked');
        
        var login = {
            'email': email,
            'password': password,
            'remember': remember
        };

        console.log(login);

        $.ajax({
            type: 'POST',
            data: JSON.stringify(login),
            contentType: 'application/json',
            url: '',
            success: function(data){
                //console.log(data);
            },
            error: function() {
                console.log('fuck');
            }
        });
    });

    $('.form-dash').submit(function( e ) {
        e.preventDefault();
        var light = $( '#light' ).is(':checked');
        var door = $( '#door' ).is(':checked');
        var music = $( '#music' ).is(':checked');
        
        var status = {
            'light': light,
            'door': door,
            'music': music
        };

        console.log(status);

        $.ajax({
            type: 'POST',
            data: JSON.stringify(status),
            contentType: 'application/json',
            url: '',
            success: function(data){
                //console.log(data);
            },
            error: function() {
                console.log('fuck');
            }
        });
    });

    //$('#lightOn').prop('checked', true);

    //var off = $( '#lightOff' ).val();
    //console.log(off);

});
