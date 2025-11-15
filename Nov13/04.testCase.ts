import sortCandidatesByScoreAndExperience from "./04.qn.js";

interface TestCase {
  expected: {
    name: string;
    age: number;
    experience: number;
    score: number;
    submittedDaysAgo: number;
  }[];
  input: {
    id: number;
    profile: {
      personal: { name: string; dob: string; active: boolean };
      professional: {
        experience: { totalYears: number; domains: string[] };
        performance: { score: string | null; lastReview: string };
      };
    };
    application: {
      position: { title: string; level: string };
      submission: { date: string; referred: boolean };
    };
  }[];
}

const testCases: TestCase[] = [
  {
    expected: [
      {
        name: "Eva Green",
        age: 31,
        experience: 6,
        score: 93.2,
        submittedDaysAgo: 297,
      },
      {
        name: "Alice Johnson",
        age: 33,
        experience: 5,
        score: 91,
        submittedDaysAgo: 276,
      },
      {
        name: "Brian Lee",
        age: 36,
        experience: 8,
        score: 87.5,
        submittedDaysAgo: 292,
      },
    ],
    input: [
      {
        id: 1001,
        profile: {
          personal: { name: "Alice Johnson", dob: "1992-08-12", active: true },
          professional: {
            experience: { totalYears: 5, domains: ["frontend", "ui"] },
            performance: { score: "91%", lastReview: "2024-12-01" },
          },
        },
        application: {
          position: { title: "Frontend Engineer", level: "Mid" },
          submission: { date: "2025-02-10", referred: true },
        },
      },
      {
        id: 1002,
        profile: {
          personal: { name: "Brian Lee", dob: "1989-05-05", active: true },
          professional: {
            experience: { totalYears: 8, domains: ["backend", "api"] },
            performance: { score: "87.5%", lastReview: "2024-11-28" },
          },
        },
        application: {
          position: { title: "Backend Engineer", level: "Senior" },
          submission: { date: "2025-01-25", referred: false },
        },
      },
      {
        id: 1003,
        profile: {
          personal: { name: "Clara Doe", dob: "1995-11-30", active: false },
          professional: {
            experience: { totalYears: 4, domains: ["fullstack"] },
            performance: { score: "90%", lastReview: "2024-09-05" },
          },
        },
        application: {
          position: { title: "Fullstack Developer", level: "Mid" },
          submission: { date: "2025-01-12", referred: true },
        },
      },
      {
        id: 1004,
        profile: {
          personal: { name: "David Kim", dob: "1990-03-17", active: true },
          professional: {
            experience: { totalYears: 3, domains: ["frontend"] },
            performance: { score: null, lastReview: "2024-08-10" },
          },
        },
        application: {
          position: { title: "UI Developer", level: "Junior" },
          submission: { date: "2025-02-01", referred: true },
        },
      },
      {
        id: 1005,
        profile: {
          personal: { name: "Eva Green", dob: "1994-10-22", active: true },
          professional: {
            experience: { totalYears: 6, domains: ["frontend", "design"] },
            performance: { score: "93.2%", lastReview: "2024-12-15" },
          },
        },
        application: {
          position: { title: "Frontend Architect", level: "Senior" },
          submission: { date: "2025-01-20", referred: false },
        },
      },
    ],
  },
  {
    expected: [
      {
        name: "David Kim",
        age: 35,
        experience: 3,
        score: 96,
        submittedDaysAgo: 285,
      },
      {
        name: "Clara Doe",
        age: 30,
        experience: 4,
        score: 44,
        submittedDaysAgo: 305,
      },
    ],
    input: [
      {
        id: 1001,
        profile: {
          personal: { name: "Alice Johnson", dob: "1992-08-12", active: false },
          professional: {
            experience: { totalYears: 5, domains: ["frontend", "ui"] },
            performance: { score: "91%", lastReview: "2024-12-01" },
          },
        },
        application: {
          position: { title: "Frontend Engineer", level: "Mid" },
          submission: { date: "2025-02-10", referred: true },
        },
      },
      {
        id: 1002,
        profile: {
          personal: { name: "Brian Lee", dob: "1989-05-05", active: false },
          professional: {
            experience: { totalYears: 8, domains: ["backend", "api"] },
            performance: { score: "98.5%", lastReview: "2024-11-28" },
          },
        },
        application: {
          position: { title: "Backend Engineer", level: "Senior" },
          submission: { date: "2025-01-25", referred: false },
        },
      },
      {
        id: 1003,
        profile: {
          personal: { name: "Clara Doe", dob: "1995-11-30", active: true },
          professional: {
            experience: { totalYears: 4, domains: ["fullstack"] },
            performance: { score: "44%", lastReview: "2024-09-05" },
          },
        },
        application: {
          position: { title: "Fullstack Developer", level: "Mid" },
          submission: { date: "2025-01-12", referred: true },
        },
      },
      {
        id: 1004,
        profile: {
          personal: { name: "David Kim", dob: "1990-03-17", active: true },
          professional: {
            experience: { totalYears: 3, domains: ["frontend"] },
            performance: { score: "96%", lastReview: "2024-08-10" },
          },
        },
        application: {
          position: { title: "UI Developer", level: "Junior" },
          submission: { date: "2025-02-01", referred: true },
        },
      },
      {
        id: 1005,
        profile: {
          personal: { name: "Eva Green", dob: "1994-10-22", active: false },
          professional: {
            experience: { totalYears: 6, domains: ["frontend", "design"] },
            performance: { score: "93.2%", lastReview: "2024-12-15" },
          },
        },
        application: {
          position: { title: "Frontend Architect", level: "Senior" },
          submission: { date: "2025-01-20", referred: false },
        },
      },
    ],
  },
  {
    expected: [
      {
        name: "David Kim",
        age: 35,
        experience: 3,
        score: 96,
        submittedDaysAgo: 285,
      },
      {
        name: "Alice Johnson",
        age: 33,
        experience: 5,
        score: 91,
        submittedDaysAgo: 276,
      },
      {
        name: "Clara Doe",
        age: 30,
        experience: 4,
        score: 44,
        submittedDaysAgo: 305,
      },
    ],
    input: [
      {
        id: 1001,
        profile: {
          personal: { name: "Alice Johnson", dob: "1992-08-12", active: true },
          professional: {
            experience: { totalYears: 5, domains: ["frontend", "ui"] },
            performance: { score: "91%", lastReview: "2024-12-01" },
          },
        },
        application: {
          position: { title: "Frontend Engineer", level: "Mid" },
          submission: { date: "2025-02-10", referred: true },
        },
      },
      {
        id: 1002,
        profile: {
          personal: { name: "Brian Lee", dob: "1989-05-05", active: false },
          professional: {
            experience: { totalYears: 8, domains: ["backend", "api"] },
            performance: { score: "98.5%", lastReview: "2024-11-28" },
          },
        },
        application: {
          position: { title: "Backend Engineer", level: "Senior" },
          submission: { date: "2025-01-25", referred: false },
        },
      },
      {
        id: 1003,
        profile: {
          personal: { name: "Clara Doe", dob: "1995-11-30", active: true },
          professional: {
            experience: { totalYears: 4, domains: ["fullstack"] },
            performance: { score: "44%", lastReview: "2024-09-05" },
          },
        },
        application: {
          position: { title: "Fullstack Developer", level: "Mid" },
          submission: { date: "2025-01-12", referred: true },
        },
      },
      {
        id: 1004,
        profile: {
          personal: { name: "David Kim", dob: "1990-03-17", active: true },
          professional: {
            experience: { totalYears: 3, domains: ["frontend"] },
            performance: { score: "96%", lastReview: "2024-08-10" },
          },
        },
        application: {
          position: { title: "UI Developer", level: "Junior" },
          submission: { date: "2025-02-01", referred: true },
        },
      },
      {
        id: 1005,
        profile: {
          personal: { name: "Eva Green", dob: "1994-10-22", active: false },
          professional: {
            experience: { totalYears: 6, domains: ["frontend", "design"] },
            performance: { score: "93.2%", lastReview: "2024-12-15" },
          },
        },
        application: {
          position: { title: "Frontend Architect", level: "Senior" },
          submission: { date: "2025-01-20", referred: false },
        },
      },
    ],
  },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = sortCandidatesByScoreAndExperience(testCase.input);
    const isSame = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      isSame ? `Testcase ${index + 1} passed` : `Testcase ${index + 1} failed`
    );
  });
}
