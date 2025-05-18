"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
    { title: "Jummuah Khutbah", image: "/images/categories/1.png" },
    { title: "Quran Tafseer", image: "/images/categories/2.png" },
    { title: "Arkan Al Islam", image: "/images/categories/3.png" },
    { title: "Mausamiat", image: "/images/categories/4.png" },
    { title: "Dawrah Islamiyyah (Taweel)", image: "/images/categories/5.png" },
    { title: "Dawrah Islamiyyah (Mukhtasar)", image: "/images/categories/6.png" },
    { title: "Aam Duroos", image: "/images/categories/7.png" },
    { title: "Sister's section", image: "/images/categories/8.png" },
    { title: "Tareeq Ahlul Hadees", image: "/images/categories/9.png" },
];

const CategoriesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-2xl xxs:text-2xl md:text-4xl font-extrabold font-sans mb-20">
                Course Categories | Sheikh Zafarul Hasan Madani
            </h1>

            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-2 xs:gap-4 xxs:gap-4 gap-8 max-w-6xl mx-auto">
                {categories.map((category, idx) => (

                    <div
                        key={idx}
                        className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    ><Link href={`/duroos/Tadween-as-sunnah`}>

                            <Image
                                src={category.image}
                                alt={category.title}
                                width={400}
                                height={200}
                            />
                            <div className="p-4 text-center">
                                <h2 className="text-xl xs:text-base xxs:text-lg xl:text-xl xxl:text-xl font-semibold text-gray-700">{category.title}</h2>
                            </div>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
