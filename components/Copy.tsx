"use client";
import { useState } from "react";

import { Button } from "./ui/button";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

const Copy = ({ title }: { title: string }) => {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = () => {
    // toast({
    //     title: "Scheduled: Catch up",
    //     description: "Friday, February 10, 2023 at 5:57 PM",
    //     action: (
    //         <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
    //       ),
    //   })
    navigator.clipboard.writeText(title);
    setHasCopied(true);
    
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);

  };

  return (
    <button
      data-state="closed"
      className="p-2 cursor-pointer  rounded-md copy_btn flex justify-between items-center"
      onClick={copyToClipboard}
    >
      {/* <p className="line-clamp-1 w-full max-w-full text-xs font-medium text-white">
        {title}
      </p> */}

      {!hasCopied ? (
        <Image src="/icons/copy.svg" width={15} height={15} alt="copy svg"/>
      ) : (
        <Image src="/icons/check.svg" width={15} height={15} alt="check svg"/>
      )}
    </button>
  );
};

export default Copy;