import { routeMapper } from "../../routes.js";

const homeAction = (contentFormat, currentPage) => {
  const home = document.querySelector(".home-link");

  if (routeMapper["/"] === currentPage) {
    contentFormat.classList.add("home-bg");
    contentFormat.classList.remove("main-text");
    home.classList.add("open-page");
    return;
  }

  contentFormat.classList.remove("home-bg");
  contentFormat.classList.add("main-text");
  home.classList.remove("open-page");
};

export default homeAction;
