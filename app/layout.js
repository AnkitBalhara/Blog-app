import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Company Blog",
  description: "Latest articles and updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
