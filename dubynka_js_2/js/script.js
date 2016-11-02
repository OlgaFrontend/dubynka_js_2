var names=[];

for (i=0; i<5; i++) {

names.push( prompt ("Enter the name"));

}

console.log(names);

var userName = prompt("What is your name?");

console.log("Your name is " + userName);

for (var i = 0; i < 5; i++) {
    
    if (names[i] == userName) {
        
        alert('Congratulations! ' + userName + ' Your are welcome!');
        
        break;
    } 
}

if ( i >= 5) {
       
       alert("Error!\nUser is not founded!");
    
    }



