/** The visitor's system, when Gerfaut has an app for it. The iPhone app
    is not out yet: `coming` sends the visitor to its card on the
    download page, never to a file. An iPad, and anything unknown, gets
    the generic wording. */
export type Platform =
  | { slot: "windows" | "macos" | "linux" | "android"; name: string; release: "out" }
  | { slot: "iphone"; name: "iPhone"; release: "coming" };

type UserAgentData = {
  platform?: string;
  getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string; bitness?: string }>;
};

export async function detectPlatform(): Promise<Platform | null> {
  const ua = navigator.userAgent;
  const data = (navigator as { userAgentData?: UserAgentData }).userAgentData;
  const platform = data?.platform ?? navigator.platform;
  if (/Android/i.test(ua)) return { slot: "android", name: "Android", release: "out" };
  if (/iPhone/i.test(ua)) return { slot: "iphone", name: "iPhone", release: "coming" };
  if (/iPad|iPod/i.test(ua)) return null;
  if (/Win/i.test(platform)) return { slot: "windows", name: "Windows", release: "out" };
  // Safari on an iPad says Mac, but no Mac has a touch screen.
  if (/Mac/i.test(platform) && navigator.maxTouchPoints > 1) return null;
  if (/Mac/i.test(platform)) return { slot: "macos", name: "macOS", release: "out" };
  if (/Linux/i.test(platform)) {
    return (await isX86_64Linux(data)) ? { slot: "linux", name: "Linux", release: "out" } : null;
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
