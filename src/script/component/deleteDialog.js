import dataContext from "../dataContext";
import { localData } from "../model/localStorage";
import util from "../util/util";
import { elementUtil } from "./elementUtil";

const deleteDialogAttr = {
  elementType: "dialog",
  elementAttribute: {
    class: "deleteDialog",
  },
};

const deleteHeaderAttr = {
  elementType: "h1",
  elementAttribute: {
    class: "deleteHeader",
  },
  textContent: "Delete comment",
};

const deleteDescAttr = {
  elementType: "p",
  elementAttribute: {
    class: "delete",
  },
  textContent:
    "Are you sure you want to delete this comment? This will remove the comment and can't be undone",
};

const deleteActionDialogAttr = {
  elementType: "div",
  elementAttribute: {
    class: "deleteActionDialog",
  },
};

const deleteCancelActionAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "deleteCancelAction",
  },
  textContent: "NO, CANCEL",
};

const deleteAcceptActionAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "deleteAcceptAction",
  },
  textContent: "YES, DELETE",
};

const deleteDialog = (function () {
  const handleCancel = () => {
    const deleteDialog = document.querySelector(".deleteDialog");
    deleteDialog.close();
  };

  const handleAccept = (e) => {
    const { id } = util.getDataId(e);
    dataContext.comment.deleteData(id);
    handleCancel();
    util.updateCommentView();
    localData.storeData(dataContext.comment);
    console.log(dataContext);
  };

  const render = () => {
    const deleteDialog = elementUtil.createDom(deleteDialogAttr);
    deleteDialog.appendChild(renderDeleteHeader());
    deleteDialog.appendChild(renderDeleteDesc());
    deleteDialog.appendChild(renderDeleteActionDialog());
    document.body.appendChild(deleteDialog);
  };

  const renderDeleteHeader = () => {
    const deleteHeader = elementUtil.createDom(deleteHeaderAttr);
    return deleteHeader;
  };

  const renderDeleteDesc = () => {
    const deleteDesc = elementUtil.createDom(deleteDescAttr);
    return deleteDesc;
  };

  const renderDeleteActionDialog = () => {
    const deleteActionDialog = elementUtil.createDom(deleteActionDialogAttr);
    deleteActionDialog.appendChild(renderCancelAction());
    deleteActionDialog.appendChild(renderAcceptAction());
    return deleteActionDialog;
  };

  const renderCancelAction = () => {
    const cancelActionBtn = elementUtil.createDom(deleteCancelActionAttr);
    cancelActionBtn.addEventListener("click", handleCancel);
    return cancelActionBtn;
  };

  const renderAcceptAction = () => {
    const acceptActionBtn = elementUtil.createDom(deleteAcceptActionAttr);
    acceptActionBtn.addEventListener("click", handleAccept);
    return acceptActionBtn;
  };

  return { render };
})();

export default deleteDialog;
