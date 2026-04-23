import CameraPosition from "./Camera/CamPos.js";
import Gravity from "./Scene/Gravity.js";
import SceneViewport from "./Scene/SceneViewport.js";
import Enum from "./Core/Enum.js";
import CoreMath from "./Core/Math.js";
import Position from "./Core/Position.js";

export function createEngine() {
  return {
    camera: new CameraPosition(),
    gravity: new Gravity(),
    viewport: new SceneViewport(),
    origin: new Position(),
    enum: Enum,
    math: CoreMath,
  };
}

export default createEngine;
