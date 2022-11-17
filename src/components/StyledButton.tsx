interface StyledButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

function StyledButton({ onClick, children }: StyledButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-500 hover:-translate-y-[1px] hover:shadow-md hover:shadow-sky-200 duration-150 text-white font-bold py-2 px-4 rounded-md flex"
    >
      {children}
    </button>
  );
}

export default StyledButton;
