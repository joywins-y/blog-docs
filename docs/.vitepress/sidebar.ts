import main from "./sidebar/main";
import error from "./sidebar/error";
import browser from "./sidebar/browser";
import interview from "./sidebar/interview";
import algorithm from "./sidebar/algorithm";
import interviewReply from "./sidebar/interview-reply";

export default {
    "/": main,
    "/browser/": browser,
    "/reportError/": error,
    "/interview/": interview,
    "/algorithm/": algorithm,
    "/面试复盘/": interviewReply,
};
