import React, { useReducer, useState, useEffect, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Form from '../../shared/components/FormElements/Form';
import SearchResultFilter from './Components/SearchResultsFilter';
import Loader from '../../shared/components/UIElements/Loader';
import './SearchResults.css';
import {
  SearchResultsReducer,
  ACTIONS,
} from '../../shared/DataLayer/SearchResultsReducer';
import { useStateValue } from '../../shared/DataLayer/Context';
import { useAxios } from '../../shared/hooks/useAxios';
const SearchResultsPropertyList = lazy(() =>
  import('./Components/SearchResultsPropertyList'),
);

export const initialState = {
  initialData: [],
  filteredData: [],
};

const SearchResults = ({}) => {
  const [{ query }] = useStateValue();
  console.log(query);

  const { sendRequest } = useAxios();
  const [state, dispatch] = useReducer(SearchResultsReducer, initialState);
  const [price, setPrice] = useState([0, 100000]);

  useEffect(() => {
    sendRequest('get', `search/${query}`)
      .then((res) => {
        dispatch({
          type: ACTIONS.SEARCHED,
          payload: res,
        });

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);
  const onSubmit = (data) => {
    console.log(price);
    console.log(data);
    dispatch({
      type: ACTIONS.FILTER,
      payload: {
        city: data.city || null,
        type: data.type || null,
        price: price,
        propType: data.property_type || null,
      },
    });
  };
  return (
    <Suspense fallback={<Loader />}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ width: '95%', margin: 'auto', borderRadius: 5 }}
        spacing={2}
      >
        <Grid
          item
          xs
          style={{ width: '100%', margin: 'auto', borderRadius: 5 }}
        >
          <Form onSubmit={onSubmit}>
            <SearchResultFilter price={price} setPrice={setPrice} />
          </Form>
        </Grid>
        <Grid
          item
          xs
          style={{ width: '100%', margin: 'auto', borderRadius: 5 }}
        >
          <SearchResultsPropertyList propertyList={state.filteredData} />
        </Grid>
      </Grid>
    </Suspense>
  );
};

export default SearchResults;
