export interface Note {
  id: string;
  subject: string;
  branch: Branch;
  year: Year;
  semester: Semester;
  regulation: Regulation;
  coverUrl?: string;
  description: string;
  price: number;
  pdfUrl?: string;
}

export type Branch = 'CSE' | 'CSM' | 'ECE' | 'EEE' | 'CIVIL' | 'MECHANICAL';
export type Year = '1st' | '2nd' | '3rd' | '4th';
export type Semester = '1st' | '2nd';
export type Regulation = 'R16' | 'R18' | 'R22';