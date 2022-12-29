import {
  homeAction,
  universeAction,
  explorationAction,
} from "./actions/index.js";

export function RegisterActions() {
  const content = document.querySelector("#app");
  const currentPage = window.location.pathname;

  homeAction(content, currentPage);
  universeAction(content, currentPage);
  explorationAction(content, currentPage);
}
