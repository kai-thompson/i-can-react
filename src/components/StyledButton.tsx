interface StyledButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

function StyledButton({ onClick, children }: StyledButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-google hover:bg-blue-googleDark duration-150 text-white py-2 px-4 rounded-md flex"
    >
      {children}
    </button>
  );
}

export default StyledButton;
