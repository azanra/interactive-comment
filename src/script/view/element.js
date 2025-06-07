export const element = (function () {
  const createDom = (attribute, data) => {
    const parentElement = referenceElement(attribute, data);
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

  const referenceElement = (attribute, data) => {
    if (attribute.uniqueParent && data.type === "replies") {
      return document.querySelector(
        `${attribute.parentElement}-${data.parent}`
      );
    } else if (attribute.uniqueParent && data.id) {
      return document.querySelector(`${attribute.parentElement}-${data.id}`);
    } else {
      return document.querySelector(attribute.parentElement);
    }
  };

  const createSvgDom = (attribute, data) => {
    const parentElement = referenceElement(attribute, data);
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
      attribute.textContent = nestedTextContentValue(attribute, data);
    }
  };

  const nestedTextContentValue = (attribute, data) => {
    if (attribute.dataText.includes("-")) {
      const dataText = attribute.dataText.split("-");
      return data[`${dataText[0]}`][`${dataText[1]}`];
    } else {
      return data[attribute.dataText];
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
