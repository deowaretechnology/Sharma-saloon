import Image from "next/image";
import { BLOG_POSTS } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="bg-cream py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">OUR BLOG</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink">Beauty Tips, Trends &amp; More</h2>
          </div>
          <a
            href="#blog"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-ink/80 hover:text-gold-deep transition-colors shrink-0"
          >
            View All Blogs <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post) => (
            <a key={post.title} href="#blog" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-cream-deep">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 640px) 30vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] text-muted mb-2">{post.date}</p>
              <h3 className="font-display text-lg text-ink mb-3 leading-snug group-hover:text-gold-deep transition-colors">
                {post.title}
              </h3>
              <span className="text-[12px] font-semibold text-ink/70">
                Read More <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
