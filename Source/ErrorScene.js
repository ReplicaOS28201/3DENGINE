import { createErrorPayload } from "./Core/View/ErrorHandler.js";

export default function errorScene(error) {
  return createErrorPayload(error, "Scene");
}
