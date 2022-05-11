import menu from "./menu";

const routerObject = {};

const router = [
  {
    key: "trang-chu",
    name: "trang-chu",
    path: "/",
    pathComponent: "pages/index.vue",
  },
];

function pushRouter(r) {
  if (!r.pathComponent || routerObject[r.path]) return;

  routerObject[r.path] = true;
  router.push({
    name: r.name,
    path: r.path,
    pathComponent: r.pathComponent,
  });
}

for (const menuItem of menu) {
  pushRouter(menuItem);

  for (const subMenuItem of menuItem.children || []) {
    pushRouter(subMenuItem);
  }
}

export default router;
