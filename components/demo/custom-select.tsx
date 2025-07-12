import { Clock } from "lucide-react";

export default function CustomSelect() {
  return (
    <div className="w-[140px] rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-[13px] text-neutral-100">
      <div className="flex items-center gap-1">
        <Clock className="h-3.5 w-3.5" />
        Last 7 Days
      </div>
    </div>
  );
}
