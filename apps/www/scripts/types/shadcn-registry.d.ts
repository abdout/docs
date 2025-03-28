declare module 'shadcn/registry' {
  import { z } from "zod";

  export interface Registry {
    items: RegistryItem[];
  }

  export interface RegistryItem {
    name: string;
    type: string;
    description?: string;
    dependencies?: string[];
    registryDependencies?: string[];
    files?: (string | { path: string; type: string; target?: string })[];
    categories?: string[];
    meta?: Record<string, any>;
  }

  export const registryItemSchema: z.ZodType<any>;
  export const registryItemFileSchema: z.ZodType<any>;
  export const registryItemTypeSchema: z.ZodType<string>;
  export const registrySchema: z.ZodType<Registry>;
} 