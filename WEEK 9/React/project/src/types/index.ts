export interface User {
  name: string;
  email: string;
  password: string;
}

export interface CourseResult {
  courseName: string;
  mark: number;
  cu: number;
  gpa: number;
}

export interface Results {
  y1s1: CourseResult[];
  y1s2: CourseResult[];
  y2s1: CourseResult[];
  y2s2: CourseResult[];
}

export interface UserResults {
  [email: string]: Results;
}