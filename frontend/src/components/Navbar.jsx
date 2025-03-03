import { Container, Flex, Text, HStack, Button, Input, Select, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { PlusSquareIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const Navbar = ({ searchTerm, setSearchTerm, selectedState, setSelectedState }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update search term in parent component
  };

  const handleStateFilter = (e) => {
    setSelectedState(e.target.value); // Update selected state in parent component
  };

  const clearSearch = () => {
    setSearchTerm(''); // Clear search term in parent component
    setSelectedState(''); // Clear selected state in parent component
  };

  return (
    <Container
      maxW="1250px"
      px={4}
      py={5}
      position="sticky"
      top={10}
      zIndex={10}
      bg={useColorModeValue("white", "gray.800")}
      shadow="md"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "50px", sm: "35px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="left"
          bgGradient="linear(to-r, gray.700,gray.400)"
          bgClip="text"
          ml={{ base: 0, sm: 10 }}
        >
          <Link to="/" aria-label="Home">
            <h1>TRAVEL LOG</h1>
          </Link>
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
          </Select>
          {(searchTerm || selectedState) && ( // Show clear button only when there's a search term or state filter
            <Button onClick={clearSearch} aria-label="Clear search">
              <CloseIcon fontSize={12} />
            </Button>
          )}
          <Link to="/create" aria-label="Create new entry">
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode} aria-label="Toggle color mode">
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
