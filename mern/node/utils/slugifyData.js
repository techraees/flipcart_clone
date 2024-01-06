import slugify from "slugify";

export const generateSlug = (length, name) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const slug = slugify(name);
  let randomString = slug;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    randomString += characters.charAt(randomIndex);
    if (i == 5) randomString += Date.now();
  }
  return randomString;
};
