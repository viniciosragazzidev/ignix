const currentUrl = process.env.NEXT_PUBLIC_APP_URL;
export const getCurrentUnit = async (unitSlug: string) => {
  const currentUnit = await fetch(`${currentUrl}`);
};
