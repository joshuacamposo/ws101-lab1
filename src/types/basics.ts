let studentName: string = "Juan";
let age: number = 20;
let isEnrolled: boolean = true;
let subjects: string[] = ["WS101", "IM101"];
let grades: Array<number> = [95, 88, 92];

// 2. Tuple — fixed-length typed array
let studentRecord: [string, number, boolean] = ["Juan", 20, true];

// 3. Function with typed params and return
function computeAverage(scores: number[]): number {
  const total = scores.reduce((sum, s) => sum + s, 0);
  return total / scores.length;
}

console.log(computeAverage(grades));  // 91.666...

// 4. Object with interface
interface Student {
  id: number;
  name: string;
  course: string;
  email?: string;  // optional
}

function describeStudent(student: Student): string {
  return `${student.name} (${student.id}) — ${student.course}`;
}

const juan: Student = { id: 101, name: "Juan", course: "BSIT" };
console.log(describeStudent(juan));

// 5. Union and literal types
type Status = "active" | "inactive" | "graduated";

function getStatusMessage(status: Status): string {
  switch (status) {
    case "active": return "Currently enrolled";
    case "inactive": return "Not enrolled this term";
    case "graduated": return "Completed the program";
  }
}