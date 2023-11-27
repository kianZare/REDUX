import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import UsesList from "./components/UsesList";


function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <MilkContainer/>
      <hr/>
      <UsesList/>
    </Provider>
  )
}

export default App;
