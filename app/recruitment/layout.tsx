import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '採用情報｜太光設備株式会社',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Recruitment" src="/add/incompany.jpg" sub="採用情報" />
      <Sheet>{children}</Sheet>
    </>
  );
}
