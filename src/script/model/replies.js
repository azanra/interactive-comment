import Comment from "./comment.js";

export default function Replies(attribute) {
  this.comment = new Comment(attribute);
  this.id = attribute.id;
  this.type = "replies";
  this.replyingTo = attribute.replying;
}
