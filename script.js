function generate(){

    //set password length and conplexity
    let complexity = document.getElementById("slider").value;

    let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create a for loop to choos passowrd characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1))); 
        
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;


}