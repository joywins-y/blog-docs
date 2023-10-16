import main from "./sidebar/main";
import error from "./sidebar/error";
import browser from "./sidebar/browser";
import interview from "./sidebar/interview";

export default {
    "/": main,
    "/browser/": browser,
    "/reportError/": error,
    "/interview/": interview,
};
