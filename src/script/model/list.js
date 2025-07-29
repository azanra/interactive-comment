export default function List() {
  this.list = {};
}

List.prototype.addData = function (data) {
  this.list[data.id] = data;
};

List.prototype.deleteNestedReplies = function (id, repliesId) {
  for (const key in this.list) {
    if (Number(key) === Number(id)) {
      this.list[id].deleteReplies(repliesId);
    }
  }
};

List.prototype.deleteData = function (id) {
  for (const key in this.list) {
    if (Number(key) === Number(id)) {
      this.checkReplies(this.list[key].replies);
      delete this.list[key];
    }
  }
};

List.prototype.checkReplies = function (replies) {
  if (replies.length > 0) {
    replies.map((item) => {
      delete this.list[item];
    });
  }
};

List.prototype.updateAttribute = function (id, attribute, newValue) {
  for (const key in this.list) {
    if (Number(key) === Number(id)) {
      this.list[key].updateAttribute(attribute, newValue);
    }
  }
};

List.prototype.addReply = function (id, replies) {
  for (const key in this.list) {
    if (Number(key) === Number(id)) {
      this.list[key].addReplies(replies);
    }
  }
};

List.prototype.setUpvote = function (id) {
  for (const key in this.list) {
    if (Number(key) === Number(id)) {
      this.list[key].setUpvoted();
    }
  }
};

List.prototype.setDownvote = function (id) {
  for (const key in this.list) {
    if (Number(key) === Number(id)) {
      this.list[key].setDownvoted();
    }
  }
};

List.prototype.returnDate = function (id) {
  let dateDifference;
  for (const key in this.list) {
    if (Number(key) === Number(id)) {
      dateDifference = this.list[key].renderDate();
    }
  }
  return dateDifference;
};

List.prototype.setUpvoteScore = function (id) {
  for (const key in this.list) {
    if (Number(key) === Number(id)) {
      this.list[key].renderUpvoteScore();
    }
  }
};

List.prototype.setDownvoteScore = function (id) {
  for (const key in this.list) {
    if (Number(key) === Number(id)) {
      this.list[key].renderDownvoteScore();
    }
  }
};

List.prototype.returnComment = function (id) {
  let data;
  for (const key in this.list) {
    if (Number(key) === Number(id)) {
      data = this.list[key];
    }
  }
  return data;
};
