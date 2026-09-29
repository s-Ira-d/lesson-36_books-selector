import BookList from "./components/BookList";
import { ReadingStatus } from "./components/ReadingStatus";
import { Filter } from "./components/Filter";

function App() {
  return (
    <div>
      <ReadingStatus />
      <Filter />
      <BookList />
    </div>
  );
}

export default App;
