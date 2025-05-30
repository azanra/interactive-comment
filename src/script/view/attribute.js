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
  },
};
