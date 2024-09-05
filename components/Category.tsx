"use client";
import { topCategoryStyles } from "@/constants";
import { cn } from "@/lib/utils";
import { CategoryProps } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { useTheme } from "next-themes";

export const Category = ({ category }: CategoryProps) => {
  const { resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  if (isDarkTheme === null) {
    return <div>Loading...</div>; // Or a skeleton loader
  }

  const {
    bg,
    bgDark,
    circleBg,
    circleDarkbg,
    text: { main, count, mainDark, countDark },
    progress: { bg: progressBg, bgProgressDark, indicator, darkIndicator },
    icon,
  } =
    topCategoryStyles[category.name as keyof typeof topCategoryStyles] ||
    topCategoryStyles.default;

  return (
    <div
      className={cn(
        "gap-[18px] flex p-4 rounded-xl",
        isDarkTheme ? bgDark : bg
      )}
    >
      <figure
        className={cn(
          "flex-center size-10 rounded-full",
          isDarkTheme ? circleDarkbg : circleBg
        )}
      >
        <Image src={icon} width={20} height={20} alt={category.name} />
      </figure>
      <div className="flex w-full flex-1 flex-col gap-2">
        <div className="text-14 flex justify-between">
          <h2 className={cn("font-medium", isDarkTheme ? mainDark : main)}>
            {category.name}
          </h2>
          <h3 className={cn("font-normal", isDarkTheme ? countDark : count)}>
            {category.count}
          </h3>
        </div>
        <Progress
          value={(category.count / category.totalCount) * 100}
          className={cn("h-2 w-full", isDarkTheme ? bgProgressDark : progressBg)}
          indicatorClassName={cn(
            "h-2 w-full",
            isDarkTheme ? darkIndicator : indicator
          )}
        />
      </div>
    </div>
  );
};
