export const pathResolver = (imagePath: string) => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return imagePath;
    default:
      return `${process.env.NEXT_PUBLIC_API_URI}${imagePath}`;
  }
};
