const dataAPI = async (uri) => {
  const response = await fetch(uri);
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
}

export default dataAPI;