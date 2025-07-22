function identifier(data) {
  const listData = data;

  const getLatestId = () => {
    const idArray = Object.keys(listData);
    const lastId = idArray[idArray.length - 1];
    return lastId;
  };

  let lastId = getLatestId();

  const incrementLastId = () => lastId++;

  const getLastId = () => lastId;

  return { incrementLastId, getLastId };
}

export default identifier;
