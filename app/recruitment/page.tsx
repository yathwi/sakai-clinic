import Header from '../_components/Header';

type Props = {
  searchParams: {
    dk: string;
  };
};
export default async function Page({ searchParams }: Props) {
  return (
    <div className="container mx-auto p-10">
      <table className="min-w-full bg-white  border-gray-300 text-lg">
        <tbody>
          <tr className="border-b">
            <th className="py-4 px-4 text-left">職種</th>
            <td className="py-4 px-4">フロントエンドエンジニア</td>
          </tr>
          <tr className="border-b">
            <th className="py-4 px-4 text-left">勤務地</th>
            <td className="py-4 px-4">東京</td>
          </tr>
          <tr className="border-b">
            <th className="py-4 px-4 text-left">給与</th>
            <td className="py-4 px-4">年収600万円〜</td>
          </tr>
          <tr className="border-b">
            <th className="py-4 px-4 text-left">必要なスキル</th>
            <td className="py-4 px-4">React, TypeScript, Next.js</td>
          </tr>
          <tr className="border-b">
            <th className="py-4 px-4 text-left">勤務時間</th>
            <td className="py-4 px-4">9:00〜18:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
