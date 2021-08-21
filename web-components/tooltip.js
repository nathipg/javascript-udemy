class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipIcon;
    this._tooltipContainer;
    this._tooltipVisible = false;
    this._tooltipText = 'Some dummy tooltip text';
    this.attachShadow({
      mode: 'open',
    });
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: black;
          border-radius: 3px;
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.26);
          color: white;
          padding: 0.15rem;
          position: absolute;
          top: 1.5rem;
          right: 0;
          z-index: 10;
        }

        :host(.important) {
          background: var(--color-primary, #ccc);
          padding: 0.15rem;
        }

        :host-context(p) {
          font-weight: bold;
        }

        ::slotted(.highlight) {
          border-bottom: 1px dotted red;
        }

        .icon {
          background: black;
          border-radius: 50%;
          color: white;
          font-weight: normal!important;
          padding: 0.15rem 0.5rem;
          text-align: center;
        }
      </style>
      <slot>Some default</slot>
      <span class="icon">?</span>
    `;
  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }

    this._tooltipIcon = this.shadowRoot.querySelector('span');

    this._tooltipIcon.addEventListener(
      'mouseenter',
      this._showTooltip.bind(this)
    );
    this._tooltipIcon.addEventListener(
      'mouseleave',
      this._hideTooltip.bind(this)
    );

    this.style.position = 'relative';

    this._render();
  }

  disconnectedCallback() {
    this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip); // Does nothing, because we attach the event using bind (bind creates other functions)
    this._tooltipIcon.removeEventListener('mouseleave', this._hideTooltip); // Does nothing, because we attach the event using bind (bind creates other functions)
  }

  _render() {
    if (this._tooltipVisible) {
      this._tooltipContainer = document.createElement('div');
      this._tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(this._tooltipContainer);
    } else {
      if(this._tooltipContainer) {
        this.shadowRoot.removeChild(this._tooltipContainer);
      }
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    if (name === 'text') {
      this._tooltipText = newValue;
    }
  }

  static get observedAttributes() {
    return ['text'];
  }

  _showTooltip() {
    this._tooltipVisible = true;
    this._render();
  }

  _hideTooltip() {
    this._tooltipVisible = false;
    this._render();
  }
}

customElements.define('uc-tooltip', Tooltip);
