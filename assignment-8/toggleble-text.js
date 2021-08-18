class TogglebleText extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open',
    });

    this.shadowRoot.innerHTML = `
      <style>
        p {
          display: block;
        }

        p[show="false"] {
          display: none;
        }
      </style>
      <button></button>
      <p><slot>Dummy text</slot></p>
    `;

    this._p = this.shadowRoot.querySelector('p');
    this._button = this.shadowRoot.querySelector('button');
    this._show = 'false';
  }

  connectedCallback() {
    if (this.hasAttribute('show')) {
      this._show = this.getAttribute('show');
    }

    this._button.addEventListener('click', this._toggleText.bind(this));
    this._updateElements();
  }

  _toggleText() {
    this._show = this._show === 'true' ? 'false' : 'true';
    this._updateElements();
  }

  _updateElements() {
    this._button.textContent = this._show === 'true' ? 'Hide' : 'Show';
    this._p.setAttribute('show', this._show);
  }
}

customElements.define('np-toggleble-text', TogglebleText);
