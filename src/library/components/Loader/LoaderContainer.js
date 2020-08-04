import {connect} from 'react-redux';

import Loader from './index.js';

const mapStateToProps = state => {
    return {
        isLoaderVisible: state.popups.isLoaderVisible
    }
  }

export default connect(mapStateToProps)(Loader);