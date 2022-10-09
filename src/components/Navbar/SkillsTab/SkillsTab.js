import React from "react";
import Grid from "@mui/material/Grid";
import {ReactComponent as NodeIcon} from "../../../assets/node.svg";
import {ReactComponent as JSIcon} from "../../../assets/javascriptIcon.svg";
import {ReactComponent as JavaIcon} from "../../../assets/javaIcon.svg";
import {ReactComponent as ReactIcon} from "../../../assets/react.svg";

export default function SkillsTab() {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
            <NodeIcon width={100} height={100}/>
            <JavaIcon />
            <JSIcon />
            <ReactIcon />
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </>
    );
  }
  