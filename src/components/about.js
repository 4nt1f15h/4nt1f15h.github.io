import { LitElement, html } from 'https://esm.run/lit'
import { goto } from '../goto.js'

export class About extends LitElement {
  createRenderRoot() { return this }
  render() {
    return html`
      <main>
        <h1>About</h1>
        <button @click=${goto('/')}>home</button>
      </main>
    `
  }
}
customElements.define('af-about', About)
