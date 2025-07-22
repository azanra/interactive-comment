import Comment from "./comment.js";

export default function Replies(attribute) {
  if (!new.target) {
    throw new Error("Use new to call the constructor object");
  }
  this.id = attribute.id;
  this.content = attribute.content;
  this.createdAt = attribute.createdAt;
  this.score = attribute.score;
  this.user = attribute.user;
  this.replies = attribute.replies;
  this.upvoted = null;
  this.type = "replies";
  this.replyingTo = attribute.replyingTo;
  this.parent = attribute.parent;
}

Object.setPrototypeOf(Replies.prototype, Comment.prototype);
