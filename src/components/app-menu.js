import { LitElement, html, css } from 'lit-element';

// Shared Styles import if your component is inheriting any styles
//import { SharedStyles } from '../styles/shared-styles.js';

class AppMenu extends LitElement {

  static get properties() {
    return {
      exampleProp: { type: String },
    };
  }

  /* If you're using a styles getter, 'css' must be extended from 'lit-element' */
  static get styles() {
    return [
      //SharedStyles,
      css`
        :host {
          display: block;
        }
        div {
          display: flex;
          flex-direction: column;
          border: 2px solid indigo;
          height: 100%;
        }

        button {
          margin-bottom: 10px;
        }
      `
    ];
  }

  render() {
    return html`
      <div>
        <button @click="${this.onMenuBtnClick}">Lorem</button>
        <button @click="${this.onMenuBtnClick}">Ipsum</button>
        <button @click="${this.onMenuBtnClick}">Dolor</button>
      </div>
    `;
  }

  constructor() {
    super();
    this.exampleProp = this.tagName.toLowerCase();
  }
  

  onMenuBtnClick() {
    this.dispatchEvent(new CustomEvent('menu-btn-clicked', {
      bubbles: true,
      composed: true
    }));
  }

  
}

customElements.define('app-menu', AppMenu);