export const ErrorMessages = ({ errors }: { errors?: string[] }) => {
  if (!errors || errors.length === 0) return null;

  const text = errors.join(", ");

  return <span className="text-red-500 text-xs peer">{text}</span>;
};
