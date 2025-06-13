import { attribute } from "./attribute.js";
import { element } from "./element.js";

export const card = (function () {
  const cardAttribute = attribute.card;
  const svgAttribute = attribute.svg;
  const replyAttribute = attribute.reply;

  const createDom = (data) => {
    commentDom(data);
    repliesDom(data);
  };

  const commentDom = (data) => {
    if (data.type === "comment") {
      for (const key in cardAttribute) {
        let attribute = element.setUniqueId(cardAttribute[key], data.id);
        attribute = element.appendReferenceParent(attribute);
        element.createDom(attribute, data);
      }
      svgDom(data);
    }
  };

  const repliesDom = (data) => {
    if (data.type === "replies") {
      for (const key in cardAttribute) {
        let attribute = element.setUniqueId(cardAttribute[key], data.id);
        attribute = changeRepliesParent(attribute);
        attribute = element.appendReferenceParent(attribute);
        element.createDom(attribute, data);
      }
      svgDom(data);
    }
  };

  const changeRepliesParent = (attribute) => {
    if (attribute.elementAttribute.class === "commentContent") {
      const newParentAttribute = JSON.parse(JSON.stringify(attribute));
      newParentAttribute.parentElement = "#commentContent";
      newParentAttribute.uniqueParent = true;
      newParentAttribute.withParentId = true;
      return newParentAttribute;
    } else {
      return attribute;
    }
  };

  const svgDom = (data) => {
    for (const key in svgAttribute) {
      let attribute = JSON.parse(JSON.stringify(svgAttribute[key]));
      attribute = element.appendReferenceParent(attribute);
      element.createSvgDom(attribute, data);
    }
  };

  const renderCard = (data) => {
    for (const key in data) {
      createDom(data[key]);
    }
  };

  const replyInputDom = (activeUser, parentData) => {
    for (const key in replyAttribute) {
      let attribute = element.setUniqueId(replyAttribute[key], activeUser.id);
      attribute = changeReplyInputParent(attribute);
      attribute = element.appendReferenceParent(attribute);
      parentData = appendParentToComment(attribute, parentData);
      parentData.id = activeUser.id;
      element.createDom(attribute, parentData);
    }
  };

  const changeReplyInputParent = (attribute) => {
    if (attribute.elementAttribute.class === "replyContainer") {
      let newParentAttribute = JSON.parse(JSON.stringify(attribute));
      newParentAttribute.withParentId = true;
      //because the parent id is used to reference the parent
      return newParentAttribute;
    } else {
      return attribute;
    }
  };

  const appendParentToComment = (attribute, data) => {
    if (attribute?.withParentId === true) {
      let dataWithParent = JSON.parse(JSON.stringify(data));
      dataWithParent.parent = data.id;
      //it will have parent of the parent data and id of the active user
      return dataWithParent;
    } else {
      return data;
    }
  };

  return { createDom, renderCard, replyInputDom };
})();
