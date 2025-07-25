import "./style.css";
import renderData from "./script/view/renderData.js";
import sendComment from "./script/component/sendComment";
import dataContext from "./script/dataContext";

renderData.render(dataContext.comment.list);
sendComment.render();
console.log(dataContext);
