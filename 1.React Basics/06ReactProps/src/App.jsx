import Product from "./Product";
function App() {
  return (
    <>
      <center>
        <Product
          ProductName="About Macbook Pro"
          Productimg="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        >
          <p className="mt-3 text-sm text-gray-600">
            Mackbook pro was insane amet consectetur adipisicing elit.
            Excepturi, debitis?
          </p>
        </Product>

        <Product
          ProductName="About Dell Inspiron"
          Productimg="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/16-7630-plus-intel/media-gallery/notebook-inspiron-16-7630-nt-xnb-fpr-p-silver-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3164&hei=2408&qlt=100,1&resMode=sharp2&size=3164,2408&chrss=full&imwidth=5000"
        >
          <p className="mt-3 text-sm text-gray-600">
            Dell inspiron is best for dolor sit amet consectetur adipisicing
            elit. Excepturi, debitis?
          </p>
        </Product>

        <Product
          ProductName="About Hp Pavillion"
          Productimg="https://rukminim1.flixcart.com/image/850/1000/xif0q/computer/8/w/l/-original-imagp8xzbrgfm6gv.jpeg?q=90"
        >
          <p className="mt-3 text-sm text-gray-600">
            Hp pavillion is amazing sit amet consectetur adipisicing elit.
            Excepturi, debitis?
          </p>
        </Product>
      </center>
    </>
  );
}

export default App;
