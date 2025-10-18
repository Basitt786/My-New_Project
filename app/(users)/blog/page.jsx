import BlogContent from "@/components/BlogContent";



export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <BlogContent />
   </>
  )
}
