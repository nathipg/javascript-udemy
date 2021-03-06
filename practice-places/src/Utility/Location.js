export async function getAddressFromCoordinates(coordinates) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${GOOGLE_MAPS_API_KEY}`);

  if(!response.ok) {
    throw new Error('Failed to fetch address, please try again');
  }
  
  const data = await response.json();

  if(data.error_message) {
    throw new Error(data.error_message);
  }

  const address = data.results[0].formatted_address;
  return address;
}

export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_MAPS_API_KEY}`);

  if(!response.ok) {
    throw new Error('Failed to fetch coordinates, please try again');
  }
  
  const data = await response.json();

  if(data.error_message) {
    throw new Error(data.error_message);
  }

  const coordinates = data.results[0].geometry.location;
  return coordinates;
}