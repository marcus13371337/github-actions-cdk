type Values = string | number | boolean;

type UnknownObject = {
  [key: string]: UnknownObject | UnknownObject[] | Values | Values[];
};

export const convertToYamlConvention = (obj: object) => {
  return Object.entries(obj).reduce<UnknownObject>((acc, [key, value]) => {
    if (typeof value === 'undefined' || value === null) {
      return acc;
    }

    if (Array.isArray(value)) {
      acc[key] = value.map((item) => {
        if (typeof item === 'object') {
          return convertToYamlConvention(item);
        }

        return item;
      });
    } else if (typeof value === 'object') {
      acc[key] = convertToYamlConvention(value);
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});
};
