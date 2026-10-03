import { plans } from "./plans";

/** The launch offer: the yearly plan at half price until 3 January 2027
    inclusive, the anniversary of the genesis block. One place for the
    discount and the date, read by the home page, the Premium page and
    the Terms; the prices come from the plans. The server charges the
    same discount while its launch-offer flag is on (GERFAUT_LAUNCH_OFFER
    on the alerts host); the checkout answer is what the buyer pays, and
    the key panel shows it.

    `active` is decided at build time: a site built after the last day
    stops showing the offer on its own, and the flag on the server is
    turned off the same day. */
const percent = 50;
const yearly = plans.find((plan) => plan.id === "year")!;

export const offer = {
  /** The plan the offer applies to. */
  plan: yearly.id,
  /** Percent off. */
  percent,
  /** The yearly price during the offer, in euro. */
  price: (yearly.price * (100 - percent)) / 100,
  /** The standard yearly price, in euro. */
  standard: yearly.price,
  /** Last day of the offer, inclusive, as written on the pages. */
  until: "3 January 2027",
  /** The same day for the machine: the last second of it, UTC. */
  untilIso: "2027-01-03T23:59:59Z",
  /** Whether the pages show the offer, decided when the site is built. */
  active: Date.now() <= Date.parse("2027-01-03T23:59:59Z"),
} as const;
