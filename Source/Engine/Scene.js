import { EngineError } from "../Core/View/ErrorHandler.js";

export default class Scene {
  constructor(name = "MainScene") {
    this.name = name;
    this.entities = [];
    this.lights = [];
  }

  addEntity(entity) {
    if (!entity || typeof entity !== "object") {
      throw new EngineError("addEntity expected an entity object", {
        context: "Scene",
        code: "SCENE_ENTITY_INVALID",
        details: { received: entity },
      });
    }

    this.entities.push(entity);
    return entity;
  }

  addLight(light) {
    if (!light || typeof light !== "object") {
      throw new EngineError("addLight expected a light object", {
        context: "Scene",
        code: "SCENE_LIGHT_INVALID",
        details: { received: light },
      });
    }

    this.lights.push(light);
    return light;
  }
}
