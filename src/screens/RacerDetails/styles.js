import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    height: '100%',
  },
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    height: '100%',
  },
  group: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'baseline',
  },
  label: {
    fontSize: 16,
    marginRight: 10,
    width: 90,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
  },
  navigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    justifyContent: 'center',
  },
});

export default styles;
