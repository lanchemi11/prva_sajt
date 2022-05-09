
window.addEventListener('load', init);

var meni = document.getElementById('hamburger_meni');
var header_top = document.getElementById('header_top');
var navigacioni_meni = document.getElementById('navigacioni_meni');
function init()
{
    console.log('ucitano');
    meni.addEventListener('click', funkcija);
}

var brojac = 0;
function funkcija()
{
    console.log('kliknuto');
    if(brojac % 2 == 0){
        header_top.style.display = 'block';
        navigacioni_meni.style.display = 'flex';
    }   
    else{
        header_top.style.display = 'none';
        navigacioni_meni.style.display = 'none';
    }
    brojac++;
}