import MenuTitle from "./MenuTitle";
import StarterMenu from "./StarterMenu";

export default function Menu() {
  return (
    <section
      className="mx-auto py-[150px] gap-36 grid grid-cols-[0.6fr_1fr] max-w-[1378px] 
      max-lg:grid-cols-1 max-lg:gap-20 max-lg:py-10 max-sm:py-4"
    >
      <MenuTitle />

      <StarterMenu />
    </section>
  );
}
