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
    id:1,
    name: "Inbox",
    icon: Photo,
  },
  {
    id:2,
    name: "Starred",
    icon: StarBorderPurple500Outlined,
  },
  {
    id:3,
    name: "Snoozed",
    icon: AccessTimeOutlined,
  },
  {
    id:4,
    name: "Important",
    icon: LabelOutlined,
  },
  {
    id:5,
    name: "Sent",
    icon: SendOutlined,
  },
  {
    id:6,
    name: "Drafts",
    icon: InsertDriveFileOutlined,
  }
];

export const SEE_MORE_SIDEBAR_DATA = [
  {
    id:1,
    name: "All Mail",
    icon: EmailOutlined,
  },
  {
    id:2,
    name: "Trash",
    icon: DeleteOutline,
  },
  {
    id:3,
    name: "Spam",
    icon: ReportOutlined,
  }
]

export const emailConfig = {
  Host: "smtp.elasticemail.com",
  Username: 'gmailclonetest@yopmail.com',  // Put your user name from email js registration
  Password: '834FEC083212A69242A8338F09C80359F60B',      // Put your password from email js registration
  Port: 2525,
}
