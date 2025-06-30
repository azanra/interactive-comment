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

  const setUniqueId = (attribute, id) => {
    if (attribute.uniqueElement === true) {
      const copyAttribute = JSON.parse(JSON.stringify(attribute));
      copyAttribute.elementAttribute.id = `${copyAttribute.elementAttribute.class}-${id}`;
      return copyAttribute;
    } else {
      return attribute;
    }
  };

  const appendReferenceParent = (attribute) => {
    if (attribute?.withParentId === true) {
      attribute.referenceParent = "withParentId";
    } else if (attribute.uniqueParent === true) {
      attribute.referenceParent = "withDataId";
    } else {
      attribute.referenceParent = "none";
    }
    return attribute;
  };

  const referenceElement = (attribute, data) => {
    if (attribute.referenceParent === "withParentId") {
      return document.querySelector(
        `${attribute.parentElement}-${data.parent}`
      );
    } else if (attribute.referenceParent === "withDataId") {
      return document.querySelector(`${attribute.parentElement}-${data.id}`);
    } else if (attribute.referenceParent === "none") {
      return document.querySelector(attribute.parentElement);
    }
  };

  const createSvgDom = (attribute) => {
    const { uri, name, elementAttribute, xmlnsAttribute, path } = attribute;
    const svgElement = document.createElementNS(uri, name);
    setMultipleAttr(svgElement, elementAttribute);
    svgElement.setAttributeNS(
      xmlnsAttribute.nameSpace,
      xmlnsAttribute.name,
      xmlnsAttribute.value
    );
    const pathElement = document.createElementNS(path.uri, path.name);
    setMultipleAttr(pathElement, path.elementAttribute);
    svgElement.append(pathElement);
    return svgElement;
  };

  const createImg = (attribute, src) => {
    if (attribute.hasOwnProperty("isImage")) {
      const attrWithSrc = JSON.parse(JSON.stringify(attribute));
      attrWithSrc.elementAttribute.src = src;
      return attrWithSrc;
    } else {
      return attribute;
    }
  };

  const populateUniqueText = (attribute, data) => {
    if (attribute.hasOwnProperty("dataText")) {
      const uniqueTextAttr = JSON.parse(JSON.stringify(attribute));
      uniqueTextAttr.textContent = nestedTextContentValue(attribute, data);
      return uniqueTextAttr;
    } else {
      return attribute;
    }
  };

  const renderAtToReplying = (data) => {
    if (data.type === "replies") {
      const replyingTo = document.querySelectorAll(".dataReplyingTo");
      replyingTo.forEach((reply) => {
        if (reply.textContent && !reply.textContent.includes("@")) {
          reply.textContent = `@${reply.textContent}`;
        }
      });
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

  const renderCreatedSince = (attribute, data) => {
    if (attribute.elementAttribute.class === "createdAt") {
      const attrWithCreatedSince = JSON.parse(JSON.stringify(attribute));
      attrWithCreatedSince.textContent = data.renderDate();
      return attrWithCreatedSince;
    } else {
      return attribute;
    }
  };

  return {
    createDom,
    setMultipleAttr,
    setTextContent,
    setUniqueId,
    createSvgDom,
    appendReferenceParent,
    renderAtToReplying,
  };
})();
