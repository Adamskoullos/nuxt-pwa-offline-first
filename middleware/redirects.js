export default ({ route, redirect }) => {
  if (process.server) {
    if (route.path == "/") {
      console.log(route.path);
      return redirect("/listOne");
    }
  }

  if (process.client) {
    if (route.name == "index") {
      console.log(route.name);
      redirect("listOne");
    }
  }
};
