import {
  Album,
  VideoPlayer,
  Audio,
  FlipBook,
} from "@features/premium-obituary";
import { uuid } from "./Utils";

export const footer: string = `We built Damirifa with one simple goal; Create a respectable, dedicated space where family and friends across Ghana and the globe come together to lend their support, mourn, reminisce and celebrate the lives of loved ones departed. We believe that an honourable, elegant farewell is an important part of the grieving and healing process. We are completely committed to the integrity of this website and your announcement page. We hope you enjoy using Damirifa and we welcome your feedback.`;
export const donationTerms: string[] = [
  "Only the widow(er), Parent or adult child of the deceased are eligible to receive funds donated. An eligible recipient must be selected to receive funds donated to the family.",
  "A Ghanaian registered mobile money account is required to receive donations. Funds are deposited to the recipient’s mobile money money account within 24 hours.",
  "Standard mobile money and bank fees apply.",
  "To minimize fraud, we will require additional information to validate the relationship of funds recipients to the deceased. This could take up to 48 hours. The fund will display on your obituary page ONLY after validation is complete.",
];
export const searchItems: string[] = [
  "Obituary",
  "Death Notice",
  "One Week",
  "All",
];
export const searchDateItems: string[] = [
  "This Week",
  "This Month",
  "Past 6 Months",
  "This Year",
  "Past 10 years",
  "All",
];
export const FeaturesAvailable = [
  {
    label: "album",
    backgroundImageSrc: "/constants/jerry-1.jpg",
    svgOverlaySrc: "/svgs/album.svg",
    feature: Album,
  },
  {
    label: "video",
    backgroundImageSrc: "/assets/img/video.jpg",
    svgOverlaySrc: "/svgs/videos.svg",
    feature: VideoPlayer,
  },
  {
    label: "audio tribute",
    backgroundImageSrc: "/assets/img/audio-tribute.jpg",
    svgOverlaySrc: "/svgs/tribute.svg",
    feature: Audio,
  },
  {
    label: "program",
    backgroundImageSrc: "/assets/img/funeral-program.jpg",
    svgOverlaySrc: "/svgs/program.svg",
    feature: FlipBook,
  },
];
export const GalleryImages: string[] = [
  "/constants/gallery-1.jpg",
  "/constants/gallery-2.jpg",
  "/constants/gallery-3.jpg",
  "/constants/gallery-4.jpg",
  "/constants/gallery-5.jpg",
  "/constants/gallery-6.jpg",
  "/constants/gallery-1.jpg",
  "/constants/gallery-2.jpg",
  "/constants/gallery-3.jpg",
  "/constants/gallery-4.jpg",
  "/constants/gallery-5.jpg",
  "/constants/gallery-6.jpg",
];

export const FormPreviewPlaceholder = {
  image: "/images/default.png",
  title: "Title",
  announcementTitle: "Title",
  pronouncement: "No Pronouncement",
  dateOfBirth: "Year of Birth",
  dateOfDeath: "Year of Death",
  quote: "Deceased Quote",
  firstName: "First Name",
  audioAnnouncement: "No Audio Announcement",
  noChiefMourners: "No Chief Mourners",
  placeOfBirth: "No Place of Birth",
  biography: "No biography",
  events: "No Events",
  family: "No Relatives",
  familyContact: "No Family Contact",
};

export const PremiumPlaceholderInformation = {
  album_images: GalleryImages,
  media: {
    album_images: GalleryImages,
    audio_announcement: "/audio/dirge-flute.mp3",
  },
  eventsAndLiveStream: {
    events: [],
    liveStreams: [],
  },
  titleBiography: {
    title: "Call to Glory",
    pronouncement:
      " Announce with deep sorrow the sudden death of their beloved",
    biography: `Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
ultricies mi vitae est. Mauris placerat eleifend leo. malesuada
fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
ultricies eget, tempor Pellentesque habitant morbi tristique
senectus et netus et malesuada fames ac turpis egestas. Vestibulum
tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
vitae est. Mauris placerat eleifend leo. malesuada fames ac turpis
egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
tempor Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
placerat eleifend leo. malesuada fames ac turpis egestas.
Vestibulum tortor quam, feugiat vitae, ultricies eget`,
  },
  family: {
    relatives: [],
    contactPerson: {},
    chief_mourners: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua Ut enim ad minim veniam. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua Ut enim ad minim veniam. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua Ut enim ad minim veniam.`,
  },

  deceased_information: {
    image: "/constants/jerry.jpg",
    notable_position: " Ex-President",
    alias: `J.J`,
    prefix: "Flt.Lt.",
    first_name: "Jerry",
    middle_name: "John",
    place_of_birth: "Accra",
    last_name: "Rawlings",
    date_of_birth: "10/10/1974",
    date_of_death: "10/10/2020",
    quote: `"Don't let evil in the world kill the love in your
              heart! Continue to LOVE one another!"`,
  },
};
