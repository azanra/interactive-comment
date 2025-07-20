import { elementUtil } from "./elementUtil";

const commentBodyAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentBody",
  },
};

const commentContentContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentContentContainer",
  },
};

const replyingToAttr = {
  elementType: "span",
  elementAttribute: {
    class: "replyingTo",
  },
};

const commentContentAttr = {
  elementType: "p",
  elementAttribute: {
    class: "commentContent",
  },
};

const commentBody = (data) => {
  const renderCommentBody = () => {
    const commentBody = elementUtil.createDom(commentBodyAttr);
    commentBody.appendChild(renderCommentContent());
    return commentBody;
  };

  const renderCommentContent = () => {
    const commentContentContainer = elementUtil.createDom(
      commentContentContainerAttr,
    );
    if (data.type === "replies") {
      const replyingTo = elementUtil.createDom(replyingToAttr);
      replyingTo.textContent = `${data.replyingTo}`;
      commentContentContainer.appendChild(replyingTo);
    }
    const commentContent = elementUtil.createDom(commentContentAttr);
    commentContent.textContent = data.content;
    commentContentContainer.appendChild(commentContent);
    return commentContentContainer;
  };

  return renderCommentBody();
};

export default commentBody;
