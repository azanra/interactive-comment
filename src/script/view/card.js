import { attribute } from "./attribute.js";
import { element } from "./element.js";

export const card = (function () {
  const cardAttribute = attribute.card;
  const svgAttribute = attribute.svg;

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

  return { createDom, renderCard, replyInputDom };
})();
