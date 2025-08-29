export function hasSessionCookie(): boolean {
  // In a real app, check `cookies()` in a server component or middleware.
  // This placeholder is client-only and not secure.
  // return typeof window !== "undefined" && !!localStorage.getItem("token");
  return true;
}
