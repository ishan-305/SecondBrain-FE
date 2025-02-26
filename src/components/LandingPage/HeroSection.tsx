import { ArrowRightCircle } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-between pl-[120px] pr-[120px] py-[128px] w-full h-1/2 bg-black">
        <div className="w-auto h-[334px] bg-black">
          <h1 className="w-full h-auto text-white text-wrap text-left text-4xl font-serif font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#AAD9D1] to-[#017373]">
              Intelligent
            </span>{" "}
            cloud-based <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#AAD9D1] to-[#017373]">
              note-taking
            </span>{" "}
            and <br /> collaboration tool
          </h1>
          <p className="mt-4  font-serif   text-white">
            Experience the Power of smart note-taking and transform the way you
            work today.
          </p>
          <Button className="mt-6 rounded-sm font-sans text-black bg-gradient-to-br from-[#AAD9D1] to-[#017373]">
            Sign Up for Free
            <ArrowRightCircle />
          </Button>
        </div>
        <div className="bg-black w-[280px] h-[334px] -translate-y-16 ">
          <Image
            src={"/image.png"}
            alt="Hello"
            width={500}
            height={483}
          ></Image>
        </div>
      </div>
    </>
  );
}
