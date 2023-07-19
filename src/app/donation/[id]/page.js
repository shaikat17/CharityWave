"use client"
import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
import { useEffect } from 'react';

const DonationDetailsPage = ({params}) => {
  const [singleData, setSingleData] = useState([])
  const getData = async (category, id) => {
    try {
      const res = await fetch(`https://charity-wave.vercel.app/api/${category}/${id}`, {
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      return null; // Handle error case appropriately
    }
  };

  const searchParams = useSearchParams();
  const search = searchParams.get('category');
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(search, id);
      console.log(data);
      setSingleData(data)
    };

    fetchData();
  }, [search, id]);

  return (
    <div>
      {/* {singleData} */}
    </div>
  );
};

export default DonationDetailsPage;
