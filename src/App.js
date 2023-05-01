import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchUsers } from "./redux/usersSlice";
import TweetsList from "./components/TweetsList/TweetsList";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <main>
        <TweetsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
