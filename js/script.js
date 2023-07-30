var mySwiper = new Swiper('.swiper', {
  loop: true, // 循环模式选项

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay:3000
  }

  // 如果需要滚动条

})

var right_disp=document.getElementsByClassName('right')[0];
right_disp.onmouseenter=()=>{
  mySwiper.autoplay.stop();
  console.log('enter')
}
right_disp.onmouseleave=()=>{
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
osa.onclick=()=>{
  osa.classList.add('a_selected');
  tva.classList.remove('a_selected');
  osc.classList.add('c_selected');
  tvc.classList.remove('c_selected');
}
tva.onclick=()=>{
  tva.classList.add('a_selected');
  osa.classList.remove('a_selected');
  tvc.classList.add('c_selected');
  osc.classList.remove('c_selected');
}

var bc2top=document.getElementsByClassName('bc2top');
// bc2top=bc2top.classList

window.onscroll = ()=>{
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    // bc2top.style.display = "block";
    for(
      let i=0;i<bc2top.length;++i
    ){
      bc2top[i].style.display="block";
      
    }
    
  } else {
    for(
      let i=0;i<bc2top.length;++i
    ){
      bc2top[i].style.display="none";
    
    }
  }
}

for(
  let i=0;i<bc2top.length;++i
){
  bc2top[i].onclick=()=>{
    let num = Math.max(document.body.scrollTop,document.documentElement.scrollTop) ;
    let ID = setInterval(() => {
      if(num > 0){
        num -= 40;
        num=Math.max(0,num);
        document.body.scrollTop=num;
        document.documentElement.scrollTop = num;
        console.log(num);
      }else{
        clearInterval(ID);
      } 
    }, 1);
  }
}

// bc2top.onclick=()=>{
//   let num = Math.max(document.body.scrollTop,document.documentElement.scrollTop) ;
//   let ID = setInterval(() => {
//     if(num > 0){
//       num -= 40;
//       num=Math.max(0,num);
//       document.body.scrollTop=num;
//       document.documentElement.scrollTop = num;
//       console.log(num);
//     }else{
//       clearInterval(ID);
//     } 
//   }, 1);
// }

