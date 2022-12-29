import { routeMapper } from "../../routes.js";

const explorationAction = (contentFormat, currentPage) => {
  const exploration = document.querySelector(".exploration-link");

  if (routeMapper["/exploration"] === currentPage) {
    contentFormat.classList.add("exploration-bg");
    exploration.classList.add("open-page");
    return;
  }

  contentFormat.classList.remove("exploration-bg");
  exploration.classList.remove("open-page");
};

export default explorationAction;
