import { Container, Flex, Text, HStack, Button, Input, useColorMode } from '@chakra-ui/react';
import { PlusSquareIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
import { useState } from 'react';

const Navbar = ({ setSearchTerm }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchTerm(value); // Pass search term up to App.jsx
  };

  const clearSearch = () => {
    setSearch('');
    setSearchTerm('');
  };

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", sm: "row" }}>
        <Text fontSize={{ base: "22", sm: "30" }} fontWeight="bold" textTransform="uppercase"
          textAlign="left" bgGradient="linear(to-r, cyan.400, blue.500)" bgClip="text">
          <Link to="/"><h1>TRAVEL LOG</h1></Link>
        </Text>
        <HStack spacing={4}>
          <Input
            placeholder="Search by name..."
            value={search}
            onChange={handleSearch}
            variant="filled"
            size="md"
            width={{ base: "100%", sm: "auto" }}
          />
          {search && (
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
