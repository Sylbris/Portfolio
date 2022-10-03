import * as React from "react";
import { projectObject } from "../../../data/projects";
import MediaCard from "../../ProjectCard/ProjectCard";
import Grid from '@mui/material/Grid';

export default function ProjectsTab() {
  return (
    <>
      <Grid container spacing={2}>
        {projectObject.map((data) => {
          return (
            <Grid item xs={6} md={4}>
                <MediaCard project={data} />
            </Grid>
            );
        })}
      </Grid>
    </>
  );
}
