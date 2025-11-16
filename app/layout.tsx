import './globals.css';

export const metadata = {
  title: 'User Search Modal',
  description: 'Next.js User Search Modal with reusable components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}