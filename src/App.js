import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start p-5">
      <div className="w-full max-w-md space-y-8">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;


