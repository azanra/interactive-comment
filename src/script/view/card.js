import { attribute } from "./attribute.js";
import { element } from "./element.js";

export const card = (function () {
  const cardAttribute = attribute.card;
  const svgAttribute = attribute.svg;

  const createDom = (data) => {
    commendDom(data);
  };

  const commendDom = (data) => {
    if (data.type === "comment") {
      for (const key in cardAttribute) {
        const attribute = element.setUniqueId(cardAttribute[key], data.id);
        element.createDom(attribute, data);
      }
      svgDom(data);
    }
  };

  const svgDom = (data) => {
    for (const key in svgAttribute) {
      element.createSvgDom(svgAttribute[key], data);
    }
  };

  const renderCard = (data) => {
    for (const key in data) {
      createDom(data[key]);
    }
  };

  return { createDom, renderCard };
})();
