export default function List() {
  this.list = {};
}

List.prototype.addData = function (data) {
  this.list[data.id] = data;
};


