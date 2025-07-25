export const elementUtil = (function () {
  const createDom = (attribute) => {
    const { elementType, elementAttribute, textContent } = attribute;
    const element = document.createElement(elementType);
    setMultipleAttr(element, elementAttribute);
    setTextContent(element, textContent);
    return element;
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

  const createSvgDom = (attribute) => {
    const { uri, name, elementAttribute, xmlnsAttribute, path } = attribute;
    const svgElement = document.createElementNS(uri, name);
    setMultipleAttr(svgElement, elementAttribute);
    svgElement.setAttributeNS(
      xmlnsAttribute.nameSpace,
      xmlnsAttribute.name,
      xmlnsAttribute.value,
    );
    const pathElement = document.createElementNS(path.uri, path.name);
    setMultipleAttr(pathElement, path.elementAttribute);
    svgElement.append(pathElement);
    return svgElement;
  };

  const setUniqueId = (attribute, data) => {
    if (data) {
      const copyAttribute = JSON.parse(JSON.stringify(attribute));
      copyAttribute.elementAttribute.id = `${copyAttribute.elementAttribute.class}-${data.id}`;
      return copyAttribute;
    } else {
      return attribute;
    }
  };

  return {
    createDom,
    createSvgDom,
    setTextContent,
    setUniqueId,
  };
})();
