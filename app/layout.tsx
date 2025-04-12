import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadconveer',
  description: 'лиды для вашего бизнеса',
  manifest: `/leadconveer/manifest.json`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="apple-mobile-web-app-title" content="Oleg K." />
      </head>
      <body>{children}</body>
    </html>
  );
}
