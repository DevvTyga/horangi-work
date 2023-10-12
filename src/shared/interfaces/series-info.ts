import { ProjectInfo } from "./project-info";

export interface SeriesInfo {
  id: string;
  name: string;
  projects: ProjectInfo[];
}
