import Transform from "./Transform.js";

let nextId = 1;

export default class Entity {
  constructor(name = "Entity") {
    this.id = nextId++;
    this.name = name;
    this.transform = new Transform();
    this.components = new Map();
  }

  addComponent(key, component) {
    this.components.set(key, component);
    return this;
  }

  getComponent(key) {
    return this.components.get(key);
  }
}
