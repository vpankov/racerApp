import {connect} from 'react-redux';

import Races from './index.js';
import {setLoaderVisibility} from '../../redux/actions/popups.js';

const mapDispatchToProps = (dispatch) => {
  return {
    setLoaderVisibility: (flag) => {
      dispatch(setLoaderVisibility(flag));
    },
  };
};

export default connect(null, mapDispatchToProps)(Races);
