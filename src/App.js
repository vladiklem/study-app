import { Provider } from "react-redux";
import RoutesContainer from "./containers/RoutesContainer/RoutesContainer";

import { store } from "./redux-store/index";

function App() {
  return (
    <Provider store={store}>
      <RoutesContainer />
    </Provider>
  );
}

export default App;
