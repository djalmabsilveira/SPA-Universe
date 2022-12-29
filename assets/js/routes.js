class Route {
  add(routeName, page) {
    this[routeName] = page;
  }
}

export const routeMapper = new Route();
routeMapper.add("/", "/");
routeMapper.add("/universe", "/universe");
routeMapper.add("/exploration", "/exploration");
