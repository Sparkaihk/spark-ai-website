import type { Locale } from "./types";

function normalize(value: string): Locale | undefined {
  const tag = value.trim().toLowerCase();
  if (/^zh-(?:tw|hk|mo|hant)(?:-|$)/.test(tag)) return "zh-TW";
  if (/^zh(?:-|$)/.test(tag)) return "zh-CN";
  if (/^en(?:-|$)/.test(tag)) return "en";
}

export function resolveLocale(saved?: string | null, languages = ""): Locale {
  const preference = saved ? normalize(saved) : undefined;
  if (preference) return preference;
  const candidates = languages.split(",").map((item, index) => {
    const [tag, ...parameters] = item.split(";");
    const quality = parameters.find((value) => value.trim().startsWith("q="));
    return { locale: normalize(tag), quality: quality ? Number(quality.trim().slice(2)) : 1, index };
  }).filter((item) => item.locale && item.quality > 0 && item.quality <= 1)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);
  return candidates[0]?.locale ?? "en";
}
