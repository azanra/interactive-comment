export const element = (function () {
  const createDom = (attribute) => {
    const parentElement = document.querySelector(attribute.parentElement);
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

  return { createDom, setMultipleAttr, setTextContent, setUniqueId };
})();
