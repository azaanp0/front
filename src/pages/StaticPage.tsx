import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { STORE } from "@/constants/store";
import { PAGE_CONTENT } from "@/data/pageContent";

const PATH_MAP: Record<string, string> = {
  "/about": "about",
  "/privacy": "privacy",
  "/terms": "terms",
  "/returns": "returns",
  "/shipping": "shipping",
  "/warranty": "warranty",
  "/branches": "branches",
  "/affiliate": "affiliate",
  "/blog": "blog",
  "/new": "blog",
  "/bestsellers": "about",
  "/track": "shipping",
};

export default function StaticPage({ title, children }: { title?: string; children?: ReactNode }) {
  const { pathname } = useLocation();
  const key = PATH_MAP[pathname];
  const content = key ? PAGE_CONTENT[key] : null;
  const pageTitle = title ?? content?.title ?? "صفحة";

  return (
    <>
      <Helmet>
        <title>
          {pageTitle} | {STORE.name}
        </title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-10">
        <nav className="mb-6 text-sm text-[var(--store-text-secondary)]">
          <Link to="/" className="hover:text-[var(--color-primary)]">
            الرئيسية
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--store-text-primary)]">{pageTitle}</span>
        </nav>
        <h1 className="mb-6 text-3xl font-bold text-[var(--store-text-primary)]">{pageTitle}</h1>
        <div className="max-w-3xl space-y-4 leading-relaxed text-[var(--store-text-secondary)]">
          {children ??
            (content?.paragraphs.map((p, i) => <p key={i}>{p}</p>) ?? (
              <p>
                للاستفسار تواصلي عبر واتساب{" "}
                <a href={`https://wa.me/${STORE.whatsapp}`} className="text-[var(--color-primary-dark)] underline">
                  {STORE.whatsapp}
                </a>
              </p>
            ))}
        </div>
      </div>
    </>
  );
}
