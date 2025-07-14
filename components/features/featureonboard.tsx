import { cn } from "@/lib/utils";
import OnboardCard from "./onboard-card";

const FeatureOnboard = () => {
  return (
    <div
      className={cn(
        "flex h-80 flex-col justify-between space-y-4 rounded-xl border border-neutral-800/50 bg-neutral-950 p-4",
      )}
    >
      <OnboardCard />
      <div>
        <div className="text-sm font-semibold text-white">
          Effortless Onboarding
        </div>
        <div className="mt-2 text-xs text-neutral-400">
          Visualize every step of setup with real-time feedback - crafted for
          clarity and trust.
        </div>
      </div>
    </div>
  );
};

export default FeatureOnboard;
