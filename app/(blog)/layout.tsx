// "use client"
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import { useEffect, useState } from "react";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
//     const { setTheme } = useTheme();
//   const { theme, resolvedTheme } = useTheme(); 
//   const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);
//     useEffect(() => {
//       setIsDarkTheme(resolvedTheme === 'dark');
//     }, [resolvedTheme]);
  
//     if (isDarkTheme === null) {
//       return <div>Loading...</div>; 
//     }
    return (
      <main className="w-full h-full">
          {children}
      </main>
    );
  }
  