import Forum from "./Forum";
import './App.css';

function App() {
  return (
    <div>
      <Forum
        commentsUrl={'/api/comment/'}
        currentUserid={3}
      />
    </div>
  );
}

export default App;
