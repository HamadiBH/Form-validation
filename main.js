const sendbtn = document.getElementById('sendbtn');
let form = document.getElementById('whole-form');
let firstname = document.getElementById('inpt-first-name').value;
let lastname = document.getElementById('inpt-last-name').value;
let adress = document.getElementById('inpt-adress').value;
let mail = document.getElementById('inpt-mail');
let pass = document.getElementById('inpt-pass');
let comment = document.getElementById('inpt-comment').value;
const valmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const valpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;


form.addEventListener("submit", function(e) {
    e.preventDefault();
  



    if (firstname.length ===0 || lastname.length===0 || adress.length===0 || comment.length===0 ){
        
        alert ('Please fill in all fields.')
        
    } 
    
    
     if (!valmail.test(mail.value)){
        alert ('Please enter a valid e-mail adress.')
    } 

     if (!valpass.test(pass.value)){
        alert ('The password must contain at least 8 characters and be a combination of letters, numbers and at least a capital letter.')
    } 
    
    else alert('Thank you!')
    
});






//  if () {
//     alert ('Please enter a valid e-mail adress.')
// }

// else if () {
//     alert ('The password must contain at least 8 characters.')
// }

// else if () {
//     alert ('The password must be a combination of charatacters , numbers and at least a capital letter.')
// }