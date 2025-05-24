export default function List() {
  this.list = {};
}

List.prototype.addData = function (data) {
  this.list[data.id] = data;
};

List.prototype.deleteRepliesInComment = function (id, repliesId) {
  for (const key in this.list) {
    if (Number(key) === id) {
      this.list[id].comment.deleteReplies(repliesId);
    }
  }
};

List.prototype.deleteData = function (id) {
  for (const key in this.list) {
    if (Number(key) === id) {
      delete this.list[key];
    }
  }
};
