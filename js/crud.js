const script_url = "https://script.google.com/macros/s/AKfycbwGl-3vXUS27oC06Qfq6KSTzissLlgu6C98eGB1BXAjfy8izpaEo18F7kuN3-LjejZfRw/exec";

// Make an AJAX call to Google Script
function insert_value(name, email, liked) {
    let url = params(logID, name, email, liked, "insert");
    request(url);
}

function update_value(name, email, liked){
    let url = params(logID, name, email, liked, "update");
    request(url);
}

function delete_value(name, email, liked){
    let url = params(logID, name, email, liked, "delete");
    request(url);
}

function params(id, name, email, liked, action){
    return script_url + "?callback=ctrlq&id=" + id + "&name=" + name + "&email=" + email + "&liked=" + liked + "&action=" + action;
}

function request(url){
    let request = $.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}

function ctrlq(e) {
    read_value();
}

function read_value() {
    let url = script_url+"?action=read";
    $.getJSON(url, function (json) {
        logID = json.records[json.records.length - 1].ID + 1;
    });
}
read_value()