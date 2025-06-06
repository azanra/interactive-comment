export const attribute = {
  card: {
    container: {
      parentElement: ".section",
      newElement: "div",
      elementAttribute: {
        class: "commentContainer",
      },
      uniqueParent: false,
      uniqueElement: true,
    },
    actionContainer: {
      parentElement: "#commentContainer",
      newElement: "div",
      elementAttribute: {
        class: "actionContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    increContainer: {
      parentElement: "#actionContainer",
      newElement: "div",
      elementAttribute: {
        class: "increContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    increBtn: {
      parentElement: "#increContainer",
      newElement: "button",
      elementAttribute: {
        type: "button",
        class: "increBtn",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    amountContainer: {
      parentElement: "#actionContainer",
      newElement: "div",
      elementAttribute: {
        class: "amountContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    amountText: {
      parentElement: "#amountContainer",
      newElement: "p",
      elementAttribute: {
        class: "amountText",
      },
      dataText: "score",
      uniqueParent: true,
      uniqueElement: true,
    },
    decreContainer: {
      parentElement: "#actionContainer",
      newElement: "div",
      elementAttribute: {
        class: "decreContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    decreBtn: {
      parentElement: "#decreContainer",
      newElement: "button",
      elementAttribute: {
        class: "decreBtn",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    contentContainer: {
      parentElement: "#commentContainer",
      newElement: "div",
      elementAttribute: {
        class: "contentContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    infoContainer: {
      parentElement: "#contentContainer",
      newElement: "div",
      elementAttribute: {
        class: "infoContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    userInfoContainer: {
      parentElement: "#infoContainer",
      newElement: "div",
      elementAttribute: {
        class: "userInfoContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    userImgContainer: {
      parentElement: "#userInfoContainer",
      newElement: "div",
      elementAttribute: {
        class: "userImgContainer",
      },
      uniqueParent: true,
      uniqueElement: true,
    },
    userImg: {
      parentElement: "#userImgContainer",
      newElement: "img",
      elementAttribute: {
        class: "userImg",
      },
      uniqueParent: true,
      uniqueElement: true,
      isImage: true,
    },
  },
  svg: {
    incre: {
      parentElement: "#increBtn",
      uniqueParent: true,
      uniqueElement: false,
      svg: {
        uri: "http://www.w3.org/2000/svg",
        name: "svg",
        elementAttribute: {
          width: "11",
          height: "11",
        },
        xmlnsAttribute: {
          nameSpace: "http://www.w3.org/2000/xmlns/",
          name: "xmlns:xlink",
          value: "http://www.w3.org/2000/svg",
        },
        path: {
          uri: "http://www.w3.org/2000/svg",
          name: "path",
          elementAttribute: {
            fill: "#C5C6EF",
            d: "M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z",
          },
        },
      },
    },
    decre: {
      parentElement: "#decreBtn",
      uniqueParent: true,
      uniqueElement: false,
      svg: {
        uri: "http://www.w3.org/2000/svg",
        name: "svg",
        elementAttribute: {
          width: "11",
          height: "3",
        },
        xmlnsAttribute: {
          nameSpace: "http://www.w3.org/2000/xmlns/",
          name: "xmlns:xlink",
          value: "http://www.w3.org/2000/svg",
        },
        path: {
          uri: "http://www.w3.org/2000/svg",
          name: "path",
          elementAttribute: {
            fill: "#C5C6EF",
            d: "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z",
          },
        },
      },
    },
  },
};
