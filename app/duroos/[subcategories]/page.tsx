'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Subcategory = {
  title: string;
  description: string;
  image?: string;
};

type DuroosCategory = {
  category: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
};

export default function SubcategoriesPage() {
  const params = useParams();
  const subcategories = Array.isArray(params.subcategories)
    ? params.subcategories[0]
    : params.subcategories;

  const [data, setData] = useState<DuroosCategory | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!subcategories) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://ululalbaab.vercel.app/api/duroos/${subcategories}`);
        console.log(res)
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const json = await res.json();
        console.log(json)
        setData(json);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      }
    };

    fetchData();
  }, [subcategories]);

  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{data.category}</h1>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <img src={data.image} alt={data.category} className="w-full max-h-64 object-cover rounded-lg mb-6" />

      <div className="grid gap-4 sm:grid-cols-2">
        {data.subcategories.map((sub, index) => (
          <div key={index} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{sub.title}</h2>
            <p className="text-gray-600">{sub.description}</p>
            {sub.image && (
              <img src={sub.image} alt={sub.title} className="mt-2 w-full h-40 object-cover rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
