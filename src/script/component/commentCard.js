import { elementUtil } from "./elementUtil";
import upvote, { upvoteAttr } from "./upvote";

export const commentAttr = {
  elementType: "div",
  elementAttribute: {
    class: "comment",
  },
};

const commentCard = (commentAttr, id) => {
  const renderComment = () => {
    const comment = elementUtil.createDom(commentAttr);
    comment.appendChild(upvote(upvoteAttr, id));
    return comment;
  };

  return renderComment();
};

export default commentCard;
