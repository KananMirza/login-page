let user = {
    email: ['kanan@gmail.com', 'ulvi@gmail.com', 'teymur@gmail.com', 'eyyub@gmail.com'],
    username: ['kanan', 'ulvi', 'teymur', 'eyyub'],
    password: ['12345', 'ulvi123', 'teymur_33', 'yuptech001']
    
}

let input = document.getElementsByTagName('input');
let i = document.getElementsByTagName("i")[0];
let slider = document.getElementById('slider');
let image = ['0', '1', '2'];
let j = 0;
let button = document.getElementById('submit');
let inp = document.createElement('input');
let email = document.getElementById('email');
let pass =document.getElementById('password');
let username = document.getElementById('username');



onload = () => {
    slider.style.backgroundImage = `url('img/${image[0]}.jpg')`;
    setInterval(Slider, 4000)
    if (input[1].type == "password") {
        i.classList.add('fa-eye-slash');
    }
}

// See password:
i.onclick = () => {

    if (input[1].type == "password") {
        input[1].type = "text";
        i.classList.remove('fa-eye-slash')
        i.classList.add('fa-eye');

    } else {
        input[1].type = "password"
        i.classList.remove("fa-eye");
        i.classList.add('fa-eye-slash');
    }
}
// Slider
function Slider() {

    if (j == 2) {
        j = 0;
        slider.style.backgroundImage = `url('img/${image[j]}.jpg')`;
        document.getElementById(j + 2).style.backgroundColor = "gray";
        document.getElementById(j).style.backgroundColor = "white";
    } else {
        j++;
        slider.style.backgroundImage = `url('img/${image[j]}.jpg')`;
        document.getElementById(j).style.backgroundColor = "white";
        document.getElementById(j - 1).style.backgroundColor = "gray";
    }
}

//Login

button.onclick = () => {

    if(button.innerHTML == "Login"){
    for (let a = 0; a < user.email.length; a++) {
       
        if (input[0].value == user.email[a] || input[0].value == user.username[a]) {
            if (input[1].value == user.password[a]) {
                button.innerHTML = `<i class="fas fa-cog fa-spin"></i>`
                document.getElementById('error').innerHTML = '';
                setTimeout(Success, 1500);
                setTimeout(Send, 2250);
                console.log(user.email)
                break;
                
            } else {
                document.getElementById('error').innerHTML = 'Email or password wrong'
            }
        } else {
            
            document.getElementById('error').innerHTML = 'Email or password wrong'
        }
    }
}else {
    if(email == '' || pass == '' || username == ''){
        
        document.getElementById('error').innerHTML ='Not null';
    }else{
        
    document.getElementById('error').innerHTML = '';
    user.email.push(email.value);
    user.password.push(pass.value);
    user.username.push(input[2].value);
    button.innerHTML = `<i class="fas fa-cog fa-spin"></i>`
    setTimeout(Success,1500)
    setTimeout(Login,2500)
        console.log(user.username)
}
}
}

function Success() {
    button.innerHTML = `<i class="far fa-check-circle"></i> Done`;
}

function Send() {
    location.href = 'https://github.com/KananMirza/login-page';
}

document.getElementById('signup').onclick = () =>{
    let inp = document.createElement('input');
    document.getElementById('error').innerHTML = '';
    let div = document.getElementById('input');
    inp.type = "text";
    inp.classList.add('input');
    inp.placeholder = "Username"
    inp.id = 'username'
    
if(document.getElementById('signup').innerHTML =="Sign Up"){
    button.innerHTML = "Sign up";
    document.getElementById('start').innerHTML = "Do have an account?";
    document.getElementById('signup').innerHTML ="Login";
    document.getElementById('login').innerHTML = "Sign up";
    document.getElementById('check').style.display = "none";

    input[0].placeholder = "Email";

    div.appendChild(inp);
  
}else{
    Login();
}
}

function Login(){
    button.innerHTML = "Login";
    document.getElementById('start').innerHTML = "Don’t have an account?";
    document.getElementById('signup').innerHTML ="Sign Up";
    document.getElementById('login').innerHTML = "Login";
    document.getElementById('check').style.display = "flex";
   
    
    input[0].placeholder = "Email or Username";
    input[2].remove();
}

