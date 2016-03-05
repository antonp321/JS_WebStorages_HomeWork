if(!Storage.prototype.setObject) {
    Storage.prototype.setObject = function setObject(key, obj) {
        this.setItem(key, JSON.stringify(obj));
    };
}

if(!Storage.prototype.getObject){
    Storage.prototype.getObject  = function getObject(key) {
        return  JSON.parse(this.getItem(key));
    };
}
///////////////////////////////////////////////////////////

// The Timer
var fiveMin = 60 * 5;
setInterval(function(){
    fiveMin--;
    var result = parseInt(fiveMin / 60) + ':' + fiveMin % 60;
    if((fiveMin%60).toString().length === 1){
      result = parseInt(fiveMin / 60) + ':0' + fiveMin % 60;
    }
    $('#timer').text(result);

}, 1000);

// Question 1

$('#que1').find('li').each(function(index){
   $(this).on('click', function(){
      localStorage.setObject('Question1', index + 1);
   });
});

$('#a' + localStorage.getObject('Question1')).attr('checked',true);

// Question 2

$('#que2').find('li').each(function(index){
    $(this).on('click', function(){
        localStorage.setObject('Question2', index + 1);
    });
});

$('#b' + localStorage.getObject('Question2')).attr('checked',true);

// Question 3

$('#que3').find('li').each(function(index){
    $(this).on('click', function(){
        localStorage.setObject('Question3', index + 1);
    });
});

$('#c' + localStorage.getObject('Question3')).attr('checked',true);


if(localStorage.getObject('Question1') && localStorage.getObject('Question2') && localStorage.getObject('Question3') ){
    $('#main-button').on('click', function(){
        $('body').append("<p> You are fan of " + $('#a' + localStorage.getObject('Question1')).val() + "</p>");
        $('body').append("<p> You think " + $('#b' + localStorage.getObject('Question2')).val() + " will win the League.</p>");
        $('body').append("<p> According to you " + $('#c' + localStorage.getObject('Question3')).val() + " is the best striker in Europe</p>");

        $('ul').remove();
        $('#main-button').remove();
    });
}