import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LEADCONVEER',
  description: 'лиды для вашего бизнеса',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
