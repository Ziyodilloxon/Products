import Link from "next/link";

const getData = async () => {
  const request = await fetch("https://dummyjson.com/products?");

  const data = await request.json();
  return data;
};

async function Products() {
  const { products } = await getData();
  return (
    <div className="mt-20">
      <p className="tracking-widest opacity-75 pb-3">
        Currently, we have offered <br /> a $1 discount for our customers.😍
      </p>
      <h1 className="text-4xl animate-colorCycle text-center mt-4 mb-12">
        All Products For You !
      </h1>
      <div className="grid grid-cols-3 mt-8 gap-12 ">
        {products.reverse().map((item) => {
          return (
            <div key={item.id} className="card bg-base-100 w-96 shadow-xl">
              <Link href={`/product/${item.id}`}>
                <figure>
                  <img src={item.thumbnail} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{item.category}</div>
                    <div className="badge badge-outline">
                      Price: ${item.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
