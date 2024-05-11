import { Box, Card, List, Typography } from "@mui/material";
import { FC } from "react";

type content = {
  subheader: string;
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
}

export const Resume: FC<props> = (props) => {
  const { info } = props;
  console.log(info);
  return (
    <Card sx={{ mb: 3 }}>
      <Box sx={{ m: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {info.header}
        </Typography>
        {info.contents.map((field) => (
          <>
            <Typography variant="h6">{field.subheader}</Typography>
            <Typography variant="h6" color="primary">
              {field.bold}
            </Typography>
            <Typography variant="caption">{field.tiny}</Typography>
            {field.bullets?.map((item) => (
              <List sx={{ pl: 3, listStyleType: "disc" }}>
                <Typography>{item}</Typography>
              </List>
            ))}
            {field.items?.map((item) => <Typography>{item}</Typography>)}
          </>
        ))}
      </Box>
    </Card>
  );
};
