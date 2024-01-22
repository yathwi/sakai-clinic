import { Metadata } from 'next';
import Script from 'next/script';
import { getMeta } from '@/app/_libs/microcms';
import { Fotter } from './_components/InMode/Fotter';
import { PageHeader } from './_components/InMode/Pageheader';
import './globals.css';
import styles from './layout.module.css';
import Favicon from '@/public/logo.png';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMeta();
  if (!data) {
    return {};
  }

  return {
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
    title: 'インモード',
    description: data.description,
    icons: [{ rel: 'icon', url: Favicon.src }],
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      images: [data.ogImage?.url || ''],
    },
    alternates: {
      canonical: data.canonical,
    },
  };
}

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src={`//js.hs-scripts.com/${process.env.HUBSPOT_PORTAL_ID}.js`}
      ></Script>
      <body className={styles.body}>
        <PageHeader />
        <main>{children}</main>
        <Fotter />
      </body>
    </html>
  );
}
