console.log('testing')

function validform(){
    let x = document.querySelector('#username').value
    console.log(x)

    let xlength = x.length
    console.log(xlength)

  
}


    let y = document.querySelector('#email').value
    console.log(y)

    let ylength = y.length
    console.log(ylength)

    let z = document.querySelector('#password').value
    console.log(z)
    
    let zlength = z.length
    console.log(zlength)



if(x_Length <=3){
    document.querySelector('.input_wrong').innerText = 'User name should contain 3 character...'
}
else if(!y.match(emailStructure)){
    document.querySelector('.input_wrong').innerText = 'Enter valid e-mail...'
}
else if (z_Length <=0){
    document.querySelector('.input_wrong').innerText = 'Password is required......'
}
else if(z_Length <=5){
    document.querySelector('.input_wrong').innerText = 'Password is too Short.....'
}
else if(z_Length <=10){
    document.querySelector('.input_wrong').innerText = 'Password is Moderate.....'
}
else if(z_Length <=20){
    document.querySelector('.input_wrong').innerText = ''
    document.querySelector('.input_success').innerText = 'Password is Strong & Submitted '
}
else{
   document.querySelector('.input_wrong').innerText = 'Wrong Input!!!!!' 
}


