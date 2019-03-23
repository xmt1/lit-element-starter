import { LitElement, html, css } from 'lit-element';

// Shared Styles import if your component is inheriting any styles
//import { SharedStyles } from '../styles/shared-styles.js';

class AppMap extends LitElement {

  static get properties() {
    return {
      exampleProp: { type: String },
      contentDiv: { type: Object },
      mapDiv: { type: Object }
    };
  }

  /* If you're using a styles getter, 'css' must be extended from 'lit-element' */
  static get styles() {
    return [
      //SharedStyles,
      css`
        :host {
          display: block;
          border: 2px solid red;
          width: 600px;
          height: 300px;
          position: relative;
          overflow: hidden;
        }

        .map, .content {
          padding: 8px;
        }

        .content {
          position: absolute;
          z-index: 5;
          background-color: #fff;
          top: 0;
          left: 0;
          width: 100%;
          margin-left: 100%;
          pointer-events: none;
          opacity: 0;
          transition: margin .8s, opacity .5s;
        }

        .show-content {
          margin-left: 0;
          opacity: 1;
          pointer-events: auto;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="map">
        <h1>Map goes here</h1>
        <button @click="${this.onEnhanceClick}">Enhance</button>
      </div>
      <div class="content">
        <h3>Content</h3>
        <p>I animate into view</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur aliquam assumenda at obcaecati, alias repudiandae perspiciatis. Doloremque, delectus ex.</p>
        <button @click="${this.onBackClick}">Back</button>
      </div>
    `;
  }

  constructor() {
    super();
    window.addEventListener('menu-btn-clicked', (e) => {
      this.onEnhanceClick();
    });
  }

  firstUpdated() {
    this.mapDiv = this.shadowRoot.querySelector('.map');
    this.contentDiv = this.shadowRoot.querySelector('.content');
  }

  onEnhanceClick() {
    this.contentDiv.classList.add('show-content');
  }

  onBackClick() {
    this.contentDiv.classList.remove('show-content');
  }

  
}

customElements.define('app-map', AppMap);