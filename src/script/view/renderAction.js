import { activeUser, data } from "../mainData.js";

export const renderAction = (function () {
  let listData = [];

  const getActiveUserListData = () => {
    const localData = data.list;
    for (const key in localData) {
      if (localData[key].user.username === activeUser.username) {
        listData.push(localData[key]);
      }
    }
  };

  return { getActiveUserListData };
})();
