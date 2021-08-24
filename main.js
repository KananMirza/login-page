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



onload = () => {
    slider.style.backgroundImage = `url('img/${image[0]}.jpg')`;
    setInterval(Slider, 2500)
   
}

// See password:
i.onclick = () => {

    if (input[1].type == "password") {
        input[1].type = "text";
        i.classList.remove("fa-eye");
        i.classList.add('fa-eye-slash');

    } else {
        input[1].type = "password"
        i.classList.remove("fa-eye-slash");
        i.classList.add('fa-eye');
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
    let email = document.getElementById('email').value;
let pass =document.getElementById('password').value;
let username = document.getElementById('username').value;
    if(button.innerHTML == "Login"){
    for (let a = 0; a < user.email.length; a++) {
        if (input[0].value == user.email[a] || input[0].value == user.username[a]) {
            if (input[1].value == user.password[a]) {
                button.innerHTML = `<i class="fas fa-cog fa-spin"></i>`
                document.getElementById('error').innerHTML = '';
                setTimeout(Success, 1500);
                setTimeout(Send, 2250)
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
    user.email.push(email);
    user.password.push(pass);
    user.username.push(username);
    button.innerHTML = `<i class="fas fa-cog fa-spin"></i>`
   setTimeout(Success,1500)
   setTimeout(Login,2500)
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
    document.getElementById('error').innerHTML = '';
    let div = document.getElementById('input');
    inp.type = "text";
    inp.classList.add('input');
    inp.placeholder = "Username"
    inp.id = 'username'
    
if(document.getElementById('signup').innerHTML =="Get Started"){
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
    document.getElementById('signup').innerHTML ="Get Started";
    document.getElementById('login').innerHTML = "Login";
    document.getElementById('check').style.display = "inline-block";
    inp.style.display = "none"

    input[0].placeholder = "Email or Username";

}
