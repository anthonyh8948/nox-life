import { Metadata } from "next";
import Link from "next/link";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import PageHero from "@/components/ui/PageHero";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Nox Life, LLC",
  description: "Insights, tips, and updates from the Nox Life team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights, tips, and updates from our team of experts."
      />

      <Section>
        <SectionHeader
          title="Latest Posts"
          subtitle="Stay informed with our latest thoughts and insights."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                <div className="h-40 bg-gray-800 rounded-t-xl -m-6 mb-4 flex items-center justify-center">
                  <span className="text-slate-400">Featured Image</span>
                </div>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
