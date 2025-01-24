import { Box, Card, IconButton, Link, Typography } from "@mui/material";
import { Dispatch, FC } from "react";
import EmailIcon from "@mui/icons-material/Email";
import copy from "clipboard-copy";
import PlaceIcon from "@mui/icons-material/Place";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";

type info = {
  email?: string;
  phone?: string;
  location?: string;
  github?: { label: string; link: string };
  links?: { label: string; link: string }[];
};

interface props {
  info: info;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  setMessage: Dispatch<React.SetStateAction<string>>;
}

export const Contact: FC<props> = (props) => {
  const { info, open, setOpen, setMessage } = props;
  const maps = info.location
    ? "https://www.google.com/maps/place/" + info.location.replace(" ", "+")
    : "/";
  const copyEmail = () => {
    if (open) {
      setOpen(false);
    }
    setMessage("Email Copied!");
    setOpen(true);
    copy(info.email || "");
  };
  const copyPhone = () => {
    if (open) {
      setOpen(false);
    }
    setMessage("Phone Number Copied!");
    setOpen(true);
    copy(info.phone || "");
  };
  return (
    <Card sx={{ m: 1, mb: 2, p: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        Contact Information
      </Typography>

      <Box hidden={!info.email}>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="primary" onClick={copyEmail}>
            <EmailIcon />
          </IconButton>
          {info.email}
        </Typography>
      </Box>
      <Box hidden={!info.phone}>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="primary" onClick={copyPhone}>
            <PhoneIcon />
          </IconButton>
          {info.phone}
        </Typography>
      </Box>
      <Box hidden={!info.location}>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <Link href={maps}>
            <IconButton color="primary">
              <PlaceIcon />
            </IconButton>
          </Link>
          {info.location}
        </Typography>
      </Box>

      <Box hidden={!info.github}>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <Link href={info.github?.link}>
            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>
          </Link>
          {info.github?.label}
        </Typography>
      </Box>
      {info.links?.map((site) => (
        <Typography
          key={site.label}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Link href={site.link}>
            <IconButton color="primary">
              <PublicIcon />
            </IconButton>
          </Link>
          {site.label}
        </Typography>
      ))}
    </Card>
  );
};
