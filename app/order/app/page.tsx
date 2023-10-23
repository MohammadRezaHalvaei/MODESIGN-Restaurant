import Popular from "@/components/Order/Popular";
import AppBrief from "@/components/Order/Single/AppBrief";
import AppScreen from "@/components/Order/Single/AppScreen";

export default function page() {
  return (
    <>
      <AppBrief />
      <AppScreen />
      <Popular link="menu" />
    </>
  );
}
