import main from "./sidebar/main";
import error from "./sidebar/error";
import browser from "./sidebar/browser";
import interview from "./sidebar/interview";
import algorithm from "./sidebar/algorithm";

export default {
    "/": main,
    "/browser/": browser,
    "/reportError/": error,
    "/interview/": interview,
    "/algorithm/": algorithm,
};
