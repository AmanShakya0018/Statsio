import { cn } from "@/lib/utils";
import ComponentContainer from "./component-container";

const F3 = () => {
  return (
    <ComponentContainer>
      <div
        className={cn(
          "relative",
          "flex max-w-[350px] items-center justify-center",
          "rounded-lg border border-neutral-900 bg-neutral-950 px-6 pb-2 pt-6",
        )}
      >
        <div className="relative mx-auto h-[270px] w-[264px] rounded-[44px] bg-neutral-800 p-1.5"></div>
      </div>
    </ComponentContainer>
  );
};

export default F3;
