const Figma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2.00021V16M12 16V19.5C12 21.4331 10.433 23 8.5 23C6.567 23 5 21.4331 5 19.5C5 17.567 6.567 16 8.5 16M12 16H8.5M8.5 16C6.567 16 5 14.433 5 12.5C5 10.567 6.567 9 8.5 9M8.5 9H12M8.5 9H15.5M8.5 9C6.567 9 5 7.433 5 5.5C5 3.567 6.567 2 8.5 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9M15.5 9C17.433 9 19 10.567 19 12.5C19 14.433 17.433 16 15.5 16C13.567 16 12 14.433 12 12.5C12 10.567 13.567 9 15.5 9Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);
export default Figma;
