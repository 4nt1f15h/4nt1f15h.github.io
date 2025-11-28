import { LitElement, html } from 'https://esm.run/lit'

export class Home extends LitElement {
  createRenderRoot() { return this }
  render() {
    return html`
      <main>
        <h1>Welcome to Anti Phish!</h1>
        <a href="/about">about</a>
      </main>
    `
  }
}
customElements.define('af-home', Home)
