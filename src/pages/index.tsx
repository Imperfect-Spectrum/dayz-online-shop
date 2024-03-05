import React from 'react';
import { steamStore } from '../stores/steamStore';
import router, { NextSteamAuthApiRequest } from '@/lib/router';
import { NextApiResponse } from 'next';
import { SteamProfile } from '@/lib/passport';
import { Slider } from '@/components/carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
interface Item {
  id: number;
  name: string;
  description: string;
  image_path: string;
  category: string;
  available_servers: string[];
  price: number;
}

export default function Home() {
  return <div className=" h-[100vh]">123</div>;
}
