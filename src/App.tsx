import { Provider } from "react-redux";
import ReviewsPage from "./pages/ReviewsPage";
import { createStore, applyMiddleware } from "redux";
import { reviewsReducer } from "./store/reducer";
import thunk from "redux-thunk";

const store = createStore(reviewsReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
        <ReviewsPage />
    </Provider>
  );
}

export default App;
