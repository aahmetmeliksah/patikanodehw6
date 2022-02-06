const koa = require("koa"); // imported koa
const Router = require("@koa/router");
const app = new koa(); // assigned koa func to a constant called app
const router = new Router();

// when / url is entered, show index
router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.body = "<h1>Welcome to Index page</h1>";
});

// when /about url is entered, show about
router.get("/about", (ctx) => {
  ctx.response.status = 200;
  ctx.body = "<h1>Here, you can find more about me</h1>";
});

// when /contact url is entered, show contact
router.get("/contact", (ctx) => {
  ctx.response.status = 200;
  ctx.body = "<h1>Welcome to contact page</h1>";
});
// otherwise show not found -- no need to write code for that because it is default

app.use(router.routes()); // use the use method otherwise it won't work
app.listen(3000, () => console.log("Server started at port 3000")); // listening to port 3000
