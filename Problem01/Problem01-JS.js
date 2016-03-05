if(!Storage.prototype.setObject){
    Storage.prototype.setObject = function setObject(key, obj) {
        this.setItem(key, JSON.stringify(obj));
    };
}

if(!Storage.prototype.getObject){
    Storage.prototype.getObject  = function getObject(key) {
        return  JSON.parse(this.getItem(key));
    };
}

var localCounter = 0;
var sessionCounter = 0;

if(!sessionStorage.getObject('Counter')){
    sessionStorage.setObject('Counter', sessionCounter);
}

if(!localStorage.getObject('Counter')){
    localStorage.setObject('Counter', localCounter);
}

if(localStorage.getObject('Counter') === 0){
    $('body').append("<input type='text' id='name'/>");
    $('body').append("<button id='name-button'> Type your name </button>");
    localCounter = parseInt(localStorage.getObject('Counter'));
    localCounter++;
    sessionCounter = parseInt(sessionStorage.getObject('Counter'));
    sessionCounter++;
    $('#name-button').on('click', function() {
        localStorage.setObject('ClientName', $('#name').val());
    });
    localStorage.setObject('Counter', localCounter);
    sessionStorage.setObject('Counter', sessionCounter);
}
else{
    $('#name').remove();
    $('#name-button').remove();
    $('body').prepend("<p>Greetings " + localStorage.getObject('ClientName') + "</p>");
    localCounter = parseInt(localStorage.getObject('Counter'));
    localCounter++;
    sessionCounter = parseInt(sessionStorage.getObject('Counter'));
    sessionCounter++;
    localStorage.setObject('Counter', localCounter);
    sessionStorage.setObject('Counter', sessionCounter);
}

$('body').append('<p>Total Reloads: ' + localStorage.getObject('Counter') + '</p>');
$('body').append('<p>Session Reloads: ' + sessionStorage.getObject('Counter') + '</p>');