function imgSlider(img){
    document.querySelector('.starbucks').src='src/'+img+'.png';
}

function changeCircleColor(color){
    const circle=document.querySelector('.circle');
    circle.style.background=color;
}