import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateStaticParams } from "./generateStaticParams";
import MotionDiv from "./MotionDiv";

export default async function BlogPost({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const slug = (await params)?.slug;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16">
      <article className="max-w-4xl mx-auto px-4 py-24">
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <MotionDiv post={post} />
      </article>
    </div>
  );
}

export { generateStaticParams };
