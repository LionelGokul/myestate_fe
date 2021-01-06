import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useAxios } from '../../shared/hooks/useAxios';
import Title from '../../shared/components/UIElements/Title';
import { Tab, Tabs } from '@material-ui/core';
import DetailPropertyOverview from './Components/DetailPropertyOverview';
import DetailPropertyImage from './Components/DetailPropertyImage';
import DetailedAmenties from './Components/DetailedAmenties';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './PropertyDetailedView.css';
import PropertyMap from './Components/PropertyMap';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
};
const PropertyDetailedView = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const { sendRequest } = useAxios();
  useEffect(() => {
    sendRequest('get', `property/${id}`)
      .then((res) => {
        setProperty(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [tabSelected, setTabSelected] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(property);
    setTabSelected(newValue);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs>
        <div className="cmn_section">
          {property.id && (
            <>
              <Title title="Property Summary"></Title>
              <div className="propertyTab">
                <Tabs
                  value={tabSelected}
                  onChange={handleChange}
                  className="property_detail_tabs"
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="secondary"
                  textColor="secondary"
                  aria-label="scrollable force tabs example"
                >
                  <Tab
                    label="Overview"
                    className="tabs"
                    {...a11yProps(0)}
                  ></Tab>
                  <Tab
                    label="Properties Images"
                    className="tabs"
                    {...a11yProps(1)}
                  />
                  <Tab
                    label="Properties Details"
                    className="tabs"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </div>
              <TabPanel value={tabSelected} index={0}>
                <DetailPropertyOverview property={property} />
              </TabPanel>
              <TabPanel value={tabSelected} index={1}>
                <DetailPropertyImage images={property.images} />
              </TabPanel>
              {property.propertyAmenities !== null ? (
                <TabPanel value={tabSelected} index={2}>
                  <DetailedAmenties
                    amenities={property.propertyAmenities}
                    furnishings={property.propertyFurnishings}
                    rooms={property.propertyRooms}
                  />
                </TabPanel>
              ) : null}
              <PropertyMap propertyName={property.name} />
            </>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default PropertyDetailedView;
