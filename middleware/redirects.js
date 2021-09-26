export default ({ route, redirect, req, res }) => {
  if (process.server) {
    // For larger projects server logic could be placed in specific serverMiddleware that only runs on the server to improve performance
    if (route.path == "/") {
      return redirect("/list-one");
    }
  }

  if (process.client) {
    if (route.path == "/") {
      redirect("list-one");
    }
  }
};
