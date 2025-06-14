"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock } from "lucide-react";

interface CustomSelectProps {
  value: "7d" | "all";
  onValueChange: (value: "7d" | "all") => void;
}

export default function CustomSelect({
  value,
  onValueChange,
}: CustomSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[140px] border-neutral-800 bg-neutral-950 text-neutral-100 hover:bg-neutral-900 focus:ring-transparent focus:ring-offset-0 data-[state=open]:bg-neutral-900">
        <SelectValue placeholder="Select range" />
      </SelectTrigger>
      <SelectContent className="border-neutral-800 bg-neutral-950">
        <SelectItem
          value="7d"
          className="cursor-pointer text-neutral-100 focus:bg-neutral-800 focus:text-neutral-100"
        >
          <div className="flex items-center gap-1 text-[13px]">
            <Clock className="h-3.5 w-3.5" />
            Last 7 Days
          </div>
        </SelectItem>
        <SelectItem
          value="all"
          className="cursor-pointer text-neutral-100 focus:bg-neutral-800 focus:text-neutral-100"
        >
          <div className="flex items-center gap-1 text-[13px]">
            <Calendar className="h-3.5 w-3.5" />
            All Time
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
