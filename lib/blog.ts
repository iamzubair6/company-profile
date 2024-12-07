export interface BlogPost {
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface BlogPosts {
  [key: string]: BlogPost;
}

export const blogPosts: BlogPosts = {
  "future-of-cloud-computing": {
    title: "The Future of Cloud Computing: Trends to Watch",
    content: `
      Cloud computing continues to evolve at a rapid pace, transforming how businesses operate and scale their operations. In this article, we'll explore the latest trends shaping the future of cloud computing and their potential impact on businesses.

      ## Key Trends

      ### 1. Edge Computing
      Edge computing is becoming increasingly important as organizations seek to process data closer to its source. This trend is particularly relevant for IoT devices and applications requiring real-time processing.

      ### 2. Serverless Architecture
      Serverless computing continues to gain traction, allowing developers to focus on code without worrying about infrastructure management. This approach offers improved scalability and cost efficiency.

      ### 3. Multi-Cloud Strategies
      Organizations are increasingly adopting multi-cloud approaches to leverage the best services from different providers and minimize vendor lock-in.

      ## Impact on Businesses

      These trends are reshaping how businesses approach their IT infrastructure and application development. Companies that adapt to these changes will be better positioned to compete in an increasingly digital marketplace.
    `,
    author: "John Smith",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  "scalable-applications-microservices": {
    title: "Building Scalable Applications with Microservices",
    content: `
      Microservices architecture has become a popular approach for building scalable and maintainable applications. This article explores best practices and key considerations when implementing microservices.

      ## Key Benefits

      ### 1. Scalability
      Microservices allow individual components to scale independently based on demand, optimizing resource usage and cost efficiency.

      ### 2. Maintainability
      With services separated into distinct units, teams can work independently and deploy updates without affecting the entire system.

      ### 3. Technology Flexibility
      Different services can use different technologies, allowing teams to choose the best tools for specific requirements.

      ## Implementation Considerations

      Success with microservices requires careful planning and consideration of factors such as service boundaries, communication patterns, and data management strategies.
    `,
    author: "Sarah Williams",
    date: "2024-03-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  }
};

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogPosts);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}