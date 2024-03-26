import Image from "next/image";
import bigPinkImg from "../../public/images/bigyardpink.jpg";
import closePinkImg from "../../public/images/blossoms.jpg";

export default function Home() {
  return (
    <main className="">
      <div className="flex lg:flex-row">
        <div className="lg:w-1/4 lg:h-[465px] lg:overflow-hidden lg:relative">
          <Image src={bigPinkImg} alt="yard" />
        </div>
        <div className="lg:w-1/2 m-auto">
          <h1 className="text-center text-5xl lg:mb-[15px]">Go Green with GROWGREEN</h1>
          <p className="px-3 text-xl">
            At GrowGreen Lawn and Landscaping, we're more than just a lawn care
            and landscaping company — we're your partners in creating and
            maintaining the outdoor space of your dreams. With a deep-rooted
            passion for customer service, we go beyond simply mowing lawns and
            planting flowers. We believe in nurturing relationships as much as
            we do nurturing gardens, ensuring that every interaction leaves our
            clients not just satisfied, but delighted. Welcome to GrowGreen,
            where your lawn's potential meets our passion for perfection.
          </p>
          <h1 className="text-center text-4xl lg:mt-[30px] lg:mb-[15px]">"My yard has never looked better!"</h1>
          <p className="text-center text-xl">-Mark Rerwin</p>
          <p className="text-center">Satisfied Customer</p>
        </div>
        <div className="lg:w-1/4 lg:h-[465px] lg:overflow-hidden lg:relative">
          <Image src={closePinkImg} alt="yard" />
        </div>
      </div>

      <div className="w-full h-20px bg-[#283618]">
        
      </div>

    </main>
  );
}
