import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "../image/image1.png";
const menu = [img, "Slide 2", "Slide 3"];
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

export default swiper;
