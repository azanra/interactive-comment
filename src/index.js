import "./style.css";
import renderData from "./script/view/renderData.js";
import sendComment from "./script/component/sendComment";
import dataContext from "./script/dataContext";
import deleteDialog from "./script/component/deleteDialog";

renderData.render(dataContext.comment.list);
sendComment.render();
deleteDialog.render();

console.log(dataContext);
