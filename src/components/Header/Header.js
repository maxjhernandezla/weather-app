import {
  Box,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { getCountries, getCities } from 'countries-cities';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';
const Header = () => {
  const countries = getCountries();
  const cities = getCities('Argentina');

  return (
    <div className="searchBar">
      <form action="submit">
        <input type="text" placeholder="search" />
        <button>
          <SearchIcon />
        </button>
      </form>
    </div>
    // <Box display="flex" height="30px" padding="20px">
    //   <Stack spacing={4}>
    //     <InputGroup>
    //       <InputLeftElement pointerEvents="none">
    //         <SearchIcon style={{ margin: '5px', color: 'lightgray' }} />
    //       </InputLeftElement>
    //       <InputRightElement>
    //         <Input
    //           variant="filled"
    //           placeholder="Filled"
    //           width="300px"
    //           padding="10px"
    //           borderRadius="20px"
    //           border="none"
    //         ></Input>
    //       </InputRightElement>
    //     </InputGroup>
    //   </Stack>
    // </Box>
  );
};

export default Header;
