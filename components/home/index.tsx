import { Button } from "@/components/ui/button";
import WebsiteLogo from "@/components/WebsiteLogo";
import { siteConfig } from "@/config/site";
import { MousePointerClick } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { SiDiscord } from "react-icons/si";

export default function HomeComponent() {
  const t = useTranslations("Home");

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-24 text-center">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl dark:text-gray-200">
          Next.js{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative"> i18n </span>{" "}
          </span>
          Starter
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-500">
          {t("description")}
        </p>

        <div className="mt-10 flex items-center justify-center gap-2">
          <Button
            className="h-11 rounded-xl px-8 py-2 bg-white text-indigo-500 hover:text-indigo-600 border-2 border-indigo-500"
            variant="outline"
            asChild
          >
            <Link
              href="https://nexty.dev/"
              target="_blank"
              rel="noopener noreferrer"
              title="Get SaaS Version - Nexty.dev"
              prefetch={false}
              className="flex items-center gap-2"
            >
              <MousePointerClick className="w-4 h-4 text-indigo-500" />
              Get SaaS Version
            </Link>
          </Button>
          <Button
            className="h-11 rounded-xl px-8 py-2 bg-white text-indigo-500 hover:text-indigo-600 border-2 border-indigo-500"
            variant="outline"
            asChild
          >
            <Link
              href={
                siteConfig.socialLinks?.discord ||
                "https://discord.com/invite/R7bUxWKRqZ"
              }
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="Join Discord"
              prefetch={false}
              className="flex items-center gap-2"
            >
              <SiDiscord className="w-4 h-4 text-indigo-500" />
              Join Discord
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <h2
          id="who-is-using"
          className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-gray-200 mb-12"
        >
          {t("whoIsUsing")}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {WEBSITE_LOGO_DEMO.map((website) => (
            <a
              key={website.name}
              href={website.url}
              className="flex flex-col items-center p-4 w-[160px]"
            >
              <WebsiteLogo url={website.url} size={36} className="mb-3" />
              <p className="mt-3 line-clamp-2 h-[3rem] text-sm text-slate-600 dark:text-slate-400 text-center">
                {website.name}
              </p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

const WEBSITE_LOGO_DEMO = [
  { name: "J Blog", url: "https://weijunext.com/" },
  { name: "OG Image Generator", url: "https://ogimage.click/" },
  { name: "newTab", url: "https://ntab.dev/" },
  { name: "NextJS 中文文档", url: "https://nextjscn.org/" },
];
