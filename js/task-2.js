class Storage {
#items;
constructor(array) {
  this.#items = array;
}
getItems() {
  return this.#items;
}
addItem(newItem) {
  this.#items.push(newItem);
}
removeItem(itemToRemove) {
  for (let index = 0; index < this.#items.length; index +=1) {
    if (this.#items[index] === itemToRemove) this.#items.splice(index,1);
    
  }
}
}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
