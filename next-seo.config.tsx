import { NextSeoProps } from "next-seo";
const title = "Next Sklep";
const description = "Testowy sklep zbudowany za pomocą Next.js";
export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title,
  description,
  openGraph: {
    url: `https://sklep-nextjs-alpha.vercel.app/`,
    title,
    description,
    siteName: "Next Sklep",
  },
};
