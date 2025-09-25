/** @format */

import ProductDetailsClient from "./ProductDetailsClient";

export default function Page({ params }) {
  const id = params?.id;

  return <ProductDetailsClient productId={id} />;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const svc = await import("../../../src/services/post.service");
    if (svc && typeof svc.listPosts === "function") {
      const posts = await svc.listPosts();
      return (posts || []).map((p) => ({ id: p.id }));
    }
  } catch (e) {
    // swallow and fall back to no prebuilt paths
  }
  return [];
}
