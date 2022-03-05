import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBasket,
  updateBasketProduct,
} from "../redux/actions/productAction";

const Cart = () => {
  const { basketList } = useSelector((x) => x);
  const dispatch = useDispatch();
  const toplam = basketList.reduce(
    (i, k) => (i += k.adet * k.urunBilgisi.price),
    0
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-2xl"> Toplam Ürün Sayısı: {basketList.length}</h1>
      <span>Toplam Tutar: {toplam}</span>
      <div>
        {basketList.map((item) => {
          return (
            <div key={item.ID}>
              <div className="items-center flex flex-col border-4 border-rose-400 min-h-max">
                <h3 className="w-40 text-xs h-8">{item.urunBilgisi.title}</h3>
                <img
                  className="h-60 w-44 p-2"
                  src={item.urunBilgisi.image}
                  alt="pic"
                ></img>
                <h2>$ {item.urunBilgisi.price}</h2>
              </div>

              <br />

              <div className="flex justify-center mb-8">
                <button
                  className="mr-4 bg-rose-500 rounded-xl p-2 text-white hover:bg-rose-900"
                  onClick={() => dispatch(deleteBasket(item.ID))}
                >
                  Sil
                </button>
                <br />
                <button
                  className="mr-4 bg-rose-500 rounded-xl p-2 text-white hover:bg-rose-900"
                  onClick={() =>
                    dispatch(
                      updateBasketProduct({ islem: "Arttir", urunID: item.ID })
                    )
                  }
                >
                  Artır
                </button>
                <br />
                {item.adet === 1 ? (
                  <button
                    className="mr-4 bg-rose-500 rounded-xl p-2 text-white hover:bg-rose-900"
                    onClick={() => dispatch(deleteBasket(item.ID))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    className="bg-rose-500 rounded-xl p-2 text-white hover:bg-rose-900"
                    onClick={() =>
                      dispatch(
                        updateBasketProduct({ islem: "Azalt", urunID: item.ID })
                      )
                    }
                  >
                    Azalt
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
