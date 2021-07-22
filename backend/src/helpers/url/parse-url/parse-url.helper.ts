const parseURL = (url: string | undefined): URL => {
  if(url) {
    return new URL(url);
  }
  throw new TypeError(`Cannot parse non-url with type ${typeof url}`)
}
export { parseURL };
