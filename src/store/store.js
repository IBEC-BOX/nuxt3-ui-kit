import {defineStore} from 'pinia'

export const useStore = defineStore('store', {
  getters: {
    getObjectPropertiesWithPrefix: () => {
      return (obj, prefix) => {
        const properties = {};
        for (const key in obj) {
          if (key.startsWith(`${prefix}-`)) {
            properties[key.split(`${prefix}-`)[1]] = obj[key];
          }
        }
        return properties;
      };
    }
  }
})
