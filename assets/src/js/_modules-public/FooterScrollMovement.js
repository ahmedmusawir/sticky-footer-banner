import $ from 'jquery';

class FooterScrollMovement {
  constructor() {
    this.init();
    // this.lastScrollTop = 0;
    // COLLECTING ELEMENTS
    this.bottomFooter = $('.CPF-FIXED-FOOTER');
    this.window = $(window);
    this.setEvents();
  }

  init = () => {
    // console.log('Footer Scroll Movement in Action  ...');
  };

  setEvents = () => {
    this.window.on('mousewheel', this.scrollHandler);
  };

  scrollHandler = (e) => {
    // console.log(e.originalEvent.wheelDelta);
    if (e.originalEvent.wheelDelta >= 0) {
      this.bottomFooter.slideUp();
      // console.log('Scroll up');
    } else {
      this.bottomFooter.slideDown();
      // console.log('Scroll down');
    }
  };
}

export default FooterScrollMovement;
