export function goto(path) {
  return () => {
    history.pushState({}, '', path)
    window.dispatchEvent(new Event('popstate'))
  }
}
