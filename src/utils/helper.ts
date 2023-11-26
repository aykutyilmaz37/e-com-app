export function replaceImage(imageUrl: string, imageName: string) {
  const joinKeywords = imageName.split(' ').join(',')
  return imageUrl
    .replace(imageUrl, `https://loremflickr.com/600/600/${joinKeywords}`);
}
