import { useState } from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [selectedState, setSelectedState] = useState(''); // State for selected state filter

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {/* Navbar */}
      <Navbar
        searchTerm={searchTerm} // ✅ Pass searchTerm
        setSearchTerm={setSearchTerm} 
        selectedState={selectedState} // ✅ Pass selectedState
        setSelectedState={setSelectedState} 
      />

      {/* Main Content */}
      <Box as="main" py={8}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                searchTerm={searchTerm} // ✅ Ensure HomePage receives searchTerm
                selectedState={selectedState} // ✅ Ensure HomePage receives selectedState
              />
            }
          />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        py={4}
        bg={useColorModeValue("gray.200", "gray.700")}
        mt={10}
        textAlign="center"
      >
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
          &copy; {new Date().getFullYear()} Travel Log. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}

export default App;
