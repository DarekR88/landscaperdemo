import Image from "next/image";
import bigPinkImg from "../../public/images/bigyardpink.jpg";
import closePinkImg from "../../public/images/blossoms.jpg";
import retainingImg from "../../public/images/retainingwall.jpg";

export default function Home() {
  return (
    <main className="">
      <div className="flex lg:flex-row">
        <div className="lg:w-1/4 lg:h-[465px] lg:overflow-hidden lg:relative">
          <Image src={bigPinkImg} alt="yard" />
        </div>
        <div className="lg:w-1/2 m-auto">
          <h1 className="text-center flex flex-row text-5xl lg:mb-[15px]">
            Go Green with{" "}
            <span className="text-[45px] text-[#606C38]">
              <span className="text-[#283618]"> GROW</span>GREEN
            </span>
          </h1>
          <p className="px-3 text-xl">
            At GrowGreen Lawn and Landscaping, we&#39;re more than just a lawn care
            and landscaping company — we&#39;re your partners in creating and
            maintaining the outdoor space of your dreams. With a deep-rooted
            passion for customer service, we go beyond simply mowing lawns and
            planting flowers. We believe in nurturing relationships as much as
            we do nurturing gardens, ensuring that every interaction leaves our
            clients not just satisfied, but delighted. Welcome to GrowGreen,
            where your lawn&#39;s potential meets our passion for perfection.
          </p>
          <h1 className="text-center text-4xl lg:mt-[30px] lg:mb-[15px]">
            "My yard has never looked better!"
          </h1>
          <p className="text-center text-xl">-Mark Rerwin</p>
          <p className="text-center">Satisfied Customer</p>
        </div>
        <div className="lg:w-1/4 lg:h-[465px] lg:overflow-hidden lg:relative">
          <Image src={closePinkImg} alt="yard" />
        </div>
      </div>

      <div className="w-full h-[10px] bg-[#283618]"></div>

      <div className="relative text-[#283618]">
        <div className="w-full flex items-end lg:h-[500px] overflow-hidden">
          <Image src={retainingImg} alt="lawn" />;
          <div className="absolute h-full w-1/2  bg-black opacity-50 border-r-4 border-[]"></div>
          <div className="absolute left-[100px] bottom-[50px] text-white">
            <p className="text-[50px]">More than lawn care!</p>
            <ul className="list-disc list-inside">
              <li className="text-[45px]">Retaining Walls</li>
              <li className="text-[45px]">Pavers</li>
              <li className="text-[45px]">Concrete</li>
              <li className="text-[45px]">And More!</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
