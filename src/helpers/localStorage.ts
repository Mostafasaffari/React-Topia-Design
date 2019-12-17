type LocalStorageType = "local" | "session" | "index" | "cookie";

interface IStorage {
  get: (name: string) => string | null;
  set: (name: string, value: string) => void;
}
const Storage = (type: LocalStorageType = "local"): IStorage => {
  return {
    get: (name: string) => {
      switch (type) {
        case "local":
          return localStorage.getItem(name);
        case "cookie":
          return getCookie(name);
        case "session":
          return null; //TODO: implement later
        case "index":
          return null; //TODO: implement later
        default:
          throw Error("Storage type not found");
      }
    },
    set: (name: string, value: string) => {
      switch (type) {
        case "local":
          localStorage.setItem(name, value);
          break;
        case "cookie":
          setCookie(name, value);
          break;
        case "session":
          break; //TODO: implement later
        case "index":
          break; //TODO: implement later
        default:
          throw Error("Storage type not found");
      }
    }
  };
};

export default Storage;

const setCookie = (cookieName: string, cookieValue: string, exdays = 10) => {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = `${cookieName}=${cookieValue};${expires};path=/;`;
};

const getCookie = (cookieName: string) => {
  var name = cookieName + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const clearCookie = (cookieName: string) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export { clearCookie };
