import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import Schemas from "./sanity/schemas";

const config = defineConfig({
      projectId:"naeom6rc",
      dataset:"production",
      title:"My website",
      apiVersion:"2023-05-15",
      basePath:"/admin",
      plugins:[
            deskTool()
      ],
      schema: {
            types:Schemas
      }
});

export default config;