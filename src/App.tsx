import { FC } from 'react';
import Paginantion from './components/Pagination';

const App: FC = () => {

  const handlePageNumber = (value: number) => {
    console.log("value", value);
  }

  return (
    <div className="App">
      <Paginantion 
        nextLabel="next >"
        previousLabel="< previous"
        pageRangeDisplayed={10} 
        total={10} 
        handlePageNumber={handlePageNumber} />
    </div>
  );
}

export default App;
