let user = {
    email:['kanan@gmail.com','ulvi@gmail.com','teymur@gmail.com','eyyub@gmail.com'],
    password:['12345','ulvi123','teymur_33','yuptech001']
}



let input=document.getElementsByTagName('input');
let i =document.getElementsByTagName("i")[0];
let slider = document.getElementById('slider');
let image = ['0','1','2']
let j = 0;
let button = document.getElementById('submit')

onload = ()=>{
    slider.style.backgroundImage = `url('img/${image[0]}.jpg')`;
    setInterval(Slider,2500)
}

// See password:
i.onclick = () =>{
    if(input[1].type == "password"){
        input[1].type="text";
        i.classList.remove("fa-eye");
        i.classList.add('fa-eye-slash');
      
    }else{
        input[1].type = "password"
        i.classList.remove("fa-eye-slash");
        i.classList.add('fa-eye');
       
    }
}
// Slider
function Slider(){

    if(j==2){
        j=0;
        slider.style.backgroundImage = `url('img/${image[j]}.jpg')`;
        document.getElementById(j+2).style.backgroundColor = "gray";
        document.getElementById(j).style.backgroundColor = "white";
    }else{
        j++;
        slider.style.backgroundImage = `url('img/${image[j]}.jpg')`;
        document.getElementById(j).style.backgroundColor = "white";
        document.getElementById(j-1).style.backgroundColor = "gray";

        
    }

}

//Login

button.onclick = () =>{
    
    for(let a=0;a<5;a++){
        if(input[0].value == user.email[a]){
        if(input[1].value == user.password[a]){
            button.innerHTML = `<i class="fas fa-cog fa-spin"></i>`
            setTimeout(Success,1500)
        }else{
            console.log('Email or password wrong')
        }
    }else{
        console.log('Yanlis')
    }

}
}

function Success(){
    alert("Giris")
}