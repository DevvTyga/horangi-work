"use client";

import { useRouter } from "next/navigation";

import cx from "classnames";

export interface LinkButtonProps {
  title: string;
  href: string;
  color: number;
}
export default function LinkButton({ title, href, color }: LinkButtonProps) {
  const router = useRouter();

  const buttonStyle = cx(
    color === 1
      ? "bg-zinc-800"
      : color === 2
      ? "bg-yellow-500"
      : color === 3
      ? "bg-orange-500"
      : color === 4
      ? "bg-gray-300"
      : color === 5
      ? "bg-white text-zinc-800 border border-zinc-800"
      : "bg-zinc-800",
    "text-center text-white text-xs font-semibold py-3 px-2 w-full rounded-full"
  );

  return (
    <button
      onClick={() => {
        router.push(href);
      }}
    >
      <div className={buttonStyle}>
        <p>{title}</p>
      </div>
    </button>
  );
}
