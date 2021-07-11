var value= document.getElementsByTagName("h1")[0].innerHTML;
const next= document.querySelector('#nextCount');
const prev = document.querySelector('#prevCount');

next.addEventListener('click', () => {
    if(value<50){
    value++;
    document.getElementsByTagName("h1")[0].innerHTML=value; 
    }
});

prev.addEventListener('click', () => {
    if(value>0){
    value--;
    document.getElementsByTagName("h1")[0].innerHTML=value;
    }
});
