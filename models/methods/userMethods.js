export function sayHi() {
  console.log(`hi ${this.name}`);
}

export function findByName(name) {
  return this.find({ name: new RegExp(name, "i") });
}

export function byName(name) {
  return this.where({ name: new RegExp(name, "i") });
}

export function namedEmail() {
  return `${this.name} ${this.email}`;
}
