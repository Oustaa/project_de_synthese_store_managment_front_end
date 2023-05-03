import React, { useEffect, useState } from "react";

import ProductCard from "../../../components/Product";

const DisplayProduct = ({ productInfo, images }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (images.length) setImage(URL.createObjectURL(images[0]));
  }, [images, image]);

  return (
    <div>
      <ProductCard {...productInfo} image={image} />
    </div>
  );
};

export default DisplayProduct;
