import { Metadata } from "next";
import Link from "next/link";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Blog | Nox Life, LLC",
  description: "Insights, tips, and updates from the Nox Life team.",
};

const posts = [
  {
    title: "5 Strategies for Business Growth in 2024",
    excerpt:
      "Discover proven strategies that successful businesses are using to accelerate growth and stay ahead of the competition.",
    date: "January 15, 2024",
    category: "Business Strategy",
    slug: "strategies-for-business-growth",
  },
  {
    title: "The Importance of Process Optimization",
    excerpt:
      "Learn why streamlining your operations is crucial for efficiency and how to identify areas for improvement.",
    date: "January 8, 2024",
    category: "Operations",
    slug: "importance-of-process-optimization",
  },
  {
    title: "Building a High-Performance Team",
    excerpt:
      "Key insights on developing and nurturing a team that consistently delivers exceptional results.",
    date: "December 20, 2023",
    category: "Leadership",
    slug: "building-high-performance-team",
  },
  {
    title: "Navigating Change: A Leader's Guide",
    excerpt:
      "Change is inevitable. Here's how to lead your organization through transitions successfully.",
    date: "December 12, 2023",
    category: "Leadership",
    slug: "navigating-change-leaders-guide",
  },
  {
    title: "Maximizing ROI on Training Investments",
    excerpt:
      "How to ensure your training programs deliver real value and measurable improvements.",
    date: "December 5, 2023",
    category: "Training",
    slug: "maximizing-training-roi",
  },
  {
    title: "Client Success Stories: Tech Innovators Inc.",
    excerpt:
      "A deep dive into how we helped Tech Innovators Inc. double their revenue through strategic consulting.",
    date: "November 28, 2023",
    category: "Case Study",
    slug: "client-success-tech-innovators",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Insights, tips, and updates from our team of experts.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
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
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {post.title}
                  </h3>
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
