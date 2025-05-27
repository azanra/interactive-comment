import Comment from "./comment.js";
import List from "./list.js";
import Replies from "./replies.js";

export const localData = (function () {
  const list = new List();

  const storeData = (data) => {
    localStorage.setItem("list", JSON.stringify(data));
  };

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem("list"));
    if (data) {
      const listData = data.list;
      for (const key in listData) {
        if (listData[key].type === "comment") {
          const comment = new Comment(listData[key]);
          list.addData(comment);
        } else if (listData[key].type === "replies") {
          const replies = new Replies(listData[key]);
          list.addData(replies);
        }
      }
      return list;
    }
  };

  return { storeData, loadData };
})();
