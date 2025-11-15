interface Candidates {
  id: number;
  profile: {
    personal: { name: string; dob: string; active: boolean };
    professional: {
      experience: { totalYears: number; domains: string[] };
      performance: { score: string; lastReview: string };
    };
  };
  application: {
    position: { title: string; level: string };
    submission: { date: string; referred: boolean };
  };
}
interface Output {
  name: string;
  age: number;
  experience: number;
  score: number | null;
  submittedDaysAgo: number;
}
interface Keys {
  key: string;
  order: string;
}
interface ToSort {
  a: string;
  b: string;
}

export default function sortCandidatesByScoreAndExperience(
  candidates: Candidates[]
): Output[] {
  const validCandidates: Output[] = [];
  const sortKeys: Keys[] = [
    { key: "score", order: "desc" },
    { key: "experience", order: "desc" },
    { key: "submittedDaysAgo", order: "desc" },
    { key: "name", order: "asc" },
  ];

  candidates.filter((candidate) => {
    if (
      candidate.profile.personal.active &&
      candidate.profile.professional.performance.score &&
      candidate.profile.professional.experience.totalYears >= 2
    ) {
      let date: Date = new Date("2025-11-13");
      let dob: Date = new Date(candidate.profile.personal.dob);
      let submissionDate: Date = new Date(
        candidate.application.submission.date
      );
      let age = date.getFullYear() - dob.getFullYear();

      let dateN = Number(date);
      let submissionN = Number(submissionDate);
      validCandidates.push({
        name: candidate.profile.personal.name,
        age: age,
        experience: candidate.profile.professional.experience.totalYears,
        score: Number(
          candidate.profile.professional.performance.score.replace("%", "")
        ),
        submittedDaysAgo: (dateN - submissionN) / (1000 * 60 * 60 * 24),
      });
      return true;
    }
  });

  validCandidates.sort((a, b) => {
    for (let { key, order } of sortKeys) {
      let valueA = a[key];
      let valueB = b[key];

      if (valueA > valueB) return order === "asc" ? 1 : -1;
      if (valueA < valueB) return order === "asc" ? -1 : 1;
    }
    return 0;
  });

  return validCandidates;
}

// console.log(sortCandidatesByScoreAndExperience(candidates));
