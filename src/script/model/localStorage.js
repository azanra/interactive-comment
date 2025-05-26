export const localData = (function () {
  const storeData = (data) => {
    localStorage.setItem("list", JSON.stringify(data));
  };
  return { storeData };
})();
