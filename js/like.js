const url = "https://docs.google.com/spreadsheets/d/1LXaoYYo3tvRI1Y2MssPe4rwmLQ_o-mLzcuT7r2ZVDZ4/export?format=csv";
let liked = 0;

function getLike(like = null){
    fetch(url).then(result=>result.text()).then(function(csvtext){
        return csv().fromString(csvtext);
    }).then(function(csv){
        if (like == 1) {
            liked += 1;
            update_value(readCookie('__name'), readCookie('__email'), 1);
            $('.bi.bi-hand-thumbs-up').attr("class", "bi bi-hand-thumbs-up-fill");
            $('#like').html("Liked " + liked);
            writeCookie('__liked', 1, 0.5);
        } else {
            csv.forEach(row => {
                if (row.LIKED == 1) {
                    liked += 1;
                }
                if (readCookie('__google_auth') == '') {
                    $('.bi.bi-hand-thumbs-up-fill').attr("class", "bi bi-hand-thumbs-up");
                    $('#like').html("Like " + liked)
                    $('#like-d').html("Like " + liked)
                } else {
                    $('.bi.bi-hand-thumbs-up').attr("class", "bi bi-hand-thumbs-up-fill");
                    $('#like').html("Liked " + liked);
                    $('#like-d').html("Liked " + liked);
                }
            });
        }
    });
}

getLike()

function like(e){
    if (readCookie('__liked') == '') {
        return false;
    }
    if (readCookie('__liked') == 0) {
    }
}

function sigIn(profile){
    let data = profile;
    if (data != null) {
        let url = script_url + "?action=read";
        $.getJSON(url, function (json) {
            let arr = json.records;
            let email = [];
            arr.forEach((value, index) => {
                email.push(value.EMAIL);
                if (data.Yt == value.EMAIL) {
                    console.log("update");
                    update_value(data.Se, data.Yt, value.LIKED);
                    $('.bi.bi-hand-thumbs-up').attr("class", "bi bi-hand-thumbs-up-fill");
                    $('#like').html("Liked " + liked);
                    $('#like-d').html("Liked " + liked);
    
                    writeCookie('__email', data.Yt, 0.5);
                    writeCookie('__name', data.Se, 0.5);
                    writeCookie('__liked', value.LIKED, 0.5);
                }
            });
            if (email.includes(data.Yt) === false) {
                console.log("new user");
                liked += 1;
                insert_value(data.Se, data.Yt, 1);
                $('.bi.bi-hand-thumbs-up').attr("class", "bi bi-hand-thumbs-up-fill");
                $('#like').html("Liked " + liked);
                $('#like-d').html("Liked " + liked);

                writeCookie('__email', data.Yt, 0.5);
                writeCookie('__name', data.Se, 0.5);
                writeCookie('__liked', 1, 0.5);
            }
        });
        $('#btn-outline-like').attr('hidden', true);
        $('#like-display').attr('hidden', false);
    }
}

if (readCookie('__email') !== '') {
    if (readCookie('__liked') == 1) {
        $('.bi.bi-hand-thumbs-up').attr("class", "bi bi-hand-thumbs-up-fill");
        $('#like').html("Liked " + liked);
    }
    $('#g_name').html(readCookie('__name'));
    $('#name').val(readCookie('__name'));
    $('#email').val(readCookie('__email'));

    $('.btn-login').attr('hidden', true);
    $('.btn-login-label').attr('hidden', false);
} else {
    $('.btn-login').attr('hidden', false);
    $('.btn-login-label').attr('hidden', true);
}