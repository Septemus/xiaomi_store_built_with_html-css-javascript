
import mySwiper from "./swiper_function.js";
var right_disp = document.getElementsByClassName('right')[0];
right_disp.onmouseenter = () => {
  mySwiper.autoplay.stop();
  console.log('enter')
}
right_disp.onmouseleave = () => {
  mySwiper.autoplay.start();
  console.log('leave')
}
var wa = document.getElementById('wearing_a');
var ea = document.getElementById('earphone_a');
var wc = document.getElementsByClassName('wearing_container')[0];
var ec = document.getElementsByClassName('earphone_container')[0];
var osa = document.getElementById('onsale_a');
var tva = document.getElementById('tv_a');
var osc = document.getElementsByClassName('onsale_container')[0];
var tvc = document.getElementsByClassName('tv_container')[0];
ea.onclick = () => {
  ea.classList.add('a_selected');
  wa.classList.remove('a_selected');
  ec.classList.add('c_selected');
  wc.classList.remove('c_selected');

}
wa.onclick = () => {
  wa.classList.add('a_selected');
  ea.classList.remove('a_selected');
  wc.classList.add('c_selected');
  ec.classList.remove('c_selected');
}
osa.onclick = () => {
  osa.classList.add('a_selected');
  tva.classList.remove('a_selected');
  osc.classList.add('c_selected');
  tvc.classList.remove('c_selected');
}
tva.onclick = () => {
  tva.classList.add('a_selected');
  osa.classList.remove('a_selected');
  tvc.classList.add('c_selected');
  osc.classList.remove('c_selected');
}



import "./bc2top_function.js"



