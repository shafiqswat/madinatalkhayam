/** @format */
"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePosts } from "../../../src/Context/postContext";

export default function ProductDetailsClient({ productId }) {
  const { posts, loading } = usePosts();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId && posts.length > 0) {
      const foundProduct = posts.find(
        (item) => item.id && item.id.toString() === productId
      );
      setProduct(foundProduct);
    }
  }, [productId, posts]);

  useEffect(() => {
    if (product) {
      document.title = `${product.title} | مدينة الخيام المظلات`;
    }
  }, [product]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        جارٍ التحميل...
      </div>
    );
  }

  if (!product) {
    return (
      <p>Product not found. Please check the URL or return to the homepage.</p>
    );
  }

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
        <button className='buyButton'>اشتري الآن</button>
      </div>
    </ProductContainer>
  );
}

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
