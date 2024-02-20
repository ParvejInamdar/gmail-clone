import {
  Photo,
  StarBorderPurple500Outlined,
  AccessTimeOutlined,
  LabelOutlined,
  SendOutlined,
  InsertDriveFileOutlined,
  DeleteOutline,
  EmailOutlined,
  ReportOutlined
} from "@mui/icons-material";

export const SIDE_BAR_DATA = [
  {
    name: "Inbox",
    icon: Photo,
  },
  {
    name: "Starred",
    icon: StarBorderPurple500Outlined,
  },
  {
    name: "Snoozed",
    icon: AccessTimeOutlined,
  },
  {
    name: "Important",
    icon: LabelOutlined,
  },
  {
    name: "Sent",
    icon: SendOutlined,
  },
  {
    name: "Drafts",
    icon: InsertDriveFileOutlined,
  }
];

export const SEE_MORE_SIDEBAR_DATA = [
  {
    name: "All Mail",
    icon: EmailOutlined,
  },
  {
    name: "Trash",
    icon: DeleteOutline,
  },
  {
    name: "Spam",
    icon: ReportOutlined,
  }
]
