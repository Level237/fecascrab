// src/types/RequireContext.ts
export type RequireContext = {
    (path: string): any;
    keys(): string[];
  };
  