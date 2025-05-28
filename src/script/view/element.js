import { attribute } from "./attribute";

export const element = (function () {
  const createDom = (attribute, id) => {
    const parentElement = referenceElement(attribute, id);
    const newElement = document.createElement(attribute.newElement);
    setMultipleAttr(newElement, attribute.elementAttribute);
    setTextContent(newElement, attribute.textContent);
    parentElement.append(newElement);
  };

  const setMultipleAttr = (element, attribute) => {
    for (const key in attribute) {
      element.setAttribute(key, attribute[key]);
    }
  };

  const setTextContent = (element, elementTextContent) => {
    if (elementTextContent) {
      element.textContent = elementTextContent;
    }
  };

  const setUniqueId = (attribute, id) => {
    if (attribute.uniqueElement === true) {
      attribute.elementAttribute.id = `${attribute.elementAttribute.class}-${id}`;
    }
  };

  const referenceElement = (attribute, id) => {
    if (attribute.uniqueParent === true && id) {
      return document.querySelector(`${attribute.parentElement}-${id}`);
    } else {
      return document.querySelector(attribute.parentElement);
    }
  };

  return { createDom, setMultipleAttr, setTextContent, setUniqueId };
})();
