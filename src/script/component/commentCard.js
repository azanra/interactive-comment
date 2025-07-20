import commentBody from "./commentBody";
import commentHeader from "./commentHeader";
import { elementUtil } from "./elementUtil";
import upvote from "./upvote";

const commentAttr = {
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

const commentCard = (data) => {
  const renderComment = () => {
    const comment = elementUtil.createDom(commentAttr);
    comment.appendChild(renderCommentContent());
    return comment;
  };

  const renderCommentContent = () => {
    const commentContent = elementUtil.createDom(commentContentAttr);
    commentContent.appendChild(upvote(data));
    commentContent.appendChild(renderCommentContainer());
    return commentContent;
  };

  const renderCommentContainer = () => {
    const commentContainer = elementUtil.createDom(commentContainerAttr);
    commentContainer.appendChild(commentHeader(data));
    commentContainer.appendChild(commentBody(data));
    return commentContainer;
  };

  return renderComment();
};

export default commentCard;
