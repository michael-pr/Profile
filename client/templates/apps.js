Template.apps.onRendered(function () {
  var swiper = new Swiper('.apps-container', {
    scrollbar: '.swiper-scrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true
  });
});
