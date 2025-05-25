import Comment from "./comment.js";

export default function Replies(attribute) {
  this.id = attribute.id;
  this.content = attribute.content;
  this.createdAt = this.setCurrentDate();
  this.score = attribute.score;
  this.user = attribute.user;
  this.replies = attribute.replies;
  this.upvoted = null;
  this.type = "replies";
  this.replyingTo = attribute.replyingTo;
}

Object.setPrototypeOf(Replies.prototype, Comment.prototype);
