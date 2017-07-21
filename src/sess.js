export default {
  get(name) {
    let value = sessionStorage.getItem(name);
    if (/^\{.*\}$/.test(value)) {
      value = JSON.parse(value);
    }
    return value;
  },
  set(name, value) {
    let v = value;
    if (typeof v === typeof {}) {
      v = JSON.stringify(v);
    }
    return sessionStorage.setItem(name, v);
  },
  remove(name) {
    return sessionStorage.removeItem(name);
  },
};
