import { Provider } from "react-redux";
import ReviewsPage from "./pages/ReviewsPage";
import { createStore, applyMiddleware } from "redux";
import { reviewsReducer } from "./store/reducer";
import thunk from "redux-thunk";
import "./App.css";

const store = createStore(reviewsReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <ReviewsPage />
      </div>
    </Provider>
  );
}

export default App;
