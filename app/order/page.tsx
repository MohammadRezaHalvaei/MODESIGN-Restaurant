import Apps from "@/components/Order/Apps";
import Popular from "@/components/Order/Popular";
import Recently from "@/components/Order/Recently";

export default function OrderPage() {
  return (
    <>
      <Apps />
      <Recently />
      <Popular link="order/app" />
    </>
  );
}
