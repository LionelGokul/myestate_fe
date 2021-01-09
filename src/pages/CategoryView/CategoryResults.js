import React, { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../../shared/hooks/useAxios';
import SearchResultsPropertyList from '../SearchResults/Components/SearchResultsPropertyList';
import {
  SearchResultsReducer,
  ACTIONS,
} from '../../shared/DataLayer/SearchResultsReducer';
import { initialState } from '../SearchResults/SearchResults';
const CategoryResults = (props) => {
  const { sendRequest } = useAxios();
  const [category, setCategoryList] = useState([]);
  const { propertytype } = useParams();
  const [state, dispatch] = useReducer(SearchResultsReducer, initialState);
  const [price, setPrice] = useState([0, 100000]);
  useEffect(() => {
    sendRequest('get', `properties/${propertytype}`)
      .then((res) => {
        dispatch({
          type: ACTIONS.CATEGORY,
          payload: res,
        });

        console.log(res);
        setCategoryList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('propertyType', category);
  return (
    <div className="categoryResults">
      <SearchResultsPropertyList propertyList={category} />
    </div>
  );
};

export default CategoryResults;
