import { cn } from "@/lib/utils";
import ComponentContainer from "./component-container";

const F4 = () => {
  return (
    <ComponentContainer>
      <div
        className={cn(
          "relative overflow-hidden",
          "flex h-[30rem] w-full max-w-[350px] items-center justify-center",
          "rounded-md border border-neutral-900 bg-neutral-950",
        )}
      ></div>
    </ComponentContainer>
  );
};
export default F4;

{
  /*
  <VaultLock
  cardTitle="Secure Your Insights"
  cardDescription="With Statsio, your valuable analytics are always safeguarded. Your data vault is protected and effortlessly accessible only when you need it."
/>
  */
}
