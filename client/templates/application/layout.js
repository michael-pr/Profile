Template.layout.onRendered(function () {
  this.find("#main")._uihooks = {
    insertElement: function (node, next) {
      $(node).insertBefore(next).animate({
        left: -500
      }, 3000);
    },
    removeElement: function (node) {
      $(node).fadeOut(function() {
        $(this).remove();
      });
    }
  };
});
