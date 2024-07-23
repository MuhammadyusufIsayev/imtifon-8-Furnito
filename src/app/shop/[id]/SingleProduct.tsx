"use client";
import React, { useEffect, useState } from "react";
import { FaStar, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import share from "@/app/assets/icons/share.svg";
import likeSmall from "@/app/assets/icons/like-small.svg";
import compare from "@/app/assets/icons/compare.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Product = {
  _id: string;
  title: string;
  subtitle: string;
  price: number;
  rating: number;
  description: string;
  image: string;
};

const SingleProduct = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [relatedLoading, setRelatedLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(
            `https://ecommerce-backend-fawn-eight.vercel.app/api/products/${id}`
          );
          const data: Product = await response.json();
          setProduct(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching product:", error);
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-backend-fawn-eight.vercel.app/api/products"
        );
        const data: Product[] = await response.json();
        setRelatedProducts(data.slice(0, 4));
        setRelatedLoading(false);
      } catch (error) {
        console.error("Error fetching related products:", error);
        setRelatedLoading(false);
      }
    };

    fetchRelatedProducts();
  }, []);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isProductInCart = cart.some((item: Product) => item._id === product?._id);

    if (isProductInCart) {
      toast.info("Product is already in the cart");
    } else {
      const productToAdd = { ...product, quantity };
      cart.push(productToAdd);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Product added to cart");
    }
  };

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isProductInCart = cart.some((item: Product) => item._id === product._id);

    if (isProductInCart) {
      toast.info("Product is already in the cart");
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Product added to cart");
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ToastContainer />
      <div className="bg-[#F9F1E7]">
        <div className="container mx-auto flex items-center h-[100px]">
          <p className="text-[#9F9F9F]">
            Home {">"} Shop {">"}{" "}
            <span className="text-black border-l-[2px] border-[#9F9F9F] pl-[10px] ml-[10px]">
              {product.title}
            </span>
          </p>
        </div>
      </div>
      <div className="container mx-auto my-[35px] flex items-center">
        <div className="w-[50%] flex gap-[35px]">
          <div className="flex flex-col gap-[35px]">
            <img
              className="w-[80px] h-[80px] rounded-[10px]"
              src={product.image}
              alt={`Product image 1`}
            />
            <img
              className="w-[80px] h-[80px] rounded-[10px]"
              src={product.image}
              alt={`Product image 2`}
            />
            <img
              className="w-[80px] h-[80px] rounded-[10px]"
              src={product.image}
              alt={`Product image 3`}
            />
            <img
              className="w-[80px] h-[80px] rounded-[10px]"
              src={product.image}
              alt={`Product image 4`}
            />
          </div>
          <img
            className="w-[425px] h-[500px] rounded-[10px]"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="w-[50%] flex flex-col gap-[10px]">
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <p className="text-xl text-gray-700">
            Rs. {product.price.toLocaleString()}
          </p>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < Math.floor(product.rating)
                    ? "text-grey-500"
                    : "text-yellow-500"
                }
              />
            ))}
            <p className="text-gray-500">({product.rating} 15)</p>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center gap-4 mt-4">
            <span>Size:</span>
            {["S", "M", "L", "XL"].map((size, index) => (
              <button
                key={index}
                className="border border-gray-300 p-2 rounded w-[40px] h-[40px] text-center bg-[#F9F1E7]"
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <span>Color:</span>
            {["#816DFA", "#000000", "#B88E2F"].map((color, index) => (
              <button
                key={index}
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
          <div className="flex items-center mt-6">
            <button
              className="border border-gray-300 p-2 rounded"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="border border-gray-300 p-2 rounded"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <button
              className="ml-4 border border-[black] px-4 py-2 rounded"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
            <button className="ml-4 border border-black px-4 py-2 rounded">
              + Compare
            </button>
          </div>
          <div className="mt-6 text-[16px] text-[#9F9F9F] border-t-[1px] pt-[40px] flex flex-col gap-[10px]">
            <p>SKU: SS001</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
            <div className="flex gap-4 mt-4">
              <FaFacebook className="text-black" />
              <FaLinkedin className="text-black" />
              <FaTwitter className="text-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-[35px] py-[50px] border-t-[1px]">
        <div className="flex justify-around">
          <h2 className="text-[24px] ">Description</h2>
          <h2 className="text-[24px] text-[#9F9F9F]">Additional Information</h2>
          <h2 className="text-[24px] text-[#9F9F9F]">Reviews [5]</h2>
        </div>
        <div className="flex flex-col gap-[30px] text-[16px] px-[100px] text-[#9F9F9F]">
          <p>
            Embodying the raw, wayward spirit of rock n roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="flex gap-[30px]">
          <img className="w-[50%] h-[350px]" src={product.image} alt="" />
          <img className="w-[50%] h-[350px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="container mx-auto py-[60px]">
        <div className="text-center pb-[60px]">
          <h2 className="text-[32px] font-bold">Related Products</h2>
        </div>
        <div className="grid grid-cols-4 gap-[32px]">
          {relatedLoading ? (
            <div className="flex justify-center items-center h-[500px]">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            relatedProducts.map((product: Product) => (
              <Link href={`/shop/${product._id}`} key={product._id}>
                <div className="relative text-start cursor-pointer h-[450px] w-[300px] rounded-[5px] shadow-lg overflow-hidden">
                  <img
                    className="w-full h-[300px] rounded-t-[5px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="p-[15px] bg-[#F4F5F7] h-[150px] flex flex-col gap-[8px]">
                    <h3 className="text-[24px] font-[600] text-[#3A3A3A]">
                      {product.title}
                    </h3>
                    <p className="text-[16px] font-[500] text-[#888888]">
                      {product.subtitle}
                    </p>
                    <p className="text-[20px] font-[600] text-[#3A3A3A]">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  <div className="absolute flex flex-col gap-5 inset-0 items-center justify-center bg-[#00000080] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <button
                      className="text-[#B88E2F] w-[202px] font-bold py-2 px-4 bg-white rounded-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      Add to Cart
                    </button>
                    <div className="flex items-center gap-3">
                      <p className="text-white flex gap-1">
                        <Image src={share} alt="share" /> Share
                      </p>
                      <p className="text-white flex gap-1">
                        <Image src={compare} alt="compare" /> Compare
                      </p>
                      <p className="text-white flex gap-1">
                        <Image src={likeSmall} alt="like" /> Like
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="text-center">
          <button className="border-[1px] border-[#B88E2F] w-[250px] h-[50px] text-[#B88E2F] rounded-[5px] font-semibold mt-[35px]">
            <Link href="/shop">Show More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
