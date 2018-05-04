import mobileMenu from './modules/mobile-menu';
import revealOnScroll from './modules/reveal-on-scroll';
import $ from "jquery";

var mobileNav = new mobileMenu();
new revealOnScroll($(".feature-item"), "85%");
new revealOnScroll($(".testimonial"), "60%");