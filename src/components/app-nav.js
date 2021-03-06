import { LitElement, html, css } from 'lit-element';

// Shared Styles import if your component is inheriting any styles
//import { SharedStyles } from '../styles/shared-styles.js';

class AppNav extends LitElement {

  static get properties() {
    return {};
  }

  /* If you're using a styles getter, 'css' must be extended from 'lit-element' */
  static get styles() {
    return [
      //SharedStyles,
      css`
        :host {
          display: block;
        }
        nav {
          padding: 16px;
        }
        a {
          margin-right: 24px;
        }
      `
    ];
  }

  render() {
    return html`
      <nav>
        <div>
          <a href="/">Home</a>
          <a href="/another">Another View</a>
          <a href="/animations">Animations Experiment</a>
        </div>
      </nav>
    `;
  }

  constructor() {
    super();
    this.exampleProp = this.tagName.toLowerCase();
  }

  
}

customElements.define('app-nav', AppNav);