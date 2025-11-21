export const SITE = {
  website: "https://vandalt.io/", // replace this with your deployed domain
  author: "Thomas Vandal",
  profile: "https://vandalt.io/about",
  desc: "Thomas Vandal's personal website",
  title: "vandalt.io",
  ogImage: "vandalt-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: { // Edit button on blog posts
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Montreal", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
