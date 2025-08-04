import commentBody from "./commentBody";
import commentEdit from "./commentEdit";
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
  const state = {
    isEditing: false,
  };

  const setIsEditing = () => {
    state.isEditing = !state.isEditing;
    updateRender();
  };

  const updateRender = () => {
    if (state.isEditing) {
      const commentBody = document.querySelector(`#commentBody-${data.id}`);
      if (commentBody) commentBody.remove();
      const commentContainer = document.querySelector(
        `#commentContainer-${data.id}`,
      );
      commentContainer.appendChild(commentEdit(data));
    }
  };

  const renderComment = () => {
    const commentAttrWithId = elementUtil.setUniqueId(commentAttr, data);
    const comment = elementUtil.createDom(commentAttrWithId);
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
    const commentContainerWithId = elementUtil.setUniqueId(
      commentContainerAttr,
      data,
    );
    const commentContainer = elementUtil.createDom(commentContainerWithId);
    commentContainer.appendChild(commentHeader(data, setIsEditing));
    commentContainer.appendChild(commentBody(data));
    return commentContainer;
  };

  return renderComment();
};

export default commentCard;
