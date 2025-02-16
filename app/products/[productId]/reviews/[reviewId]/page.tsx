"use client"
import React from "react";
import { notFound } from "next/navigation";

function mathRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const Reviews = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const random = mathRandomInt(2);
  if (random === 1) {
    throw new Error("Error  loading 1 review"); b //in error.tsx file message is going from there
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>Nested Dynamic Routes</h1>
      <h1>
        Review {params.reviewId} of Product {params.productId}
      </h1>
    </div>
  );
};

export default Reviews;
