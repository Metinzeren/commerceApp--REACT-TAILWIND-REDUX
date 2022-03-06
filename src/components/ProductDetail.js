import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setBasket } from "../redux/actions/productAction";

const ProductDetail = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addBasket = ({ urun, urunID }) => {
    dispatch(setBasket({ urunBilgisi: urun, ID: urunID,adet:1 }))
    toast.success("Ürün sepete eklendi!");
  };
  const { productId } = useParams();
  const [detailsProduct, setDetailsProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadProductDetails();
  });

  const loadProductDetails = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setDetailsProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div>
      {!loading ? (
        <div>   
          <div className="items-center flex flex-col justify center min-h-max">
                <h3 className=" text-3xl  flex justify-center">{detailsProduct.title}</h3>
                <img
                  className="h-96  p-2"
                  src={detailsProduct.image}
                  alt="pic"
                ></img>
                <p className="w-96">{detailsProduct.description}</p>
                <div className="flex items-center mb-8">  <h2 className="flex justify-center mr-8 text-3xl" >$ {detailsProduct.price}</h2>
                <button
                  className="bg-orange-400  rounded-xl p-4 text-white hover:bg-rose-900"
                  onClick={() =>
                    
                    addBasket({ urun: detailsProduct, urunID: detailsProduct.id })
                  }
                >
                  Sepete Ekle 
                </button>
                </div>
              
              </div>
        </div>
      ) : (
        <div className="text-xl animate-ping flex items-center justify-center">
          Loading
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
