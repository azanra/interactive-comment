import "./style.css";
import { initialData } from "./script/model/data.js";
import Comment from "./script/model/comment.js";
import Replies from "./script/model/replies.js";
import List from "./script/model/list.js";

const loadInitialData = (function () {
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

loadInitialData.initializeData(initialData);
const data = loadInitialData.list;
console.log(data);

data.setUpvote(1);
data.addReply(1, data.list[4]);
console.log(data.returnDate(1));
data.setScore(1);
console.log(data.list[1]);
