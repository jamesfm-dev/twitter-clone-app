import Typography from "@mui/material/Typography";

interface SidebarLinkProps {
  active?: boolean;
  children?: string;
}

const SidebarLink = ({ children, active }: SidebarLinkProps) => {
  return (
    <Typography
      sx={{
        fontSize: "20px",
        fontWeight: active ? "bold" : "",
        color: "#D9D9D9",
      }}
    >
      {children}
    </Typography>
  );
};
export default SidebarLink;
