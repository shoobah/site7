import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Site7App from './containers/Site7App';
// import MyEvents from './containers/MyEvents';
// import OtherEvents from './containers/OtherEvents';

export default (
  <Route path='/' component={Site7App}>
    <IndexRoute components={{myEvents: MyEvents, otherEvents: OtherEvents}} />
  </Route>
);

    // <Route path='my-events' components={{myEvents: MyEvents}} />
    // <Route path='other-events' components={{otherEvents: OtherEvents}} />
