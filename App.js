import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Add from "./view/Add";
import Web from "./view/Web";
import WriteView from "./view/WriteView";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <WriteView />
      {/* <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Web" component={Web} />
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="Write" component={WriteView} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </Provider>
  );
};
export default App;
