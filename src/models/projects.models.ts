export interface IProject {
  id: number;
  title: string;
  name: string;
  client: string;
  logo: string;
  description: string;
  about: string;
  goal: string;
  execution: string;
  results: string;
  background_image: string;
  github?: string;
  website?: string;
  stack: string[];
  service: string;
}
