import React, { useState, useEffect } from 'react';

export const useFetchCartegory = () => {
  const [fetchedcartegory, setFetchedCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          'https://backend.getlinked.ai/hackathon/categories-list'
        );
        const data = await response.json();
        setFetchedCategory(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  return fetchedcartegory;
};
