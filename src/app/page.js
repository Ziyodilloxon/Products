import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fuga
        repudiandae soluta, quidem cumque nobis non tenetur explicabo
        reprehenderit dolores amet? Quibusdam voluptatibus nesciunt, blanditiis
        molestias modi ullam explicabo saepe.
      </p>
      <div>
        <h3 className="text-2xl font-semibold mt-12">
          Buni bosing va narsalar xarid qiling :
          <span>
            <Link className="link link-primary" href="products">
              Products
            </Link>
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Home;
