import { routeMapper } from "../../routes.js";

const universeAction = (contentFormat, currentPage) => {
  const universe = document.querySelector(".universe-link");

  if (routeMapper["/universe"] === currentPage) {
    contentFormat.classList.add("universe-bg");
    universe.classList.add("open-page");
    return;
  }

  contentFormat.classList.remove("universe-bg");
  universe.classList.remove("open-page");
};

export default universeAction;
