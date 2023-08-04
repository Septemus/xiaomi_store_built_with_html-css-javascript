// import {Swiper} from "swiper"
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
export default mySwiper