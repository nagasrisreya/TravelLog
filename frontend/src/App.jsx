import { useState } from 'react';
import { useColorModeValue, Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Lifted state

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      {/* Pass searchTerm and setSearchTerm to Navbar */}
      <Navbar setSearchTerm={setSearchTerm} />
      
      <Routes>
        {/* Pass searchTerm to HomePage for filtering */}
        <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </Box>
  );
}

export default App;
