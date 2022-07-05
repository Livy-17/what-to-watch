import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home({ data_us_netfilx, setShowNavbar }) {

  setShowNavbar(false);

  const countries = [{name: 'Canada', id: 'ca'}, {name: 'Great Britain', id: 'gb'}, {name: 'United States', id: 'us'}, {name: 'Netherlands', id: 'nl'}, {name: 'Austrilia', id: 'au'}, {name: 'New Zealand', id: 'nz'}, {name: 'Austria', id: 'at'}, {name: 'Germany', id: 'de'}, {name: 'Italy', id: 'it'}, {name: 'Spain', id: 'es'}, {name: 'Switzerland', id: 'ch'}, {name: 'France', id: 'fr'}, {name: 'Belgium', id: 'be'}, {name: 'Denmark', id: 'dk'}, {name: 'Finland', id: 'fi'}, {name: 'Norway', id: 'no'}, {name: 'Portugal', id: 'pt'}, {name: 'Sweden', id: 'se'}, {name: 'Argentina', id: 'ar'}, {name: 'Brazil', id: 'br'}, {name: 'Chile', id: 'cl'}, {name: 'Colombia', id: 'co'}, {name: 'Mexico', id: 'mx'}];
  
  const handleChange = (event) => {
    window.location.href = `countries/${event.target.value}`;
    setShowNavbar(true);
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center h-[300px] w-[500px] bg-slate-400 rounded-[15px] border-2 border-white border-solid'>
        <p className='text-[20px] mb-[30px] text-gray-700'>Please choose your country or region</p>
        <div className='w-[200px] bg-slate-400 rounded-[10px]'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Country"
              onChange={handleChange}
              style={{borderRadius: '10px'}}
            >
              {countries.map(country => (
                <MenuItem value={country.id} key={country.id}>
                  <Link href={`countries/${country.id}`}>{country.name}</Link>
                </MenuItem>
              ))}
            </Select>
          </FormControl> 
        </div>
      </div>
    </div>
  )
}