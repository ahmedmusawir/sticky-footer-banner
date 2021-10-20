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
    this.window.on('scroll', this.scrollHandler);
  };

  scrollHandler = () => {
    // console.log('CPF 3: Public side scroll...!');
    let lastScrollTop = 0;
    let st = this.window.scrollTop();
    // console.log('scrollTop', st);

    if (st > lastScrollTop) {
      console.log('going down...');
      this.bottomFooter.css('display', 'block');
    } else {
      console.log('going up...');
      this.bottomFooter.css('display', 'none');
    }

    lastScrollTop = st;
  };
}

export default FooterScrollMovement;
