  export const normalizePath = (segments: string[]): string => {
    const resolved = [];
    for (const part of segments) {
      if (part === "." || part === "") continue;
      if (part === "..") resolved.pop();
      else resolved.push(part);
    }
    return resolved.join("/") + (resolved.length ? "/" : "");
  };
