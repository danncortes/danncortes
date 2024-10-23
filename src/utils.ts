function loadImage(fileName: string): Promise<{ default: string }> {
  return import(`./assets/${fileName}`);
}

export { loadImage };
