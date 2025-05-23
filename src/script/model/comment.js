export default function Comment(attribute) {
  if (!new.target) {
    throw new Error("Use new to call the constructor object");
  }
  this.id = attribute.id;
  this.content = attribute.content;
  this.createdAt = new Date();
  this.score = attribute.score;
  this.user = attribute.user;
  this.replies = attribute.replies;
  this.type = "comment";
  this.upvoted = false;
}

Comment.prototype.addReplies = function (replies) {
  this.replies.push(replies);
};

Comment.prototype.setUpvoted = function () {
  this.upvoted = !this.upvoted;
};
