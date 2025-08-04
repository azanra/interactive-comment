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
    const commentBodyWithId = elementUtil.setUniqueId(commentBodyAttr, data);
    const commentBody = elementUtil.createDom(commentBodyWithId);
    commentBody.appendChild(renderCommentContent());
    return commentBody;
  };

  const renderCommentContent = () => {
    const commentContentContainer = elementUtil.createDom(
      commentContentContainerAttr,
    );
    const commentContent = elementUtil.createDom(commentContentAttr);
    const commentText = ` ${data.type === "replies" ? `@${data.replyingTo}` : ""} ${data.content}`;
    commentContent.textContent = data.isDeleted
      ? "Comment deleted by user"
      : commentText;
    commentContentContainer.appendChild(commentContent);
    return commentContentContainer;
  };

  return renderCommentBody();
};

export default commentBody;
