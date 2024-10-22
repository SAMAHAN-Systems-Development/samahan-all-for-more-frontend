import '@/styles/globals.css';

export default function AdminLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      {children}
    </section>
  );
}
