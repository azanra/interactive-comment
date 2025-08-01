import { formatDistance } from "date-fns";

export default function Comment(attribute) {
  if (!new.target) {
    throw new Error("Use new to call the constructor object");
  }
  this.id = attribute.id;
  this.content = attribute.content;
  this.createdAt = attribute.createdAt;
  this.score = attribute.score;
  this.user = attribute.user;
  this.replies = attribute.replies;
  this.isUpvoted = false;
  this.isDownvoted = false;
  this.renderedScore = this.score;
  this.isDeleted = false;
  this.type = "comment";
}

Comment.prototype.setIsDeleted = function () {
  this.isDeleted = true;
};

Comment.prototype.addReplies = function (replies) {
  this.replies.push(replies.id);
};

Comment.prototype.setUpvoted = function () {
  this.isUpvoted = !this.isUpvoted;
  if (this.isDownvoted === true) this.isDownvoted = false;
};

Comment.prototype.setDownvoted = function () {
  this.isDownvoted = !this.isDownvoted;
  if (this.isUpvoted === true) this.isUpvoted = false;
};

Comment.prototype.renderDate = function () {
  const currentDate = new Date();
  const dateDifference = formatDistance(this.createdAt, currentDate);
  return dateDifference;
};

Comment.prototype.renderUpvoteScore = function () {
  if (this.isUpvoted === true) {
    this.score = this.renderedScore + 1;
  } else if (this.isUpvoted === false) {
    this.score = this.renderedScore;
  }
};

Comment.prototype.renderDownvoteScore = function () {
  if (this.isDownvoted === true) {
    this.score = this.renderedScore - 1;
  } else if (this.isDownvoted === false) {
    this.score = this.renderedScore;
  }
};

Comment.prototype.deleteReplies = function (id) {
  this.replies = this.replies.filter((item) => {
    return item !== id;
  });
};

Comment.prototype.updateAttribute = function (attribute, newValue) {
  this[attribute] = newValue;
};
