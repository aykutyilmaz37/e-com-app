import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import useFetchSearch from 'services/hooks/useFetchSearch';
import { GET_PRODUCTS } from 'store/app/types';
import {
  Box,
  Button,
  FormGroup,
  InputAdornment,
  TextField,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

type Props = {
  handleDrawerClose?: () => void;
};

const StyledSearchButton = styled(Button)`
  width: auto;
  ${({ theme }) => theme.breakpoints.up('xs')} {
    width: 150px;
  }
  border-radius: 0 50px 50px 0;
`;

const StyledSearchInput = styled(TextField)`
  border-radius: 50px 0 0 50px;
  width: calc(100% - 150px);
  .MuiOutlinedInput-root {
    fieldset {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
  }
`;

const Search: FC<Props> = ({ handleDrawerClose }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { triggerQuery: search } = useFetchSearch();
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = async () => {
    await search({
      variables: {
        name: searchValue,
      },
      onSuccess: (data) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: data,
        });
      },
    });
    closeSearch();
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    handleDrawerClose && handleDrawerClose();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box width={1}>
      <FormGroup row>
        {!isMobile && (
          <StyledSearchInput
            name='search'
            variant='outlined'
            placeholder='Searching for...'
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}

        {isMobile && !isSearchOpen && (
          <Button
            onClick={() => setIsSearchOpen(true)}
            variant='outlined'
            sx={{ borderRadius: '0 50px 50px 0' }}
          >
            <SearchIcon />
          </Button>
        )}

        {isMobile && isSearchOpen && (
          <>
            <StyledSearchInput
              name='search'
              variant='outlined'
              placeholder='Searching for...'
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSearch();
                }
              }}
              sx={{ display: 'block' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <ClearIcon onClick={closeSearch} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              onClick={handleSearch}
              variant='outlined'
              sx={{ borderRadius: '0 50px 50px 0', mt: 1 }}
            >
              Search
            </Button>
          </>
        )}

        {!isMobile && (
          <StyledSearchButton
            onClick={handleSearch}
            theme={theme}
            variant='contained'
            disableElevation
          >
            Search
          </StyledSearchButton>
        )}
      </FormGroup>
    </Box>
  );
};

export default Search;
