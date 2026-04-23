export default function errorHandler(error, context = "3DENGINE") {
  const message = error instanceof Error ? error.message : String(error);
  return `[${context}] ${message}`;
}
