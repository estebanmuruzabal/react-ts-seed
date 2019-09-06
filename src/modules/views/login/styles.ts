import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  loginContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  loginForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center'
  },
  loginInput: {
    marginBottom: '1rem'
  },
  loginButton: {
    width: '50%'
  }
});
