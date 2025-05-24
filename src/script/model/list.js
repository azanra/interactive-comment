export default function List() {
  this.list = {};
}

List.prototype.addData = function (data) {
  this.list[data.id] = data;
};

List.prototype.deleteNestedReplies = function (id, repliesId) {
  for (const key in this.list) {
    if (Number(key) === id) {
      this.list[id].deleteReplies(repliesId);
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

List.prototype.updateAttribute = function (id, attribute, newValue) {
  for (const key in this.list) {
    if (Number(key) === id) {
      this.list[key].updateAttribute(attribute, newValue);
    }
  }
};
