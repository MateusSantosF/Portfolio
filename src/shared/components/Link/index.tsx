import { NavLink, NavLinkProps } from "react-router-dom";

type TLinkProps = {
  children: string | React.ReactNode;
} & NavLinkProps;

function Link({ children, ...props }: TLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive, isPending }) => {
        return isActive ? "active" : isPending ? "pending" : "";
      }}
    >
      {children}
    </NavLink>
  );
}

export default Link;
