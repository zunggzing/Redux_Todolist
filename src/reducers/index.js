import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import itemEditing from "./ItemEditing";
import filterTable from "./filterTable";
import search from "./search";
import sort from "./sort";

const myReducer = combineReducers({
  // tasks: tasks
  tasks,
  isDisplayForm,
  itemEditing,
  filterTable,
  search,
  sort,
});
export default myReducer;
