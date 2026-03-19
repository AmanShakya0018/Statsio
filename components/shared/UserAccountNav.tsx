"use client";

import type { User } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

type Props = {
  user: Pick<User, "name" | "image" | "email">;
};

const UserAccountNav = ({ user }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer focus:outline-none">
        <UserAvatar
          className="h-9 w-9 border border-transparent shadow-md ring-1 ring-neutral-200 transition-all duration-200 hover:shadow-lg dark:ring-neutral-800"
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 border bg-card/95 p-0 shadow-xl backdrop-blur-sm"
        align="end"
        sideOffset={8}
      >
        <div className="flex items-center gap-3 border-b bg-muted/30 p-4">
          <UserAvatar
            className="h-10 w-10 shadow-sm"
            user={{
              name: user.name || null,
              image: user.image || null,
            }}
          />
          <div className="flex min-w-0 flex-1 flex-col space-y-1 leading-none">
            {user.name && (
              <p className="truncate text-sm font-semibold text-foreground">
                {user.name}
              </p>
            )}
            {user.email && (
              <p className="truncate text-xs text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>

        <div className="p-1">
          <DropdownMenuItem
            onSelect={(event) => {
              event.preventDefault();
              signOut();
            }}
            className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-500 hover:text-red-100 dark:text-red-500 dark:hover:bg-red-700 dark:hover:text-red-100"
          >
            <LogOut className="mt-0.5 h-4 w-4" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
