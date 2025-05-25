import "./style.css";
import img from "./asset/resource/img.png";
import { initialData } from "./script/model/data.js";
import Comment from "./script/model/comment.js";
import Replies from "./script/model/replies.js";
import List from "./script/model/list.js";

console.log("Hello world!");
const paraElement = document.querySelector("p");
const imgElement = document.createElement("img");
imgElement.src = img;
paraElement.appendChild(imgElement);

const loadData = (function () {
  const list = new List();
  const initializeData = (data) => {
    data.comments.map((item) => {
      if (item.type === "comment") {
        const comment = new Comment(item);
        list.addData(comment);
      } else if (item.type === "replies") {
        const replies = new Replies(item);
        list.addData(replies);
      }
    });
  };
  return { list, initializeData };
})();

loadData.initializeData(initialData);
const data = loadData.list;
console.log(data);
