import logo from "@/assets/owr-logo.svg";

import image1 from "@/assets/products/Amazon Echo Dot  (5th Gen).png";
import image2 from "@/assets/products/Amazon Fire TV Stick 4K Max.png";
import image3 from "@/assets/products/Amazon Kindle (16 GB).png";
import image4 from "@/assets/products/Anker MagGo Power Bank.png";
import image5 from "@/assets/products/Apple AirTags (4 pack).png";
import image6 from "@/assets/products/Garmin Sports Watch.png";
import image7 from "@/assets/products/Google Home Nest Hub (2nd Gen).png";
import image8 from "@/assets/products/Google Home Nest Mini (2nd Gen).png";
import image9 from "@/assets/products/Google TV Streamer (4K).png";
import image10 from "@/assets/products/Hard Case Electronics Organiser.png";
import image11 from "@/assets/products/JBL Flip 6 Portable Bluetooth Speaker.png";
import image12 from "@/assets/products/JBL Noise-Cancelling Earphones.png";
import image13 from "@/assets/products/Meta Quest 3S with Batman game.png";
import image14 from "@/assets/products/Mirafit Camo Tactical Rucksack.png";
import image15 from "@/assets/products/Portable Laptop Desk.png";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Prizes = () => {
  const prizesData = [
    { name: "Amazon Echo Dot (5th Gen)", image: image1 },
    { name: "Amazon Fire TV Stick 4K Max", image: image2 },
    { name: "Amazon Kindle (16 GB)", image: image3 },
    { name: "Anker MagGo Power Bank", image: image4 },
    { name: "Apple AirTags (4 pack)", image: image5 },
    { name: "Garmin Sports Watch", image: image6 },
    { name: "Google Home Nest Hub (2nd Gen)", image: image7 },
    { name: "Google Home Nest Mini (2nd Gen)", image: image8 },
    { name: "Google TV Streamer (4K)", image: image9 },
    { name: "Hard Case Electronics Organiser", image: image10 },
    { name: "JBL Flip 6 Portable Bluetooth Speaker", image: image11 },
    { name: "JBL Noise-Cancelling Earphones", image: image12 },
    { name: "Meta Quest 3S with Batman Game", image: image13 },
    { name: "Mirafit Camo Tactical Rucksack", image: image14 },
    { name: "Portable Laptop Desk", image: image15 },
  ];

  return (
    <div className="bg-[url(@/assets/prize_draw_bg.png)] min-h-screen bg-no-repeat bg-cover py-16 px-8 space-y-12">
      {/* <a href="/"> */}
      <img src={logo} alt="" className="mx-auto" />
      {/* </a> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {prizesData.map((prize, index) => (
          <div
            key={index}
            className="flex flex-col gap-0 text-center items-center hover:scale-105 transition-transform duration-300"
          >
            <img src={prize.image} alt="" />
            <h5 className="text-xl text-white">{prize.name}</h5>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full justify-center gap-4 max-w-60 mx-auto">
        <Button
          asChild
          className="bg-owr-blue hover:bg-white hover:text-owr-blue rounded-sm text-lg w-full py-6"
        >
          <a href="/draw">Enter Prize Draw</a>
        </Button>
        <a
          href="/"
          className="flex items-center gap-1 text-white hover:text-owr-blue hover:underline mx-auto"
        >
          <ArrowLeft /> Go Back
        </a>
      </div>
    </div>
  );
};

export default Prizes;
