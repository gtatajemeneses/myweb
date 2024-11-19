import Sidebar from "@/components/sidebar/Sidebar";

export default function PanelLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
     <Sidebar/>
     {children}
    </div>
  );
}