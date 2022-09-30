const ToggleButton = document.getElementById('Toggle-Button');
const ToggleButton1 = document.getElementById('Toggle-Button1');
const ToggleButton2 = document.getElementById('Toggle-Button2');
const Middle = document.getElementById('middle');

ToggleButton1.addEventListener('click',()=>{
    Middle.style.display='block';
    Middle.style.marginTop='25rem';
    Middle.style.height='90vh';
    ToggleButton1.style.display='none';
    ToggleButton2.style.display = 'block';
})
ToggleButton2.addEventListener('click',()=>{
    Middle.style.display='none';
    ToggleButton1.style.display='block';
    ToggleButton2.style.display = 'none';
    Middle.style.marginTop='-25rem';
})