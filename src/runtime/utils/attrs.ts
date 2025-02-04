/**
 * Извлекает свойства объекта, ключи которых начинаются с указанного префикса.
 *
 * @param obj - Объект, из которого будут извлекаться свойства.
 * @param prefix - Префикс, по которому производится фильтрация ключей.
 * @returns Объект, содержащий свойства с префиксом, но без него в именах ключей.
 */

export function getObjectPropertiesWithPrefix<T extends Record<string, any>>(
  obj: T,
  prefix: string
): Record<string, any> {
  const properties: Record<string, any> = {};

  for (const key in obj) {
    if (key.startsWith(`${prefix}-`)) {
      const strippedKey: string = key.split(`${prefix}-`)[1];
      properties[strippedKey] = obj[key];
    }
  }

  return properties;
}
