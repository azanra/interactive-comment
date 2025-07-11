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

const commentCard = (commentAttr, data) => {
  const renderComment = () => {
    const comment = elementUtil.createDom(commentAttr);
    comment.appendChild(renderCommentContent());
    return comment;
  };

  const renderCommentContent = () => {
    const commentContent = elementUtil.createDom(commentContentAttr);
    commentContent.appendChild(upvote(upvoteAttr, data));
    return commentContent;
  };

  return renderComment();
};

export default commentCard;
