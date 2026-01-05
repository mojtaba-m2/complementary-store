import { createContext, useContext, useState } from "react";

interface IShopingCartProvider {
  children: React.ReactNode;
}

type TCartContent = {
  id: number;
  quty: number;
};

interface IShopingCartContext {
  cartContent: TCartContent[];
  handleIncreaseProductQuty: (id: number) => void;
  handleDecreaseProductQuty: (id: number) => void;
  getProductQuty: (id: number) => number;
}

export const ShopingCartContext = createContext({} as IShopingCartContext);

export const useShopingCartContext = () => {
  return useContext(ShopingCartContext);
};

export function ShopingCartProvider({ children }: IShopingCartProvider) {
  const [cartContent, setCartContent] = useState<TCartContent[]>([]);

  const handleIncreaseProductQuty = (id: number) => {
    setCartContent((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, quty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, quty: item.quty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQuty = (id: number) => {
    setCartContent((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem?.quty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, quty: item.quty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQuty = (id: number) => {
    const test = cartContent.find((item) => item.id == id);
    if (test) {
      return test?.quty;
    } else {
      return 0;
    }
  };

  return (
    <ShopingCartContext.Provider
      value={{
        cartContent,
        handleIncreaseProductQuty,
        handleDecreaseProductQuty,
        getProductQuty,
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}
