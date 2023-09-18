import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Используется библиотека Swiper
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  loop: true, // Повторение слайдов заного
  navigation: {
    // Стрелки для прокрутки
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    // Пагинация
    el: ".swiper-pagination",
    clickable: true,
  },
});

export default swiper;
