import { EngineError } from "../Core/View/ErrorHandler.js";

export default class Renderer {
  constructor(viewport) {
    this.viewport = viewport;
    this.frame = 0;
  }

  render(scene, camera) {
    if (!scene || !Array.isArray(scene.entities) || !Array.isArray(scene.lights)) {
      throw new EngineError("render expected a valid scene", {
        context: "Renderer",
        code: "RENDER_SCENE_INVALID",
      });
    }

    if (!camera || typeof camera.toJSON !== "function") {
      throw new EngineError("render expected a camera with toJSON()", {
        context: "Renderer",
        code: "RENDER_CAMERA_INVALID",
      });
    }

    this.frame += 1;
    return {
      frame: this.frame,
      viewport: { width: this.viewport.width, height: this.viewport.height },
      entities: scene.entities.length,
      lights: scene.lights.length,
      camera: camera.toJSON(),
    };
  }
}
