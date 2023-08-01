import browser from "./sidebar/browser";
import main from "./sidebar/main";
import error from "./sidebar/error";

export default {
  "/": main,
  "/browser/": browser,
  "/reportError/": error,
};
