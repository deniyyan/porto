function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    chk_log();
}

let googleUser = {};
let startApp = function () {
    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            client_id: '281077271172-bhcu5od52gjkha6vl0539pc5kev48ana.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        });
        attachSignin(document.getElementById('customBtn'));
        if (readCookie('__google_auth') == '') {
            attachSignin(document.getElementById('btn-outline-like'));
        }
    });
};

function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function (googleUser) {
            let profile = googleUser.getBasicProfile();
            sigIn(profile);
            document.getElementById('g_name').innerText = googleUser.getBasicProfile().getName();
            $('.btn-login').attr('hidden',true);
            $('.btn-login-label').attr('hidden',false);
            writeCookie('__google_auth', readCookie('G_AUTHUSER_H'), 0.5);
            chk_log();
        }, function (error) {
            console.log(error);
            alert('Login gagal!');
        }
    );
}

function signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        $('.btn-login').attr('hidden', false);
        $('.btn-login-label').attr('hidden', true);
        writeCookie('__google_auth', '', 0.5);
        writeCookie('__email', '', 0.5);
        writeCookie('__name', '', 0.5);
        writeCookie('__liked', '', 0.5);
        alert("You have been signed out successfully")
        ? '' : location.reload();
    });
}

function chk_log() {
    if (readCookie('__google_auth') == '') {
        $('#logout').attr("hidden", true);
    } else {
        $('#logout').attr("hidden", false);
    }
}

async function asyncStartApp() {
    await startApp();
    chk_log();
}
asyncStartApp();