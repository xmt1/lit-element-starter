import { LitElement, html, css } from 'lit-element';

// Shared Styles import if your component is inheriting any styles
//import { SharedStyles } from '../styles/shared-styles.js';

class AppNav extends LitElement {

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
      `
    ];
  }

  render() {
    return html`
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/another">Another View</a></li>
        </ul>
      </nav>
    `;
  }

  constructor() {
    super();
    this.exampleProp = this.tagName.toLowerCase();
  }

  
}

customElements.define('app-nav', AppNav);