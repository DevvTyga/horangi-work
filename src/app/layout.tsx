import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://horangi.work/"),
  title: "개발자 타이가",
  description: "K-POP 덕후 개발자 작업물 모음집",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://horangi.work/",
    title: "개발자 타이가",
    description: "K-POP 덕후 개발자 작업물 모음집",
    images: [
      {
        url: "https://horangi.work/meta.png",
        width: 800,
        height: 400,
        alt: "개발자 타이가",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "개발자 타이가",
    description: "K-POP 덕후 개발자 작업물 모음집",
    site: "https://horangi.work/",
    images: [
      {
        url: "https://horangi.work/meta.png",
        width: 800,
        height: 400,
        alt: "개발자 타이가",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-suite">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-lg w-full">{children} </div>
        </div>
      </body>
    </html>
  );
}
