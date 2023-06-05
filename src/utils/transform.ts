export const removeFileExtension = (text?: string) => {
  if (!text) {
    return text;
  }

  const dotIndex = text.lastIndexOf('.');

  if (dotIndex === -1) {
    return text;
  }

  const textWithoutExtension = text.substring(0, dotIndex);

  return textWithoutExtension;
};

function replaceAll(str: string, from: string, to: string) {
  return str.replace(new RegExp(from, 'g'), to);
}

export const removeHttpPrefixFromUri = (text?: string) => {
  if (!text) {
    return text;
  }

  const barsIndex = text.lastIndexOf('://');

  if (barsIndex === -1) {
    return text;
  }

  const textWithoutBars = replaceAll(text.substring(barsIndex + 3), '/', '.');

  return textWithoutBars;
};

export const upperCaseFirstLetter = (text: string) => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};
