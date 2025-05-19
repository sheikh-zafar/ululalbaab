import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define a type for the category object
type Category = {
  title: string;
  description: string;
  image: string;
};

// Fetch duroos categories from the API
async function getDuroos(): Promise<Category[]> {
  const res = await fetch("https://ululalbaab.vercel.app/api/duroos", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch duroos");
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid duroos data format");
  }

  return data;
}

export default async function DuroosPage() {
  const duroos = await getDuroos();

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-2xl xxs:text-2xl md:text-4xl font-extrabold font-sans mb-20">
        Course Categories | Sheikh Zafarul Hasan Madani
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-2 xs:gap-4 xxs:gap-4 gap-8 max-w-6xl mx-auto">
        {duroos.map((category, idx) => {
          const slug = category.title.replace(/\s+/g, "-");

          return (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/duroos/${encodeURIComponent(slug)}`}>
                <Image
                  src={category.image}
                  alt={category.title}
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl xs:text-base xxs:text-lg xl:text-xl xxl:text-xl font-semibold text-gray-700">
                    {category.title}
                  </h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
