import React, { useState, useEffect } from 'react';
import { Head } from '../components/SEO/Head';
import { Chart, registerables } from 'chart.js';
import { RefreshCw, Plus, Calculator, BarChart2 } from 'lucide-react';
import { AdUnit } from '../components/AdUnit';

Chart.register(...registerables);

interface Subject {
  credits: number;
  grade: number;
}

interface Semester {
  sgpa: number;
  credits: number;
}

export const CalculatorPage: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([{ credits: 0, grade: 10 }]);
  const [semesters, setSemesters] = useState<Semester[]>([{ sgpa: 0, credits: 0 }]);
  const [sgpa, setSgpa] = useState<number | null>(null);
  const [cgpa, setCgpa] = useState<number | null>(null);
  const [percentage, setPercentage] = useState<number | null>(null);

  useEffect(() => {
    if (percentage !== null) {
      renderChart(percentage);
    }
  }, [percentage]);

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

  const renderChart = (percentage: number) => {
    const canvas = document.getElementById('percentageChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Percentage', 'Remaining'],
            datasets: [{
              label: 'Percentage',
              data: [percentage, 100 - percentage],
              backgroundColor: ['#158fe6', '#333'],
              hoverBackgroundColor: ['#117bb5', '#444']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context) {
                    let label = context.label || '';
                    if (label) {
                      label += ': ';
                    }
                    label += Math.round(context.raw as number * 100) / 100 + '%';
                    return label;
                  }
                }
              }
            }
          }
        });
      }
    }
  };

  const resetCalculator = () => {
    setSubjects([{ credits: 0, grade: 10 }]);
    setSemesters([{ sgpa: 0, credits: 0 }]);
    setSgpa(null);
    setCgpa(null);
    setPercentage(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Head 
        title="SGPA & CGPA Calculator - JNTUH Notes PDF"
        description="Calculate your SGPA and CGPA easily"
      />

      {/* Top Ad */}
      <AdUnit slot="2468013579" />

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white flex justify-center items-center">
          <BarChart2 className="mr-2" /> SGPA & CGPA Calculator
        </h1>
      </div>

      <div className="calculator-container bg-gray-900 p-8 rounded-lg shadow-lg">
        {/* SGPA Calculator Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">SGPA Calculator</h2>
          <p className="text-gray-400 mb-4">Calculate your SGPA based on credits and expected grade.</p>
          <div id="subjects-container">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center mb-3 space-x-4">
                <div className="w-1/3">
                  <label className="block text-gray-300 mb-1">Credits</label>
                  <input
                    type="number"
                    className="form-control w-full bg-gray-800 text-white border border-blue-500 focus:ring-blue-500 focus:border-blue-500 rounded-lg p-2"
                    placeholder="Credits"
                    value={subject.credits.toString()}
                    onChange={(e) => handleSubjectChange(index, 'credits', e.target.value)}
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-gray-300 mb-1">Grade</label>
                  <select
                    className="form-select w-full bg-gray-800 text-white border border-blue-500 focus:ring-blue-500 focus:border-blue-500 rounded-lg p-2"
                    value={subject.grade.toString()}
                    onChange={(e) => handleSubjectChange(index, 'grade', e.target.value)}
                  >
                    <option value="10">O</option>
                    <option value="9">A+</option>
                    <option value="8">A</option>
                    <option value="7">B+</option>
                    <option value="6">B</option>
                    <option value="5">C</option>
                    <option value="0">F</option>
                    <option value="0">Ab</option>
                  </select>
                </div>
                {index > 0 && (
                  <button
                    className="btn btn-danger mt-7"
                    onClick={() => handleRemoveSubject(index)}
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 space-x-2">
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-flex items-center" onClick={handleAddSubject}>
              <Plus className="mr-2" /> Add Subject
            </button>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-flex items-center" onClick={calculateSgpa}>
              <Calculator className="mr-2" /> Calculate SGPA
            </button>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-flex items-center" onClick={resetCalculator}>
              <RefreshCw className="mr-2" /> Refresh
            </button>
          </div>
          {sgpa !== null && (
            <div className="result text-white mt-4">
              <div>Your SGPA is {sgpa.toFixed(4)}</div>
              <div>Your Percentage is {percentage?.toFixed(2)}%</div>
              <div id="chart-container" className="mt-4">
                <canvas id="percentageChart"></canvas>
              </div>
            </div>
          )}
        </div>

        {/* Middle Ad */}
        <div className="my-8">
          <AdUnit slot="1357924680" />
        </div>

        {/* CGPA Calculator Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">CGPA Calculator</h2>
          <p className="text-gray-400 mb-4">Calculate your CGPA based on semester SGPA and credits.</p>
          <div id="semesters-container">
            {semesters.map((semester, index) => (
              <div key={index} className="flex items-center mb-3 space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-300 mb-1">SGPA</label>
                  <input
                    type="number"
                    className="form-control w-full bg-gray-800 text-white border border-blue-500 focus:ring-blue-500 focus:border-blue-500 rounded-lg p-2"
                    placeholder="SGPA"
                    value={semester.sgpa.toString()}
                    onChange={(e) => handleSemesterChange(index, 'sgpa', e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-300 mb-1">Credits</label>
                  <input
                    type="number"
                    className="form-control w-full bg-gray-800 text-white border border-blue-500 focus:ring-blue-500 focus:border-blue-500 rounded-lg p-2"
                    placeholder="Credits"
                    value={semester.credits.toString()}
                    onChange={(e) => handleSemesterChange(index, 'credits', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 space-x-2">
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-flex items-center" onClick={handleAddSemester}>
              <Plus className="mr-2" /> Add Semester
            </button>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-flex items-center" onClick={calculateCgpa}>
              <Calculator className="mr-2" /> Calculate CGPA
            </button>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-flex items-center" onClick={resetCalculator}>
              <RefreshCw className="mr-2" /> Refresh
            </button>
          </div>
          {cgpa !== null && (
            <div className="result text-white mt-4">
              Your CGPA is {cgpa.toFixed(4)}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="mt-8">
        <AdUnit slot="3579246801" format="horizontal" />
      </div>
    </div>
  );
};