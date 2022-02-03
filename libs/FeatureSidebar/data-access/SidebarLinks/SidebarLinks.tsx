import IconHome from "../../ui/IconHome";
import IconExplore from "../../ui/IconExplore";
import IconNotification from "../../ui/IconNotification";
import IconMessages from "../../ui/IconMessages";
import IconBookmarks from "../../ui/IconBookmarks";
import IconLists from "../../ui/IconLists";
import IconProfile from "../../ui/IconProfile";

export const SidebarLinks: (string | JSX.Element)[][] = [
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

export default SidebarLinks;
