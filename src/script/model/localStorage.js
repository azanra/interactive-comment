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
    } else {
      const initializeData = loadInitialData.initializeData(initialData);
      storeData(initializeData);
      return initializeData;
    }
  };

  return { storeData, loadData };
})();

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
    return list;
  };

  return { initializeData };
})();
