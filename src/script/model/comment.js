import { formatDistance } from "date-fns";

export default function Comment(attribute) {
  if (!new.target) {
    throw new Error("Use new to call the constructor object");
  }
  this.id = attribute.id;
  this.content = attribute.content;
  this.createdAt = attribute.createdAt || new Date();
  this.score = attribute.score;
  this.user = attribute.user;
  this.replies = attribute.replies;
  this.upvoted = null;
  this.type = "comment";
}

Comment.prototype.addReplies = function (replies) {
  this.replies.push(replies.id);
};

Comment.prototype.setUpvoted = function () {
  this.upvoted = !this.upvoted;
};

Comment.prototype.renderDate = function () {
  const currentDate = new Date();
  const dateDifference = formatDistance(this.createdAt, currentDate);
  return dateDifference;
};

Comment.prototype.renderScore = function () {
  if (this.upvoted === true) {
    this.score === this.score++;
  } else if (this.upvoted === false) {
    this.score === this.score--;
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
