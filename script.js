var button = document.getElementsByClassName('btn-primary')[0];
var body = document.getElementsByTagName('body')[0];


var index = 0;
button.addEventListener('click',function(){
    var colours = ['red','orange','yellow','purple','black'];
    
    body.style.background = colours[index++];


    if(index > colours.length-1){
        index = 0;
    }
})