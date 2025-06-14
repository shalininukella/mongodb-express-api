export function preSave(next) {
  this.updatedAt = Date.now();
  next();
}

export function postSave(doc, next) {
  doc.sayHi(); // method attached in methods
  next();
}
