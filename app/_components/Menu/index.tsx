'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <nav
        className={` ${
          isOpen
            ? 'fixed inset-0 bg-[var(--color-bg-painted)] text-[var(--color-text-unpainted)] '
            : 'hidden md:block'
        }`}
      >
        <ul className=" flex text-white gap-10">
          <li className=" hover:text-[#343434]">
            <Link href="/" onClick={close}>
              TOP
            </Link>
          </li>
          <li className=" hover:text-[#343434]">
            <Link href="/news" onClick={close}>
              ニュース
            </Link>
          </li>
          <li className=" hover:text-[#343434]">
            <Link href="/business" onClick={close}>
              事業内容
            </Link>
          </li>
          <li className=" hover:text-[#343434]">
            <Link href="/members" onClick={close}>
              メンバー
            </Link>
          </li>
          <li className=" hover:text-[#343434]">
            <Link href="/recruitment" onClick={close}>
              採用情報
            </Link>
          </li>
          <li className=" hover:text-[#343434] mr-10">
            <Link href="/contact" onClick={close}>
              お問い合わせ
            </Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image src="/close.svg" alt="閉じる" width={24} height={24} priority />
        </button>
      </nav>
      <button className=" flex md:hidden cursor-pointer " onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} priority />
      </button>
    </div>
  );
}
