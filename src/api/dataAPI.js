const dataAPI = async (uri) => {
  const response = await fetch(uri);
  // console.log("Raw Response data from Data API", response);
  const body = await response.json();
  // console.log("JSON Response from Data API", body);

  if (response.status !== 200) throw Error(body.message);

  return body;
}

export default dataAPI;