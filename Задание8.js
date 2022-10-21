let map = new Map();
map.set("1", "string");
map.set(1, "number");
map.set(true, "boolean");

for (let elem of map){
  console.log("ключ и значение", elem);
}
