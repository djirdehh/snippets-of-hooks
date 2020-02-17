export interface CodeSample {
  id: string;
  title: string;
  snippet: string;
  notes: {
    [index: string]: string;
  };
}
