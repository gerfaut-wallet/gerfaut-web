/** The visitor's system, when it is one the apps run on. iOS has no app
    yet, and anything unknown gets the generic wording. */
export type Platform = {
  slot: "windows" | "macos" | "linux" | "android";
  name: string;
};

export function detectPlatform(): Platform | null {
  const ua = navigator.userAgent;
  const platform =
    (navigator as { userAgentData?: { platform?: string } }).userAgentData
      ?.platform ?? navigator.platform;
  if (/Android/i.test(ua)) return { slot: "android", name: "Android" };
  if (/iPhone|iPad|iPod/i.test(ua)) return null;
  if (/Win/i.test(platform)) return { slot: "windows", name: "Windows" };
  if (/Mac/i.test(platform)) return { slot: "macos", name: "macOS" };
  if (/Linux/i.test(platform)) return { slot: "linux", name: "Linux" };
  return null;
}
