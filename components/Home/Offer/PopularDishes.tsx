import Dishes from "./Dishes";

export default function PopularDishes() {
  return (
    <article className="flex flex-col items-center gap-[68px]">
      <div className="flex flex-col gap-[22px] max-w-[702px] text-center px-9">
        <div className="flex flex-col gap-3 items-center text-[#292E36]">
          <p
            className="font-josephin font-medium text-[15px] w-fit 
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            MENU
          </p>

          <h4 className="h4-title">Popular Dishes</h4>
        </div>
        <p className="parag">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content making.
        </p>
      </div>
      <Dishes />
    </article>
  );
}
