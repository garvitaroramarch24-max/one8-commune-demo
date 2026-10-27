/**
 * Convention: any text value in src/data/siteData.ts that starts with "[" and ends with "]"
 * is an unverified placeholder. The UI highlights these so nothing unconfirmed passes as fact.
 * Replace the value with the real detail (without brackets) and the highlight disappears.
 */
export function isPlaceholder(value: string): boolean {
  const v = value.trim();
  return v.startsWith("[") && v.endsWith("]");
}
