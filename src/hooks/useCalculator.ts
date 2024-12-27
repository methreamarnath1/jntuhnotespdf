import { useState } from 'react';
import { Subject, Semester } from '../types';

export const useCalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([{ credits: 0, grade: 10 }]);
  const [semesters, setSemesters] = useState<Semester[]>([{ sgpa: 0, credits: 0 }]);
  const [sgpa, setSgpa] = useState<number | null>(null);
  const [cgpa, setCgpa] = useState<number | null>(null);
  const [percentage, setPercentage] = useState<number | null>(null);

  const handleAddSubject = () => {
    setSubjects([...subjects, { credits: 0, grade: 10 }]);
  };

  const handleRemoveSubject = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const handleSubjectChange = (index: number, field: keyof Subject, value: string) => {
    const parsedValue = parseFloat(value);
    const newSubjects = [...subjects];
    newSubjects[index][field] = isNaN(parsedValue) ? 0 : parsedValue;
    setSubjects(newSubjects);
  };

  const handleAddSemester = () => {
    setSemesters([...semesters, { sgpa: 0, credits: 0 }]);
  };

  const handleSemesterChange = (index: number, field: keyof Semester, value: string) => {
    const parsedValue = parseFloat(value);
    const newSemesters = [...semesters];
    newSemesters[index][field] = isNaN(parsedValue) ? 0 : parsedValue;
    setSemesters(newSemesters);
  };

  const calculateSgpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    subjects.forEach(subject => {
      totalCredits += subject.credits;
      totalPoints += subject.credits * subject.grade;
    });
    const calculatedSgpa = totalPoints / totalCredits || 0;
    const calculatedPercentage = calculatedSgpa * 10;
    setSgpa(calculatedSgpa);
    setPercentage(calculatedPercentage);
  };

  const calculateCgpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    semesters.forEach(semester => {
      totalCredits += semester.credits;
      totalPoints += semester.sgpa * semester.credits;
    });
    const calculatedCgpa = totalPoints / totalCredits || 0;
    setCgpa(calculatedCgpa);
  };

  const resetCalculator = () => {
    setSubjects([{ credits: 0, grade: 10 }]);
    setSemesters([{ sgpa: 0, credits: 0 }]);
    setSgpa(null);
    setCgpa(null);
    setPercentage(null);
  };

  return {
    subjects,
    semesters,
    sgpa,
    cgpa,
    percentage,
    handleAddSubject,
    handleRemoveSubject,
    handleSubjectChange,
    handleAddSemester,
    handleSemesterChange,
    calculateSgpa,
    calculateCgpa,
    resetCalculator
  };
};