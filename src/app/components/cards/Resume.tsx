import { Box, Card, List, Typography } from "@mui/material";
import { FC } from "react";

type content = {
  subheader?: string;
  subheader2?: string;
  bold?: string;
  tiny?: string;
  items?: string[];
  bullets?: string[];
};

type info = {
  header: string;
  contents: content[];
};

interface props {
  info: info;
  primary: boolean;
}

export const Resume: FC<props> = (props) => {
  const { info, primary } = props;

  return (
    <Card sx={{ m: 1, mb: 2, p: 2 }}>
      {primary ? (
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            borderBottom: 3,
            mb: 1,
          }}
        >
          {info.header}
        </Typography>
      ) : (
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            mb: 1,
          }}
        >
          {info.header}
        </Typography>
      )}
      {info.contents.map((field) => (
        <Box key={field.bold} mb={3}>
          <Typography variant="h6" fontWeight={600} hidden={!field.subheader}>
            {field.subheader}
          </Typography>
          <Typography variant="h6" fontWeight={500} hidden={!field.subheader2}>
            {field.subheader2}
          </Typography>
          <Typography variant="h6" fontWeight={600} color="primary">
            {field.bold}
          </Typography>
          <Typography variant="caption">{field.tiny}</Typography>
          {field.bullets?.map((item) => (
            <List key={item} sx={{ pl: 3, listStyleType: "disc" }}>
              <Typography display="list-item">{item}</Typography>
            </List>
          ))}
          {field.items?.map((item) => (
            <Typography key={item}>{item}</Typography>
          ))}
        </Box>
      ))}
    </Card>
  );
};
