import "./style.css";
import { initialData } from "./script/model/data.js";
import renderData from "./script/view/renderData.js";
import sendComment from "./script/component/sendComment";

const comments = initialData.comments;
const currentUser = initialData.currentUser;
renderData.render(comments);
sendComment.render(currentUser);
