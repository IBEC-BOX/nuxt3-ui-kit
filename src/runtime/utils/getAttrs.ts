import type { Attrs } from "../types/global";

export function getProperties(attrs: Attrs, prefix: string): Attrs {
  const properties: Attrs = {};
  for (const key in attrs) {
    if (key.startsWith(`${prefix}-`)) {
      properties[key.split(`${prefix}-`)[1]] = attrs[key];
    }
  }
  return properties;
}
