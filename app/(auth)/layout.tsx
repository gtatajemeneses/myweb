export default function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-screen" >
      <h1>Logo de la seccion Auth</h1>
      {children}
    </div>
  );
}