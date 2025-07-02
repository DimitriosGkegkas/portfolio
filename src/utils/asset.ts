// make this safe to use (// -> /)
export const asset = (path: string): string => import.meta.env.BASE_URL + path.replace(/\/\//g, "/");
