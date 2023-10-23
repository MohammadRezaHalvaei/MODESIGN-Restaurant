import Link from "next/link";
import { CSSProperties } from "react";

type FeatureTextProps = {
  title: string;
  text: string;
  className?: string;
};

export default function FeatureText({
  title,
  text,
  className,
}: FeatureTextProps) {
  return (
    <div className={`text-[#292E36] ${className || ""}`}>
      <p
        className="font-josephin font-medium text-[15px] w-fit mb-5
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
      >
        FEATURE
      </p>
      <h3 className="h3-title mb-12 max-md:text-4xl max-md:mb-6">{title}</h3>
      <p className="parag text-[#555555] mb-14 max-md:text-lg max-md:mb-9">
        {text}
      </p>
      <Link
        href="/menu"
        className="btn-white border-[#E1B168] px-12 py-5 text-[22px] 
            leading-[27.83px] text-[#E1B168] max-md:px-8 max-md:py-3 max-md:text-lg"
      >
        View Menu
      </Link>
    </div>
  );
}
