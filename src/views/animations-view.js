import { LitElement, html, css } from 'lit-element';
import '../components/app-menu.js';
import '../components/app-map.js';

// Shared Styles import if your component is inheriting any styles
//import { SharedStyles } from '../styles/shared-styles.js';

class AnimationsView extends LitElement {

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
          justify-content: space-between;
        }

        app-menu {
          flex: 1;
        }
      `
    ];
  }

  render() {
    return html`
      <h1>Animations View</h1>
      <div>
        <app-menu></app-menu>
        <app-map></app-map>
      </div>
    `;
  }

  constructor() {
    super();
    this.exampleProp = this.tagName.toLowerCase();
  }

  
}

customElements.define('animations-view', AnimationsView);