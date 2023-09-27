$(function () {
    let usersFitch=false;
    $('#posts').hide();
    $('#posts2').hide();
    $('#line1').hide();
    $('#btn1').click(function () {
        let id = $('#id').val();
        $.ajax('https://jsonplaceholder.typicode.com/users/', {
            'type': 'GET',
            'data': {
                'id': id
            }
        }).done(response => {
            console.log(response);
            let name = 'User name: ' + response[0].name;
            let email = 'email:' + response[0].email;
            let suite = 'suite:' + response[0].address.suite;
            let street = 'street:' + response[0].address.street;
            let city = 'city:' + response[0].address.city;
            let zipcode = 'zipcode:' + response[0].address.zipcode;
            let geo = 'geo:' + response[0].address.geo.lat + ',' + response[0].address.geo.lng;
            $('#username').html(name);
            $('#email').html(email);
            $('#suite').html(suite);
            $('#street').html(street);
            $('#city').html(city);
            $('#zipecode').html(zipcode);
            $('#geo').html(geo);
            $('#line1').show();
        }).fail(error => {
            console.log(error.xhr, error.status, error.exception);
        });
        $.ajax('https://jsonplaceholder.typicode.com/posts/', {
            'type': 'GET',
            'data': {
                'userId': id
            }
        }).done(result => {
            let contents = '';
            console.log(result);
            $('#posts').show();
            for (let i = 0; i < result.length; i++) {
                contents += '<div>' + '<h3>' + (i + 1) + '</h3>' + 'Title:' + result[i].title + '<br/>' + 'Post:' + result[i].body + '</div>' + '<hr/>'
            }
            $('#post').html(contents);
        }).fail(error => {
            console.log(error.xhr, error.status, error.exception);
        });
    });

    if (!usersFitch) {
        $.get('https://jsonplaceholder.typicode.com/users', {
        }).done(result => {
            let contents = '<option value="0"' + 'Select user' +'</option>';
            console.log(result);
            for (let i = 0; i < result.length; i++) {
                contents += '<option value="' + result[i].id + '">' + result[i].name + '</option>';
            }
            $('#users').html(contents);
        }).fail(error => {
            console.log(error.xhr, error.status, error.exception);
        });
        usersFitch=true;
    }

    $('#users').click(function(){
        let id1=$('#users').val();
        if(id!=0){
            $.ajax('https://jsonplaceholder.typicode.com/posts/', {
                'type': 'GET',
                'data': {
                    'userId': id1
                }
            }).done(result => {
                let contents = '';
                $('#posts2').show();
                for (let i = 0; i < result.length; i++) {
                    contents += '<div>' + '<h3>' + (i + 1) + '</h3>' + 'Title:' + result[i].title + '<br/>' + 'Post:' + result[i].body + '</div>' + '<hr/>'
                }
                $('#userpost').html(contents);
            }).fail(error => {
                console.log(error.xhr, error.status, error.exception);
            });
        }
    })
});