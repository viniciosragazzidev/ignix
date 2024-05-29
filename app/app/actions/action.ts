const currentUrl = process.env.NEXT_PUBLIC_APP_URL;
export const getCurrentProfile = async ({ id }: { id: string }) => {
  const response = await fetch(`${currentUrl}/api/profile/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 1000,
      tags: ["profile"],
    },
  });
  const data = await response.json();
  return data;
};
