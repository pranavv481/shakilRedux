import { Provider } from 'react-redux';
import Users from "./Users";
import store from "./store";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <Provider store={store}>
      <div className="container">
      <Form />
      <Users />
      </div>
    </Provider>

  );
}

export default App;
