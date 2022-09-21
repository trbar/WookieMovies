import * as React from 'react';
import {Text} from 'react-native-paper';

const ErrorMessage = (props: {error: Error}) => {
  return (
    <Text style={{color: 'red', marginTop: 20}}>
      Error: {props.error.message}
    </Text>
  );
};

export default ErrorMessage;
