/** The visitor's system, when it is one the apps run on. iOS has no app
    yet, and anything unknown gets the generic wording. */
export type Platform = {
  slot: "windows" | "macos" | "linux" | "android";
  name: string;
};

type UserAgentData = {
  platform?: string;
  getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string; bitness?: string }>;
};

export async function detectPlatform(): Promise<Platform | null> {
  const ua = navigator.userAgent;
  const data = (navigator as { userAgentData?: UserAgentData }).userAgentData;
  const platform = data?.platform ?? navigator.platform;
  if (/Android/i.test(ua)) return { slot: "android", name: "Android" };
  if (/iPhone|iPad|iPod/i.test(ua)) return null;
  if (/Win/i.test(platform)) return { slot: "windows", name: "Windows" };
  // Safari on an iPad says Mac, but no Mac has a touch screen.
  if (/Mac/i.test(platform) && navigator.maxTouchPoints > 1) return null;
  if (/Mac/i.test(platform)) return { slot: "macos", name: "macOS" };
  if (/Linux/i.test(platform)) {
    return (await isX86_64Linux(data)) ? { slot: "linux", name: "Linux" } : null;
  }
  return null;
}

// The Linux builds are x86_64 only. Chromium's frozen user agent says
// "Linux x86_64" on any processor, but its client hints name the real
// one; Firefox has no hints and its navigator.platform names it
// ("Linux aarch64", "Linux i686").
async function isX86_64Linux(data: UserAgentData | undefined): Promise<boolean> {
  if (data?.getHighEntropyValues) {
    try {
      const { architecture, bitness } = await data.getHighEntropyValues(["architecture", "bitness"]);
      if (architecture) return architecture === "x86" && bitness !== "32";
    } catch {
      // No hints after all: fall back on navigator.platform.
    }
  }
  return /x86_64|amd64/i.test(navigator.platform);
}
