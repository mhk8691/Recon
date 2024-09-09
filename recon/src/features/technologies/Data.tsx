import { rows as rows1 } from "../inventory/Data";
export function createData(
  technology: {
    name: string;
    icon: string;
    count: number | string;
    description: string;
  },
  description: string
) {
  return {
    technology,
    description,

    history: [rows1[0], rows1[1], rows1[2]],
  };
}
export const rows = [
  createData(
    {
      name: "Cloudflare",
      icon: "https://storage.googleapis.com/pdcp-assets-dev/icons/CloudFlare.svg",
      count: "545",
      description: "CDN",
    },
    "React is a JavaScript library for building user interfaces."
  ),
  createData(
    {
      name: "Cloudflare",
      icon: "https://storage.googleapis.com/pdcp-assets-dev/icons/CloudFlare.svg",
      count: "545",
      description: "CDN",
    },
    "React is a JavaScript library for building user interfaces."
  ),
  createData(
    {
      name: "Cloudflare",
      icon: "https://storage.googleapis.com/pdcp-assets-dev/icons/CloudFlare.svg",
      count: "545",
      description: "CDN",
    },
    "React is a JavaScript library for building user interfaces."
  ),
  createData(
    {
      name: "Cloudflare",
      icon: "https://storage.googleapis.com/pdcp-assets-dev/icons/CloudFlare.svg",
      count: "545",
      description: "CDN",
    },
    "React is a JavaScript library for building user interfaces."
  ),
  createData(
    {
      name: "Cloudflare",
      icon: "https://storage.googleapis.com/pdcp-assets-dev/icons/CloudFlare.svg",
      count: "545",
      description: "CDN",
    },
    "React is a JavaScript library for building user interfaces."
  ),
  createData(
    {
      name: "Cloudflare",
      icon: "https://storage.googleapis.com/pdcp-assets-dev/icons/CloudFlare.svg",
      count: "545",
      description: "CDN",
    },
    "React is a JavaScript library for building user interfaces."
  ),
  createData(
    {
      name: "Cloudflare",
      icon: "https://storage.googleapis.com/pdcp-assets-dev/icons/CloudFlare.svg",
      count: "545",
      description: "CDN",
    },
    "React is a JavaScript library for building user interfaces."
  ),
];
