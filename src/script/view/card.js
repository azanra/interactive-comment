import { attribute } from "./attribute.js";
import { element } from "./element.js";

export const card = (function () {
  const cardAttribute = attribute.card;
  const svgAttribute = attribute.svg;

  const createDom = (data) => {
    for (const key in cardAttribute) {
      const attribute = element.setUniqueId(cardAttribute[key], data.id);
      element.createDom(attribute, data);
    }
    for (const key in svgAttribute) {
      element.createSvgDom(svgAttribute[key], data.id);
    }
  };

  const renderCard = (data) => {
    for (const key in data) {
      createDom(data[key]);
    }
  };

  return { createDom, renderCard };
})();
