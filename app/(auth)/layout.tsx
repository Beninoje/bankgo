import Image from "next/image";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between">
          {children}
          <div className="auth-asset overflow-hidden">
            <div className=" pl-20 mr-[-100px] rounded-[20px]">
              <Image src="/icons/auth_img.svg" alt="homepage img" width={750} height={750} className=' border-4 border-[#FF7E61] rounded-[20px]'/>
            </div>
          </div>
      </main>
    );
  }
  