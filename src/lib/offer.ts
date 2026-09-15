/** The launch offer: the yearly plan at half price, for a limited time.
    One place for the figure and the date, read by the home page, the
    Premium page and the Terms. The server applies the same discount at
    checkout when its launch-offer flag is on; the checkout answer is
    what the buyer pays, and the key panel shows it. */
export const offer = {
  /** The plan the offer applies to. */
  plan: "year",
  /** Percent off. */
  percent: 50,
  /** The yearly price during the offer, in euro. */
  price: 18,
  /** The standard yearly price, in euro. */
  standard: 36,
  /** Last day of the offer, inclusive. */
  until: "15 December 2026",
  /** The same day for the machine, for the Terms. */
  untilIso: "2026-12-15",
} as const;
