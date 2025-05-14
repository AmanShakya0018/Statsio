"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

type Props = { text: string };

const SignInButton = ({ text }: Props) => {

  const { status } = useSession();

  return (
    <Button className="bg-green-500 text-white min-w-20 hover:bg-green-600">
      <Link href="/signin">
        {status === "loading" ? (
          <Loader2 className="h-2 w-2 animate-spin" />
        ) : (
          <>{text}</>
        )}
      </Link>
    </Button>
  );
};

export default SignInButton;