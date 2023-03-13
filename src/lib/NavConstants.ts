export const SubMenu: LinksProp[] = [
  { name: "post", href: "/" },
  { name: "How To Post", href: "/" },
  { name: "Life", href: "/" },
  { name: "FAQ", href: "/" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Share", href: "/" },
];
export const Routes = {
  Home: { name: "home", href: "/" },
  OneWeek: { name: "one week", href: "/one-week" },
  DeathNotice: { name: "death notice", href: "/death-notice" },
  Obituary: { name: "obituary", href: "/obituary" },
  Post: { name: "post", href: "/" },
  Life: { name: "life", href: "/" },
  Feedback: { name: "feedback", href: "/" },
  Pricing: { name: "pricing", href: "/pricing" },
  Memorial: { name: "memorial", href: "/memorial" },
  Conversations: { name: "conversations", href: "/conversations" },
  DonationSetup: {
    name: "donation-setup-setup",
    href: "/obituary/donation-setup-setup",
  },
};
export const NavBarLinks = [
  { name: "obituary", href: "/obituary" },
  { name: "one week", href: "/one-week" },
  { name: "death notice", href: "/death-notice" },
  { name: "feedback", href: "/" },
];
export const FooterLinks = [
  // { name: "B2B", href: "/contact-us" },
  // { name: "work with us", href: "/contact-us" },
  { name: "report fraud", href: "/contact-us" },
  { name: "Terms and Privacy Policy", href: "/" },
  // { name: "privacy policy", href: "/privacy-policy" },
  { name: "feedback", href: "/contact-us" },

  // { name: "FAQS", href: "/faqs" },
];
export interface LinksProp {
  name: string;
  href: string;
}
export const AccountLink: LinksProp = {
  name: "my account",
  href: "/my-account",
};
export const LoginLink: LinksProp = {
  name: "my account",
  href: "/my-account",
};
