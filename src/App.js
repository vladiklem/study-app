import { Provider } from "react-redux";

import { HomePage } from "./pages/HomePage/HomePage";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
