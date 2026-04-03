"use client";

import Link from "next/link";
import { useState } from "react";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/constant/blog";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";

export function BlogLandingContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Get categories that have posts
  const categoriesWithPosts = BLOG_CATEGORIES.filter((category) =>
    BLOG_POSTS.some((post) => post.category.includes(category.slug))
  );

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "all"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category.includes(selectedCategory));

  return (
    <Section className="py-12">
      {/* Hero Section */}
      <div className="text-center my-16">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore insights on technology, design, and life. Learn about Next.js dynamic routing patterns and more.
        </p>
      </div>

      {/* Dynamic Routes Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Dynamic Routing Patterns</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Dynamic Route 1 */}
          <Card className="border-primary/20 bg-primary/5 transition-all hover:shadow-lg w-full">
            <CardHeader>
              <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary text-xs font-mono mb-2">
                [slug]
              </div>
              <CardTitle>Dynamic Segment</CardTitle>
              <CardDescription>
                Exact match for single segments. Used for individual blog posts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted p-1 rounded font-mono block mb-4">
                /blog/getting-started-with-nextjs
              </code>
              <Link href="/blog/getting-started-with-nextjs" className="text-primary hover:underline text-sm font-medium">
                View Example →
              </Link>
            </CardContent>
          </Card>

          {/* Dynamic Route 2 */}
          <Card className="border-blue-500/20 bg-blue-500/5 transition-all hover:shadow-lg w-full">
            <CardHeader>
              <div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-500 text-xs font-mono mb-2">
                [...slug]
              </div>
              <CardTitle>Catch-all Segment</CardTitle>
              <CardDescription>
                Matches one or more segments. Great for nested categories or crumbs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted p-1 rounded font-mono block mb-4">
                /blog/category/tech/nextjs
              </code>
              <Link href="/blog/category/tech/nextjs" className="text-blue-500 hover:underline text-sm font-medium">
                View Example →
              </Link>
            </CardContent>
          </Card>

          {/* Dynamic Route 3 */}
          <Card className="border-purple-500/20 bg-purple-500/5 transition-all hover:shadow-lg w-full">
            <CardHeader>
              <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-500 text-xs font-mono mb-2">
                [[...slug]]
              </div>
              <CardTitle>Optional Catch-all</CardTitle>
              <CardDescription>
                Matches zero or more segments. Perfect for filterable archives or dates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted p-1 rounded font-mono block mb-4">
                /blog/date/2025/02
              </code>
              <Link href="/blog/date/2025/02" className="text-purple-500 hover:underline text-sm font-medium">
                View Example →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Posts Section with Filters */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Posts</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className="px-4 py-2"
          >
            All ({BLOG_POSTS.length})
          </Button>
          {categoriesWithPosts.map((category) => {
            const count = BLOG_POSTS.filter((post) => post.category.includes(category.slug)).length;
            return (
              <Button
                key={category.slug}
                variant={selectedCategory === category.slug ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.slug)}
                className="px-4 py-2"
              >
                {category.name} ({count})
              </Button>
            );
          })}
        </div>

        {/* Filtered Posts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group h-full border hover:border-primary/50 hover:bg-muted/30 transition-all">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.category.map((cat) => {
                      const category = BLOG_CATEGORIES.find(c => c.slug === cat);
                      return (
                        <Badge key={cat} variant="secondary" className="text-xs">
                          {category?.name || cat}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found in this category.</p>
          </div>
        )}
      </div>
    </Section>
  );
}