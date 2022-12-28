import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [syncItem, setSyncItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSyncItem(true);
      } catch (error) {
        setError(error);
      }
    }, 4000);
  }, [syncItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const syncItems = () => {
    setLoading(true);
    setSyncItem(false);
  };
  return {
    item,
    saveItem,
    loading,
    error,
    syncItems,
  };
}

export { useLocalStorage };
