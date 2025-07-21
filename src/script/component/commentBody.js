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
    const commentContent = elementUtil.createDom(commentContentAttr);
    commentContent.textContent = ` ${data.type === "replies" ? `@${data.replyingTo}` : ""} ${data.content}`;
    commentContentContainer.appendChild(commentContent);
    return commentContentContainer;
  };

  return renderCommentBody();
};

export default commentBody;
