import Navbar from "@/components/navbar/Navbar";

export default function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar/>
      <main className="flex flex-col items-center p-24" >
      {children}
      </main>
    </div>
  );
}