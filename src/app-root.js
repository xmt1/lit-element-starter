import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js';
import { SharedStyles } from './styles/shared-styles.js';

import './components/app-nav.js';



class AppRoot extends LitElement {
  static get properties() {
    return {
      _page: { type: String },
      exampleProp: { type: String },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }
        main {
          margin: 24px 0;
        }
        .page {
          display: none;
        }
        .page[active] {
          display: block;
        }
      `
    ];
  }

  render() {
    return html`
      <app-nav></app-nav>
      <main class="container">
        <home-view class="page" ?active="${this._page === ''}"></home-view>
        <another-view class="page" ?active="${this._page === 'another'}"></another-view>
        <app-404-view class="page" ?active="${this._page === '404'}"></app-404-view>
      </main>
      <footer>
        temp footer
      </footer>
    `;
  }
  

  constructor() {
    super();
    this.exampleProp = this.tagName.toLowerCase();
  }

  firstUpdated() {
    installRouter((location) => this._locationChanged(location));
  }

  _locationChanged(location) {
    const path = window.decodeURIComponent(location.pathname);
    const page = path === '/' ? '' : path.slice(1);
    this._loadPage(page);
  }

  _loadPage(page) {
    switch(page) {
      case '':
        import('./views/home-view.js').then((module) => {
          // Put code in here that you want to run every time this view loads
        });
        break;
      case 'another':
        import('./views/another-view.js').then((module) => {
          // Put code in here that you want to run every time this view loads
        });
        break;
      default:
        page = '404';
        import('./views/app-404-view.js');
    }

    this._page = page;
  }

  
}

window.customElements.define('app-root', AppRoot);