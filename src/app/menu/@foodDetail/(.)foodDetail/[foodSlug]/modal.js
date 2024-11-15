// app/menu/@foodDetail/(.)foodDetail/[foodSlug]/modal.js

"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Modal({ params }) {
  const router = useRouter();
  const { foodSlug } = params;

  return (
    <div>
      <button onClick={() => router.back()}>بستن</button>
      <h1>جزئیات غذا برای: {foodSlug}</h1>
    </div>
  );
}
