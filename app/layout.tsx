import { Metadata } from 'next';
import Script from 'next/script';
import { getMeta } from '@/app/_libs/microcms';
import { Fotter } from './_components/InMode/Fotter';
import { PageHeader } from './_components/InMode/Pageheader';
import './globals.css';
import styles from './layout.module.css';
import Favicon from '@/public/logo.png';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'サカイクリニック',
  description: 'Inmode',
};
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
        <main className=" flex justify-center bg-red-50">
          <div className=" max-w-[414px]">
            <PageHeader />
            <div>{children}</div>
            <Fotter />
          </div>
        </main>
      </body>
    </html>
  );
}
