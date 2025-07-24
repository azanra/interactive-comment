import Comment from "./comment.js";
import { initialData } from "./data.js";
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
      initalizeData(list, listData);
      return list;
    } else {
      const listData = initialData.comments;
      initalizeData(list, listData);
      storeData(list);
      return list;
    }
  };

  const initalizeData = (list, data) => {
    for (const key in data) {
      if (data[key].type === "comment") {
        const comment = new Comment(data[key]);
        list.addData(comment);
      } else if (data[key].type === "replies") {
        const replies = new Replies(data[key]);
        list.addData(replies);
      }
    }
  };

  return { storeData, loadData };
})();
