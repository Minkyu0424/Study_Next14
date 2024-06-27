import Link from "next/link";

export const metadata = {
  title: "Welcome",
  description: "Welcome Next 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Link href={"/movies"}>홈으로</Link>
        {children}
      </body>
    </html>
  );
}
