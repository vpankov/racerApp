import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#d1d7dc',
    borderBottomWidth: 1,
  },
  column: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  listItem__name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
  },
  column_birthday: {
    alignItems: 'flex-start',
  },
  listItem__birthdayLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default styles;
