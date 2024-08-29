import Calculator from "./components/Calculator";
import CreditImg from "./components/CreditImg";

function App() {
  return (
    <div className="min-h-screen min-w-full bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="bg-blueGray-900 border-2 border-gray-600 rounded-md w-80">
        <Calculator />
      </div>
      <CreditImg />
    </div>
  );
}

export default App;
