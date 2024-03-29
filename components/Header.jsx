import React from 'react';
import Link from 'next/link';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';

const Header = () => {

const countries = [{name: 'Canada', id: 'ca'}, {name: 'Great Britain', id: 'gb'}, {name: 'United States', id: 'us'}, {name: 'Netherlands', id: 'nl'}, {name: 'Austrilia', id: 'au'}, {name: 'New Zealand', id: 'nz'}, {name: 'Austria', id: 'at'}, {name: 'Germany', id: 'de'}, {name: 'Italy', id: 'it'}, {name: 'Spain', id: 'es'}, {name: 'Switzerland', id: 'ch'}, {name: 'France', id: 'fr'}, {name: 'Belgium', id: 'be'}, {name: 'Denmark', id: 'dk'}, {name: 'Finland', id: 'fi'}, {name: 'Norway', id: 'no'}, {name: 'Portugal', id: 'pt'}, {name: 'Sweden', id: 'se'}, {name: 'Argentina', id: 'ar'}, {name: 'Brazil', id: 'br'}, {name: 'Chile', id: 'cl'}, {name: 'Colombia', id: 'co'}, {name: 'Mexico', id: 'mx'}];

const handleChange = (event) => {
  window.location.href = `${event.target.value}`;
}

  return ( 
    <div className='fixed top-0 w-full flex h-[70px] items-center justify-between pl-10 pr-10 z-50 text-white' style={{ backgroundColor: 'rgba(24, 24, 24, 1)' }}>
      <p className='text-[30px]' id='nav--title'>WhatToWatch</p>
      <div className='flex flex-row items-center justify-center gap-5'>
        <div>
          <FormControl fullWidth >
            <InputLabel id="header-select-label">
              <PublicIcon fontSize='small' color='primary' />
            </InputLabel>
            <Select
              labelId="header-select-label"
              id="header-select"
              label="Country"
              onChange={handleChange}
              sx={{borderRadius: '5px', height: '50px', width: '70px'}}
            >
              {countries.map(country => (
                <MenuItem value={country.id} key={country.id}>
                  <Link href={`${country.id}`}>{country.name}</Link>
                </MenuItem>
              ))}
            </Select>
          </FormControl> 
        </div>
      </div>
    </div>
   );
}
 
export default Header;