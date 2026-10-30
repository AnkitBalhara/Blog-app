import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { blogId } = await params;
  return {
    title: `Blog ${blogId} `,
  };
};

const page = async ({ params }) => {
  const { blogId } = await params;
  if (isNaN(blogId)) {
    notFound();
  }
  return <div>Jai Shree Ram. Id for the blog is {blogId}</div>;
};

export default page;
