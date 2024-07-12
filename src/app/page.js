import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Client from "@/components/client/Client";
import User from "@/components/users/User";
import ProductData from "@/components/product/ProductData";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <ProductData
        limit={8}
        title="Products"
        desc="Order it for you or for your beloved ones "
      />
      <Client />
      <User />
      <ProductData
        limit={4}
        title="Popular"
        desc="Our top selling product that you may like"
      />
    </div>
  );
}
