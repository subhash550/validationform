console.log('testing')

function validform(){
    let x = document.querySelector('#username').value
    console.log(x)

    let xlength = x.length
    console.log(xlength)

    
    let y = document.querySelector('#email').value
    console.log(y)

    let ylength = y.length
    console.log(ylength)


    let emailStructure = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(emailStructure)

    let z = document.querySelector('#password').value
    console.log(z)
    
    let zlength = z.length
    console.log(zlength)

  
}




if(xlength <=3){
    document.querySelector('.input_wrong').innerText = 'User name should contain 3 character...'
}
else if(!y.match(emailStructure)){
    document.querySelector('.input_wrong').innerText = 'Enter valid e-mail...'
}
else if (zlength <=0){
    document.querySelector('.input_wrong').innerText = 'Password is required......'
}
else if(zlength <=5){
    document.querySelector('.input_wrong').innerText = 'Password is too Short.....'
}
else if(zlength <=10){
    document.querySelector('.input_wrong').innerText = 'Password is Moderate.....'
}
else if(zlength <=20){
    document.querySelector('.input_wrong').innerText = ''
    document.querySelector('.input_success').innerText = 'Password is Strong & Submitted '
}
else{
   document.querySelector('.input_wrong').innerText = 'Wrong Input!!!!!' 
}


