import "./style.css";
import { initialData } from "./script/model/data.js";
import renderData from "./script/view/renderData.js";

const comments = initialData.comments;
renderData.render(comments);
