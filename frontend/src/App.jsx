import { useState } from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Lifted state for search

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {/* Navbar */}
      <Navbar setSearchTerm={setSearchTerm} />

      {/* Main Content */}
      <Box as="main" py={8}> {/* ✅ Added padding to create spacing */}
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </Box>

      {/* Footer */}
      <Box as="footer" py={4} bg={useColorModeValue("gray.200", "gray.700")} mt={10} textAlign="center">
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
          &copy; {new Date().getFullYear()} Travel Log. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}

export default App;
