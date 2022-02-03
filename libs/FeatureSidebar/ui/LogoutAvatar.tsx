import Avatar from "@mui/material/Avatar";

export interface LogoutAvatarProps {
  src?: string;
  name?: string;
  userName: string;
}

const LogoutAvatar = (props: LogoutAvatarProps) => {
  const { name, userName, src } = props;

  return (
    <Avatar sx={{ width: 40, height: 40 }} src={src}>
      {!name
        ? userName.toString().charAt(1).toLocaleUpperCase()
        : name.toString().charAt(0).toLocaleUpperCase()}
    </Avatar>
  );
};

export default LogoutAvatar;
