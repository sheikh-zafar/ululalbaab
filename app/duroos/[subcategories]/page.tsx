import CrunchyCarousel from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import Duroos from "../../../public/lib/duroos.json"

type DureesSubcategory = {
    title: string;
    author: string;
    description: string;
    image: string;
    YTplaylistlink: string;
    introYTlink: string;
    drivelink: string;
    listenlink: string;
};

type DuroosCategory = {
    category: string;
    description: string;
    image: string;
    subcategories: DureesSubcategory[];
};

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
}


type Params = Promise<{ subcategories: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const { subcategories } = await params;

    try {
        const res = await fetch(`https://ululalbaab.vercel.app/api/duroos/${subcategories}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) throw new Error('Failed to fetch');

        const data: DuroosCategory = await res.json();

        return {

            title:
                `${data.category} | Lecture in Urdu by Sheikh zafarulhasan Madani | zafarulhasan.com`,
            description:
                `Urdu Lectures - ${data.description} | Listen and Download | Zafar ul hasan madani `,
            metadataBase: new URL('https://zafarulhasan.com/duroos'),
            manifest: 'https://zafarulhasan.com/manifest.json',
            alternates: {
                canonical: 'https://zafarulhasan.com/duroos'
            },
            verification: {
                google: 'AkxGbeUiN14LV567z1U8sIVKZEfNYwrC20ftAaq5CcA',
                yahoo: 'yahoo',
                other: {
                    me: ['audios.shkzafars@gmail.com', 'https://zafarulhasan.com/duroos']
                }
            },
            openGraph: {
                title: `${data.category} | Lecture in Urdu by Sheikh zafarulhasan Madani | zafarulhasan.com`,
                description: `Urdu Lectures - ${data.description} | Listen and Download | Zafar ul hasan madani `,
                url: 'https://zafarulhasan.com/duroos',
                siteName: 'Urdu Lectures of Sheikh Zafarulhasan Madani',
                images: [
                    {
                        url: 'https://zafarulhasan.com/favicon.png',
                        width: 48,
                        height: 48,
                    },
                    {
                        url: 'https://zafarulhasan.com/icon-192x192.png',
                        width: 192,
                        height: 192
                    },
                    {
                        url: 'https://zafarulhasan.com/icons/icon-512x512.png',
                        width: 512,
                        height: 512,
                        alt: 'urdu bayan'
                    }
                ],
                locale: 'en_US',
                type: 'website',
            }
        }
    } catch {
        return {
            title: "Category Not Found",
            description: "The requested category could not be found.",
        };
    }
}

export default async function SubcategoriesPage({ params }: { params: Params }) {
    const { subcategories } = await params;


    // 🚫 Redirect to /comingsoon if in blocked list
    const blockedSubcategories = ["Arkan-Al-Islam", "Mausamiat", "Tareeq-Ahlul-Hadith", "Jummu'ah-Khutbah"];
    if (blockedSubcategories.includes(decodeURIComponent(subcategories))) {
        redirect('/comingsoon');
    }

    const res = await fetch(`https://ululalbaab.vercel.app/api/duroos/${subcategories}`);

    if (!res.ok) notFound();

    const data: DuroosCategory = await res.json();
    return (
        <div className="p-4 max-w-7xl mx-auto my-20">
            <CrunchyCarousel />
            <h1 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-2xl xxs:text-2xl md:text-4xl font-extrabold font-sans">
                {data.category}
            </h1>
            <hr className="bg-bgcolor text-2xl" />
            <p className="text-text-primary text-lg md:text-base xs:text-xs xxs:text-xs my-4 xs:my-3 xxs:my-3">
                {data.description}
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 xs:gap-4 xxs:gap-4 gap-8 max-w-6xl mx-auto my-20">
                {data.subcategories.map((sub, index) => {
                    const courseSlug = slugify(sub.title);
                    return (
                        <div key={index} className="border rounded-lg p-4 shadow flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-semibold">{sub.title}</h2>
                                {sub.image && (
                                    <Image
                                        src={sub.image}
                                        alt={sub.title}
                                        width={400}
                                        height={200}
                                        className="w-full h-auto object-cover my-4"
                                    />
                                )}
                            </div>
                            <Link
                                href={`/duroos/${subcategories}/${courseSlug}`}
                                className="mt-4 text-center py-2 px-4 rounded font-semibold bg-button-green hover:bg-button-greenhover"
                            >
                                Go to Course
                            </Link>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
