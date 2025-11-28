import { LitElement, html } from 'https://esm.run/lit'
import { Router } from 'https://esm.run/@lit-labs/router'
import './home.js'
import './about.js'

export class AntiFish extends LitElement {
  constructor() {
    super()

    const params = new URLSearchParams(window.location.search)
    const spaPath = params.get('path')
    if (spaPath) {
      window.history.replaceState({}, '', spaPath)
    }

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
