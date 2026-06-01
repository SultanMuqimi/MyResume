export async function register() {
  const g = global as typeof global & { localStorage?: Storage };
  if (typeof g.localStorage === "undefined" || typeof g.localStorage?.getItem !== "function") {
    const _data: Record<string, string> = {};
    g.localStorage = {
      getItem: (key) => _data[key] ?? null,
      setItem: (key, val) => { _data[key] = String(val); },
      removeItem: (key) => { delete _data[key]; },
      clear: () => { Object.keys(_data).forEach((k) => delete _data[k]); },
      key: (i) => Object.keys(_data)[i] ?? null,
      get length() { return Object.keys(_data).length; },
    };
  }
}
