"use client";

import { useEffect, useState } from 'react';
import Navbar2 from '@/components/Navbar2';
import ISSCoordinates from '@/components/ISSCoordinates';
import ISSMap from '@/components/ISSMap';
import { fetchISSLocation } from '@/utils/fetchISSLocation';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Redireect from '@/components/Redireect';
import Live from '@/components/Live';
import TechStack2 from '@/components/TechStack2';

export default function Home() {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchAndUpdate = async () => {
        const data = await fetchISSLocation();
        setCoordinates(data);
      };

      fetchAndUpdate();
      const intervalId = setInterval(fetchAndUpdate, 5000);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className='bg-[#111827] text-white'>
      <Navbar2 />
      <ISSCoordinates latitude={coordinates.latitude} longitude={coordinates.longitude} />
      <ISSMap latitude={coordinates.latitude} longitude={coordinates.longitude} />
      <Live/>
      <Features />
      <TechStack2/> 
      <Redireect />
      <Footer />
    </div>
  );
}
