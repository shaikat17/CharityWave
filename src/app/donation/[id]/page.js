"use client"
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react';

const DonationDetailsPage = ({params}) => {
  const getData = async (category, id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/${category}/${id}`, {
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
    };

    fetchData();
  }, [search, id]);

  return (
    <div>
      {/* {params.id}
      {params.category} */}
    </div>
  );
};

export default DonationDetailsPage;
