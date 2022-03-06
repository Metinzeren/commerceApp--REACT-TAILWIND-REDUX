import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { setBasket } from "../redux/actions/productAction";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const { products, productLoading } = useSelector((state) => state);

  const addBasket = ({ urun, urunID }) => {
    dispatch(setBasket({ urunBilgisi: urun, ID: urunID,adet:1 }))
    toast.success("Ürün sepete eklendi!");
  };

  return (
    <div className="flex flex-wrap justify-center">
      {!productLoading ? (
        products.map((product) => {
          const { id, title, price, image } = product;
          return (
            <div className="flex items-center justify-center mb-12"  key={id}>
              <div className="items-center flex flex-col h-96  min-h-max">
                <h3 className="w-40 text-xs h-8">{title}</h3>
                <img className="h-60 w-44 p-2" src={image} alt="pic"></img>
                <h2>$ {price}</h2>
                <button
                  className="bg-orange-400 rounded-xl p-4 text-white hover:bg-rose-900"
                  onClick={() =>
                    
                    addBasket({ urun: product, urunID: product.id })
                  }
                >
                  Sepete Ekle 
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-xl animate-ping">Loading</div>
      )}
    </div>
  );
};

export default ProductComponent;
