/** @format */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { usePosts } from "../Context/postContext";

const ProductDetailsPage = () => {
  const { id } = useParams(); // Assume each product has a unique ID in the URL
  const { posts, loading: postsLoading } = usePosts();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Log the id for debugging
    console.log("Product ID from URL:", id);

    // Check if id is valid
    if (!id) {
      console.error("No ID found in the URL.");
      setLoading(false);
      return;
    }

    // Wait for posts to load
    if (postsLoading) {
      return;
    }

    // Find the product based on the ID
    const foundProduct = posts.find(
      (item) => item.id && item.id.toString() === id
    );

    if (!foundProduct) {
      console.error("Product not found for ID:", id);
    }

    setProduct(foundProduct);
    setLoading(false);
  }, [id, posts, postsLoading]);

  if (loading || postsLoading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return (
      <p>Product not found. Please check the URL or return to the homepage.</p>
    );
  }

  // SEO content
  document.title = `${product.title} | مدينة الخيام المظلات`;
  document
    .querySelector('meta[name="description"]')
    .setAttribute(
      "content",
      `Explore ${product.title} at مدينة الخيام المظلات. Discover high-quality tents, shades, and carports tailored for your needs. Call us at 0500173090 for custom solutions.`
    );

  return (
    <ProductContainer>
      <div className='productImage'>
        <img
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className='productInfo'>
        <h1>{product.title}</h1>
        <p className='arabic'>{product.span}</p>
        <p>{product.description}</p>
        <button className='buyButton'>اشتري الآن</button>{" "}
        {/* "Buy Now" in Arabic */}
      </div>
    </ProductContainer>
  );
};

export default ProductDetailsPage;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;

  .productImage {
    img {
      width: 100%;
      max-width: 800px;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .productInfo {
    text-align: center;
    margin-top: 30px;

    h1 {
      font-size: 2.5em;
      color: #222;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2em;
      color: #555;
      line-height: 1.6;
    }

    .arabic {
      font-family: "Arial", sans-serif;
      font-size: 1.2em;
      color: #333;
      margin: 15px 0;
    }

    .buyButton {
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 12px 25px;
      cursor: pointer;
      font-size: 1.1em;
      margin-top: 20px;
      transition: background-color 0.3s ease, transform 0.3s ease;

      &:hover {
        background-color: #218838;
        transform: scale(1.05);
      }
    }
  }
`;
