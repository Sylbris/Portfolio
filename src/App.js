import './App.css';
import Header from './components/Header/Header';
import BasicTabs from './components/Navbar/Navbar';
import { Box } from '@mui/system';
import bg from '../src/assets/bg.jpg';
function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          }}
      >
       <Header />
       <BasicTabs />
       </Box>
    </div>
  );
}

export default App;
