import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconHome from "../ui/IconHome";
import IconExplore from "../ui/IconExplore";
import IconNotification from "../ui/IconNotification";
import IconMessages from "../ui/IconMessages";
import Link from "../../../components/Link";

const FeatureSidebarMobile = () => {
  const route = useRouter();

  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "black",
        borderTop: "#2d2d2d 1px solid",
        display: {
          xs: "block",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Toolbar
        disableGutters={true}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link
          href={{
            pathname: `/home`,
          }}
          underline="none"
        >
          <IconHome active={route.pathname.substring(1) === "home"} />
        </Link>

        <Link
          href={{
            pathname: `/explore`,
          }}
          underline="none"
        >
          <IconExplore active={route.pathname.substring(1) === "explore"} />
        </Link>

        <Link
          href={{
            pathname: `/notifications`,
          }}
          underline="none"
        >
          <IconNotification
            active={route.pathname.substring(1) === "notifications"}
          />
        </Link>
        <Link
          href={{
            pathname: `/messages`,
          }}
          underline="none"
        >
          <IconMessages active={route.pathname.substring(1) === "messages"} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default FeatureSidebarMobile;
