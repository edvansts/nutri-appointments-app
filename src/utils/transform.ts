export const removeFileExtension = (text: string) => {
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

export const removeHttpPrefixFromUri = (text: string) => {
  const barsIndex = text.lastIndexOf('://');

  if (barsIndex === -1) {
    return text;
  }

  const textWithoutBars = replaceAll(text.substring(barsIndex + 3), '/', '.');

  return textWithoutBars;
};
