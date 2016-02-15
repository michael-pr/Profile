var resumeLoaded = new ReactiveVar();

Template.resume.onRendered(function () {
  var url = "/assets/resume.pdf";

  PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js'
  PDFJS.getDocument(url).then(function (pdf) {
    pdf.getPage(1).then(function (page) {
      var scale = 2;
      var viewport = page.getViewport(scale);

      var canvas = document.getElementById("resumepdf");
      var context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      //console.log(viewport.width);

      page.render({
        canvasContext: context,
        viewport: viewport
      }).promise.then(function () {
        console.log("Resume loaded");
        initSwiper();
      });
    });
  });

  // Code for standard resume
  /*resumeLoaded.set(false);

  $("#resume-frame").load(function () {
    resumeLoaded.set(true);
  });*/
});

Template.resume.helpers({


  // Code for standard resume
  /*showLoading: function () {
    return !resumeLoaded.get();
  }*/
});

var initSwiper = function () {
  new Swiper('.swiper-container', {
    scrollbar: '.swiper-scrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true
  });
};
