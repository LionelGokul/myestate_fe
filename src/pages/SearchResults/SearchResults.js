import React, { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Form from '../../shared/components/FormElements/Form';
import SearchResultFilter from './Components/SearchResultsFilter';
import './SearchResults.css';
import PropertyData from '../../shared/DummyData/PropertyData';
import SearchResultsPropertyList from './Components/SearchResultsPropertyList';
import { SearchResultsReducer } from '../../shared/DataLayer/SearchResultsReducer';

const SearchResults = () => {
  const { query } = useParams();
  const [price, setPrice] = useState([0, 100000]);
  const initialState = {
    initialData: PropertyData,
    filteredData: PropertyData,
  };
  const [state, dispatch] = useReducer(SearchResultsReducer, initialState);

  const onSubmit = (data) => {
    console.log(price);
    console.log(data);
    dispatch({
      type: 'filter',
      payload: {
        city: data.city || null,
        type: data.type || null,
        price: price,
        propType: data.property_type || null,
      },
    });
  };
  return (
    <>
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
    </>
  );
};

export default SearchResults;
