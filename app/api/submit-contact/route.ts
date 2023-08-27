import { NextRequest, NextResponse } from 'next/server';

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function POST(request: NextRequest) {
  const json = await request.json();
  const { lastname, firstname, company, email, message } = json;
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
  if (!company) {
    return NextResponse.json(
      {
        status: 'error',
        message: '会社名を入力してください',
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
  const result = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        context: {
          hutk: request.cookies.get('hubspotutk')?.value,
          pageUri: request.headers.get('referer'),
        },
        fields: [
          {
            objectTypeId: '0-1',
            name: 'lastname',
            value: lastname,
          },
          {
            objectTypeId: '0-1',
            name: 'firstname',
            value: firstname,
          },
          {
            objectTypeId: '0-1',
            name: 'company',
            value: company,
          },
          {
            objectTypeId: '0-1',
            name: 'email',
            value: email,
          },
          {
            objectTypeId: '0-1',
            name: 'message',
            value: message,
          },
        ],
      }),
    },
  ).then((res) => res.json());
  return NextResponse.json(result);
}

//   if (req.method === 'POST') {
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: [email, 'office@project-japan.co.jp'],
//   from: 'office@project-japan.co.jp',
//   subject: 'お問合せありがとうございました。',
//   text: `お問合せを受け付けました。回答をお待ちください。\n氏名：${lastname} ${firstname}\nメールアドレス：${email}\nお問い合わせ内容：${message}`,
//   html: `お問合せを受け付けました。回答をお待ちください。<br>
//   氏名：${lastname} ${firstname}<br>
//   メールアドレス：${email}<br>
//   お問い合わせ内容：${message}<br>
//  `,
// };
