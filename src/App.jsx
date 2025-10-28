import Input from "./components/Input"
import ChatHistory from "./components/History";


// import Tests from './components/testso';


function App(){
  return(
    <>
    <div className="flex items-center justify-center flex-auto h-screen ">
      <ChatHistory/>
      <Input/>
    </div>
    
    </>
  )
}

export default App;
