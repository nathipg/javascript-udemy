import Component from "./Component.js";

class Tooltip extends Component {
  constructor(closeNotifierHandler, text, hostElementId) {
    super(hostElementId);
    this.closeNotifierHandler = closeNotifierHandler;
    this.text = text;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifierHandler();
  };

  create() {
    const tooltipEl = document.createElement('div');
    tooltipEl.className = 'card';
    const tooltipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector('p').textContent = this.text;
    tooltipEl.append(tooltipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    tooltipEl.style.position = 'absolute';
    tooltipEl.style.left = x + 'px';
    tooltipEl.style.top = y + 'px';

    tooltipEl.addEventListener('click', this.closeTooltip);
    this.element = tooltipEl;
    this.attach();
  }
}