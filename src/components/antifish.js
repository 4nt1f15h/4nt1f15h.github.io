import { LitElement, html } from 'https://esm.run/lit'
import { Router } from 'https://esm.run/@lit-labs/router'
import './home.js'
import './about.js'

export class AntiFish extends LitElement {
  constructor() {
    super()
    this.router = new Router(this, [
      { path: '/', render: () => html`<af-home></af-home>` },
      { path: '/about', render: () => html`<af-about></af-about>` },
    ])
  }
  render() {
    return html`${this.router.outlet()}`
  }
}

customElements.define('anti-fish', AntiFish)
