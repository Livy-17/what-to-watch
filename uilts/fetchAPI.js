import axios from "axios";

export const baseURL = 'https://streaming-availability.p.rapidapi.com';

export const fetch_by_country_service_page = async (url, country, service, page) => {

  const options = {
    params: {
      type: 'movie',
      genre: '18',
      country: country,
      service: service,
      page: page,
      output_language: 'en',
      language: 'en',
      order_by: 'original_title'
    },
    headers: {
      'X-RapidAPI-Key': 'ce593eee28mshc95616570c30664p165694jsn509b23999d5a',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  const { data } = await axios.get(url, options);

  return data;
}

export const fetch_service_by_country = async () => {

  const options = {
    headers: {
      'X-RapidAPI-Key': 'ce593eee28mshc95616570c30664p165694jsn509b23999d5a',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  const { data } = await axios.get('https://streaming-availability.p.rapidapi.com/countries', options);

  return data;
}