import { Link } from "react-router-dom";
import type { Banner } from "@/types/banner.types";

export function MiniBannerGrid({ banners }: { banners: Banner[] }) {
  const list = banners.slice(0, 4);
  if (!list.length) return null;

  return (
    <section className="mx-auto max-w-content px-4 py-8">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {list.map((b) => (
          <Link
            key={b.id}
            to={b.link}
            className="group overflow-hidden rounded-[10px] shadow-card transition hover:scale-[1.02] hover:shadow-card-hover"
          >
            <img
              src={b.image_desktop}
              alt={b.alt_ar}
              className="aspect-[16/10] w-full object-cover transition duration-200 group-hover:scale-105"
              loading="lazy"
              width={640}
              height={400}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
