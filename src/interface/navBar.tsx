export interface ButtonsClass {
  myData?: string;
  myDataIcon?: string;
  myDataText?: string;
  client?: string;
  clientIcon?: string;
  clientText?: string;
  table?: string;
  tableIcon?: string;
  tableText?: string;
  pdf?: string;
  pdfIcon?: string;
  pdfText?: string;
}

export interface TypeButton {
  type: string;
  isContainer?: boolean;
  isIcon?: boolean;
  isText?: boolean;
}
