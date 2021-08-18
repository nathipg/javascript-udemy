class Tooltip extends HTMLElement {
  constructor() {
    super();
    console.log('Tooltip');
  }
}

customElements.define('uc-tooltip', Tooltip);
