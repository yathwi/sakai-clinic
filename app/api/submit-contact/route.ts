import { NextRequest, NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { lastname, firstname, company, email, message } = req.body;
  if (!lastname) {
    return NextResponse.json(
      {
        status: 'error',
        message: '姓を入力してください',
      },
      {
        status: 400,
      },
    );
  }
  if (!firstname) {
    return NextResponse.json(
      {
        status: 'error',
        message: '名を入力してください',
      },
      {
        status: 400,
      },
    );
  }

  if (!email) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'メールアドレスを入力してください',
      },
      {
        status: 400,
      },
    );
  }
  if (!validateEmail(email)) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'メールアドレスの形式が誤っています',
      },
      {
        status: 400,
      },
    );
  }
  if (!message) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'メッセージを入力してください',
      },
      {
        status: 400,
      },
    );
  }
  if (req.method === 'POST') {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: [email, 'office@project-japan.co.jp'],
      from: 'office@project-japan.co.jp',
      subject: 'お問合せありがとうございました。',
      text: `お問合せを受け付けました。回答をお待ちください。\n氏名：${lastname} ${firstname}\nメールアドレス：${email}\nお問い合わせ内容：${message}`,
      html: `お問合せを受け付けました。回答をお待ちください。<br>
      氏名：${lastname} ${firstname}<br>
      メールアドレス：${email}<br>
      お問い合わせ内容：${message}<br>
     `,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
