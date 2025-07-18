import { elementUtil } from "./elementUtil";
import upvote, { upvoteAttr } from "./upvote";

export const commentAttr = {
  elementType: "div",
  elementAttribute: {
    class: "comment",
  },
};

const commentContentAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentContent",
  },
};

const commentContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentContainer",
  },
};

const commentHeaderAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentHeader",
  },
};

const commentBodyAttr = {
  elementType: "div",
  elementAttribute: {
    class: "commentBody",
  },
};

const commentCard = (commentAttr, data) => {
  const renderComment = () => {
    const comment = elementUtil.createDom(commentAttr);
    comment.appendChild(renderCommentContent());
    return comment;
  };

  const renderCommentContent = () => {
    const commentContent = elementUtil.createDom(commentContentAttr);
    commentContent.appendChild(upvote(upvoteAttr, data));
    commentContent.appendChild(renderCommentContainer());
    return commentContent;
  };

  const renderCommentContainer = () => {
    const commentContainer = elementUtil.createDom(commentContainerAttr);
    commentContainer.appendChild(renderCommentHeader());
    commentContainer.appendChild(renderCommentBody());
    return commentContainer;
  };

  const renderCommentHeader = () => {
    const commentHeader = elementUtil.createDom(commentHeaderAttr);
    return commentHeader;
  };

  const renderCommentBody = () => {
    const commentBody = elementUtil.createDom(commentBodyAttr);
    return commentBody;
  };

  return renderComment();
};

export default commentCard;
