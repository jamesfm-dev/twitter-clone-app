import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import IconHome from "../ui/IconHome";
import IconExplore from "../ui/IconExplore";
import IconNotification from "../ui/IconNotification";
import IconMessages from "../ui/IconMessages";
import IconBookmarks from "../ui/IconBookmarks";
import IconLists from "../ui/IconLists";
import IconProfile from "../ui/IconProfile";
import ButtonTweet from "../ui/ButtonTweet";
import ButtonTweetMobile from "../ui/ButtonTweetMobile";
import SidebarLink from "../ui/SidebarLink";
import TwitterLogo from "../../../components/TwitterLogo";
import Link from "../../../components/Link";

const FeatureSidebarDesktop = () => {
  const route = useRouter();

  const sidebarLinks: (string | JSX.Element)[][] = [
    [
      "Home",
      <IconHome key={"IconHome"} />,
      <IconHome key={"IconHomeActive"} active />,
    ],
    [
      "Explore",
      <IconExplore key={"IconExplore"} />,
      <IconExplore key={"IconExploreActive"} active />,
    ],
    [
      "Notifications",
      <IconNotification key={"IconNotification"} />,
      <IconNotification key={"IconNotificationActive"} active />,
    ],
    [
      "Messages",
      <IconMessages key={"IconMessages"} />,
      <IconMessages key={"IconMessagesActive"} active />,
    ],
    [
      "Bookmarks",
      <IconBookmarks key={"IconBookmarks"} />,
      <IconBookmarks key={"IconBookmarksActive"} active />,
    ],
    [
      "Lists",
      <IconLists key={"IconLists"} />,
      <IconLists key={"IconListsActive"} active />,
    ],
    [
      "Profile",
      <IconProfile key={"IconProfile"} />,
      <IconProfile key={"IconProfileActive"} active />,
    ],
  ];

  return (
    <Container
      sx={{
        pt: 2,
        display: { xs: "none", sm: "block", md: "block", lg: "block" },
      }}
      disableGutters={true}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item>
          <Link href={{ pathname: "/home" }}>
            <TwitterLogo />
          </Link>
        </Grid>
        {sidebarLinks.map((links, i) => (
          <Grid item key={i}>
            <Link
              href={{
                pathname: `/${links[0].toString().toLowerCase()}`,
              }}
              underline="none"
            >
              <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item>
                  {route.pathname.substring(1) ===
                  links[0].toString().toLowerCase()
                    ? links[2]
                    : links[1]}
                </Grid>
                <Grid
                  item
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    },
                  }}
                >
                  <SidebarLink
                    active={
                      route.pathname.substring(1) ===
                      links[0].toString().toLowerCase()
                        ? true
                        : false
                    }
                  >
                    {links[0].toString()}
                  </SidebarLink>
                </Grid>
              </Grid>
            </Link>
          </Grid>
        ))}
        <Grid
          item
          sx={{
            width: 225,
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <ButtonTweet href={"/compose/tweet"} />
        </Grid>
        <Grid item sx={{ display: { md: "block", lg: "none", xl: "none" } }}>
          <ButtonTweetMobile href={"/compose/tweet"} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeatureSidebarDesktop;
