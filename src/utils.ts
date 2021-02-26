import { URL } from "./constants";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchFromAPI = async (endPoint: string, opts?: RequestInit) => {
  const res = await Promise.all([
    sleep(200),
    fetch(URL + endPoint, {
      credentials: "include",
      ...opts,
      headers: {
        "Content-Type": "application/json",
        ...opts?.headers,
      },
    }),
  ]);
  return res[1];
};

export const getCookie = (cname: string): string => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
