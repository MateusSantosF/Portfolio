type THashLinkProps = {
  children: string | React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function HashLink({ children, ...props }: THashLinkProps) {
  return <a {...props}>{children}</a>;
}

export default HashLink;
