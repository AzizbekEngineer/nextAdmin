export async function getData(path) {
  const res = await fetch(
    `https://66458542b8925626f8921940.mockapi.io/api/v1${path}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
