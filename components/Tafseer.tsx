import Image from "next/image";
import Link from "next/link";
import Duroos from "../public/lib/durros-final.json";
import localFont from "next/font/local"

const samarkan = localFont({
  src: '../public/font/samarkan.ttf',
  variable: '--font-samarkan',
})

type RawItem = Record<string, any>;
type DuroosCategory = {
  category: string;
  description: string;
  image: string;
  subcategories: RawItem[];
};

const CATEGORY_SLUG = "tafseerul-quran";
const CATEGORY_NAME = "Tafseerul Quran";

// Change this list (or its order) to pick which surahs appear on the home page.
const FEATURED_SLUGS = ["an-nisa", "al-fatihah", "al-baqarah", "al-imran"];

const ARABIC_FONT = { fontFamily: "'Amiri', 'Scheherazade New', serif" };

const HEX =
  "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]";

const STATUS_COLOR: Record<string, string> = {
  completed: "bg-sky-500",
  ongoing: "bg-emerald-500",
  upcoming: "bg-amber-400",
};

const STATUS_LABEL: Record<string, string> = {
  completed: "Completed",
  ongoing: "Ongoing",
  upcoming: "Coming Soon",
};

// Reads "status" from the JSON; falls back to videos if it is missing.
function getStatus(item: RawItem): string {
  const s = String(item.status ?? "").toLowerCase();
  if (s in STATUS_COLOR) return s;
  return item.videos?.length ? "ongoing" : "upcoming";
}

export default function HomeTafseer() {
  const category = (Duroos as unknown as DuroosCategory[]).find(
    (c) => c.category === CATEGORY_NAME
  );
  if (!category) return null;

  const all = category.subcategories;

  // keep the order defined in FEATURED_SLUGS
  const featured = FEATURED_SLUGS
    .map((slug) => all.find((s) => s.slug === slug))
    .filter(Boolean) as RawItem[];

  const remaining = Math.max(all.length - featured.length, 0);

  return (
    <section className="xxl:mx-16 xl:mx-16 lg:mx-16 sm:mx-12 md:mx-12 xxs:mx-5 xs:mx-5 s:mx-5 xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8">
      <h2 className={`text-dustygray text-4xl md:text-3xl sm:text-2xl xs:text-2xl xxs:text-2xl font-extrabold font-sans ${samarkan.className}`}>
        {category.category}
      </h2>
      <hr className="bg-bgcolor text-2xl my-4" />

      <div className="grid grid-cols-3 gap-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 xs:gap-4 xxs:gap-4 max-w-7xl mx-auto">

        {featured.map((sub) => {
          const status = getStatus(sub);
          return (
            <div key={`${sub.number}-${sub.slug}`}>
              <Link
                href={`${CATEGORY_SLUG}/${sub.slug}`}
                className="flex items-center justify-between p-4 rounded-xl border border-whiterock bg-bgcolor shadow-sm transition hover:border-primarytext px-2 py-1.5 text-sm text-secondarytext hover:bg-whiterock hover:text-primarytext"
              >
                <span className="flex items-center gap-2">
                  <span className={`flex h-12 w-12 items-center justify-center bg-primarytext font-bold text-white ${HEX}`}>{sub.number}.</span>
                  {sub.title}
                  <span className="text-xs text-dustygray">({sub.videos.length})</span>
                </span>
                <span className="flex items-center gap-2">
                  {sub.arabic && (
                    <span dir="rtl" className="text-lg text-mughal" style={ARABIC_FONT}>
                      {sub.arabic}
                    </span>
                  )}
                  <span
                    title={STATUS_LABEL[status]}
                    aria-label={STATUS_LABEL[status]}
                    className={`h-2.5 w-2.5 rounded-full ${STATUS_COLOR[status]}`}
                  />
                </span>
              </Link>

            </div>

          );
        })}
        <div>
          <Link
            href={`https://www.youtube.com/playlist?list=PLmZP1KIsC-hnAHHcPBXl9Dp4mFY5aLUTs`}
            className="flex items-center justify-between p-4 rounded-xl border border-whiterock bg-bgcolor shadow-sm transition hover:border-primarytext px-2 py-1.5 text-sm text-secondarytext hover:bg-whiterock hover:text-primarytext"
          >
            <span className="flex items-center gap-2">
              <span className={`flex h-12 w-12 items-center justify-center bg-primarytext font-bold text-white ${HEX}`}>{29}</span>
              Juz 29
              <span className="text-xs text-dustygray">(17)</span>
            </span>
            <span className="flex items-center gap-2">

              <span dir="rtl" className="text-lg text-mughal" style={ARABIC_FONT}>
                جزء تبارك
              </span>
              <span
                title={"completed"}
                aria-label={"completed"}
                className={`h-2.5 w-2.5 rounded-full bg-sky-500`}
              />
            </span>
          </Link>
        </div>
        <div>
          <Link
            href={`/duroos/tafseerul-quran`}
            className="flex items-center justify-between p-4 rounded-xl border border-whiterock bg-bgcolor shadow-sm transition hover:border-primarytext px-2 py-1.5 text-sm text-secondarytext hover:bg-whiterock hover:text-primarytext"
          >
            <span className="flex items-center gap-2">
              <span className={`flex h-12 w-12 items-center justify-center bg-primarytext font-bold text-white ${HEX}`}>29</span>
              View More
            </span>
            <span className="flex items-center gap-2">
              <span dir="rtl" className="text-lg text-mughal" style={ARABIC_FONT}>
                +110 more
              </span>
            </span>
          </Link></div>
      </div>
    </section>
  );
}