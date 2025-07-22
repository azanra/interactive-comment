import { initialData } from "./model/data";
import identifier from "./model/id";
import { localData } from "./model/localStorage";

const dataContext = (function () {
  const comment = localData.loadData();
  const currentUser = initialData.currentUser;
  const lastId = identifier(comment.list);

  return { comment, currentUser, lastId };
})();

export default dataContext;
