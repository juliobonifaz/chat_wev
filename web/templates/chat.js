var currentUserId = 0;
function whoami(){
        $.ajax({
            url:'/current',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
                alert(JSON.stringify(response));
                $('#cu_username').html(response['username'])
                var name = response['name']+" "+response['fullname'];
                currentUserId = response['id']
                $('#cu_name').html(name);
            },
            error: function(response){
                alert(JSON.stringify(response));
            }
        });
    }

    function allusers(){
        $.ajax({
            url:'/users',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                var i = 0;
                $.each(response, function(){
                    f = '<div class="alert" onclick=alert('+currentUserId+','+response[i].id+') >';
                    f = f + response[i].username;
                    f = f + '</div>';
                    i = i+1;
                    $('#allusers').append(f);
                });
            },
            error: function(response){
                alert(JSON.stringify(response));
            }
        });
    }