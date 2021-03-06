import {connect} from 'react-redux';

import Racers from './index.js';
import {setLoaderVisibility} from 'src/redux/actions/popups.js';

const mapDispatchToProps = (dispatch) => {
  return {
    setLoaderVisibility: (flag) => {
      dispatch(setLoaderVisibility(flag));
    },
  };
};

export default connect(null, mapDispatchToProps)(Racers);
