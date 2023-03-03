export async function sendRequest() {
  const url = 'https://new-backend.unistory.app/api/data?page=0&perPage=10';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request error:${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    alert(err);
    return null;
  }
}
