import React from 'react';
import { Head } from '../components/SEO/Head';
import { BarChart2 } from 'lucide-react';
import { SGPACalculator } from '../components/calculator/SGPACalculator';
import { CGPACalculator } from '../components/calculator/CGPACalculator';
import { AdUnit } from '../components/AdUnit';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorPage: React.FC = () => {
  const {
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
  } = useCalculator();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
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

      <div className="space-y-12">
        {/* SGPA Calculator Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <SGPACalculator
            subjects={subjects}
            onAddSubject={handleAddSubject}
            onRemoveSubject={handleRemoveSubject}
            onSubjectChange={handleSubjectChange}
            onCalculate={calculateSgpa}
            onReset={resetCalculator}
            sgpa={sgpa}
            percentage={percentage}
          />
        </div>

        {/* Middle Ad */}
        <AdUnit slot="1357924680" />

        {/* CGPA Calculator Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <CGPACalculator
            semesters={semesters}
            onAddSemester={handleAddSemester}
            onSemesterChange={handleSemesterChange}
            onCalculate={calculateCgpa}
            onReset={resetCalculator}
            cgpa={cgpa}
          />
        </div>

        {/* Bottom Ad */}
        <AdUnit slot="3579246801" format="horizontal" />
      </div>
    </div>
  );
};