export const useGetDashboardVyjezdy = async () => {
  const response = await fetch("http://localhost:3000/api/dashboard/vyjezdy", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Něco se pokazilo");
  }
  return response.json();
};
