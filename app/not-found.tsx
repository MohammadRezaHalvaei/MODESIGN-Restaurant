import Image from "next/image";
import notFoundImg from "@/public/not-found.png";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-12 py-[150px] items-center">
      <Image src={notFoundImg} alt="Not Found Image" />

      <div className="flex flex-col">
        <div className="mb-[50px] text-center">
          <h3 className="font-cormorant leading-[38.55px] text-[50px] mb-[30px]">
            Whoops, Nothing delicious to find here!
          </h3>
          <p className="parag text-[#555]">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <Link href="/" className="mx-auto">
          <button
            className="btn-gold text-[22px] text-[#292E36] leading-[27.83px] px-11 py-5 w-fit
          hover:border-[#292E36]"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
