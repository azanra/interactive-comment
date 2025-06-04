export const element = (function () {
  const createDom = (attribute, data) => {
    const parentElement = referenceElement(attribute, data.id);
    const newElement = document.createElement(attribute.newElement);
    createImg(attribute, data.user.image.png);
    populateUniqueText(attribute, data);
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
      const copyAttribute = JSON.parse(JSON.stringify(attribute));
      copyAttribute.elementAttribute.id = `${copyAttribute.elementAttribute.class}-${id}`;
      return copyAttribute;
    }
  };

  const referenceElement = (attribute, id) => {
    if (attribute.uniqueParent === true && id) {
      return document.querySelector(`${attribute.parentElement}-${id}`);
    } else {
      return document.querySelector(attribute.parentElement);
    }
  };

  const createSvgDom = (attribute, id) => {
    const parentElement = referenceElement(attribute, id);
    const svg = attribute.svg;
    const svgElement = document.createElementNS(svg.uri, svg.name);
    setMultipleAttr(svgElement, svg.elementAttribute);
    svgElement.setAttributeNS(
      svg.xmlnsAttribute.nameSpace,
      svg.xmlnsAttribute.name,
      svg.xmlnsAttribute.value
    );
    const pathElement = document.createElementNS(svg.path.uri, svg.path.name);
    setMultipleAttr(pathElement, svg.path.elementAttribute);
    svgElement.append(pathElement);
    parentElement.append(svgElement);
  };

  const createImg = (attribute, src) => {
    if (attribute.hasOwnProperty("isImage")) {
      attribute.elementAttribute.src = src;
    }
  };

  const populateUniqueText = (attribute, data) => {
    if (attribute.hasOwnProperty("dataText")) {
      attribute.textContent = data[attribute.dataText];
    }
  };

  return {
    createDom,
    setMultipleAttr,
    setTextContent,
    setUniqueId,
    createSvgDom,
  };
})();
