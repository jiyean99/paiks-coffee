class MaskSVG {
  constructor(obj) {
    this.el = document.body.querySelector('#svg-mask');
    this.rect = document.body.querySelectorAll('.svg-mask--rect');
    this.circle = document.body.querySelectorAll('.svg-mask--circle');
    this.clicked = false;
    this.init();
  }

  init() {
    this.handleResize();
    this.binds();
    this.events();
  }

  binds() {
    this.handleResize = this.handleResize.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  events() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('mousemove', this.handleMouse);
    window.addEventListener('touchmove', this.handleMouse);
    window.addEventListener('click', this.handleClick);
  }

  handleMouse(e) {
    gsap.to(this.circle, {
      duration: .7,
      cx: e.clientX || e.touches[0].clientX,
      cy: e.clientY || e.touches[0].clientY,
      ease: 'power2.out' });

  }

  handleResize() {
    this.minRadius = window.innerWidth * 0.1;
    this.maxRadius = window.innerWidth * 1.1;
    gsap.set([this.el, this.rect], {
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px` });

    gsap.set(this.circle, {
      r: `${this.minRadius}px` });

  }

  handleClick() {
    this.clicked = !this.clicked;
    gsap.to(this.circle, {
      duration: 1,
      r: this.clicked ? this.maxRadius : this.minRadius,
      ease: 'power3.inOut' });

  }}


new MaskSVG();