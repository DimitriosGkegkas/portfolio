import urlJoin from "url-join";

export const asset = (path: string): string => {
  return urlJoin(import.meta.env.BASE_URL, path);
};