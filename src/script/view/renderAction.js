import { activeUser, data } from "../mainData.js";
import { attribute } from "./attribute.js";
import { element } from "./element.js";

export const renderAction = (function () {
  let listData = [];

  const getActiveUserListData = () => {
    const localData = data.list;
    for (const key in localData) {
      if (localData[key].user.username === activeUser.username) {
        listData.push(localData[key]);
      }
    }
    console.log(listData);
  };

  const renderDom = (project) => {
    const attr = attribute.activeUser.dom;
    for (const key in attr) {
      let uniqueAttr = element.setUniqueId(attr[key], project.id);
      uniqueAttr = element.appendReferenceParent(uniqueAttr);
      element.createDom(uniqueAttr, project);
    }
    renderSvgDom(project);
  };

  const renderSvgDom = (project) => {
    const svg = attribute.activeUser.svg;
    for (const key in svg) {
      let attr = JSON.parse(JSON.stringify(svg[key]));
      attr = element.appendReferenceParent(attr);
      element.createSvgDom(attr, project);
    }
  };
  return { getActiveUserListData, renderDom };
})();
