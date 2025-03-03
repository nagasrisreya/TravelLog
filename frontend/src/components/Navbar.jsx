import { Container, Flex, Text, HStack, Button, Input, Select, useColorMode } from '@chakra-ui/react';
import { PlusSquareIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
import { useState } from 'react';

const Navbar = ({ setSearchTerm, setSelectedState }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchTerm, setSearchTermLocal] = useState('');
  const [selectedState, setSelectedStateLocal] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTermLocal(value);
    setSearchTerm(value); // Update search term in App component
  };

  const handleStateFilter = (e) => {
    const value = e.target.value;
    setSelectedStateLocal(value);
    setSelectedState(value); // Update selected state in App component
  };

  const clearSearch = () => {
    setSearchTermLocal(''); // Clear local search term
    setSearchTerm(''); // Clear search term in App component
    setSelectedStateLocal(''); // Clear local selected state
    setSelectedState(''); // Clear selected state in App component
  };

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "30" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="left"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          <Link to="/"><h1>TRAVEL LOG</h1></Link>
        </Text>
        <HStack spacing={4}>
          <Input
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            variant="filled"
            size="md"
            width={{ base: "100%", sm: "auto" }}
          />
          <Select
            placeholder="Filter by state"
            value={selectedState}
            onChange={handleStateFilter}
            variant="filled"
            size="md"
            width={{ base: "100%", sm: "auto" }}
          >
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>

            {/* Add more states as needed */}
          </Select>
          {(searchTerm || selectedState) && ( // Show clear button only when there's a search term or state filter
            <Button onClick={clearSearch}>
              <CloseIcon fontSize={12} />
            </Button>
          )}
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
