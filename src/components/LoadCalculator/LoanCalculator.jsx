import React, { useState } from "react";

const CarLoanCalculator = () => {
  const [carPrice, setCarPrice] = useState(25000); // Initial car price
  const [downPayment, setDownPayment] = useState(5000); // Initial down payment
  const [loanTerm, setLoanTerm] = useState(48); // Initial loan term in months
  const [interestRate, setInterestRate] = useState(5.0); // Initial interest rate
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    // Formula to calculate the monthly loan payment
    const monthlyInterestRate = interestRate / 100 / 12;
    const loanAmount = carPrice - downPayment;
    const numerator =
      monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm);
    const denominator = Math.pow(1 + monthlyInterestRate, loanTerm) - 1;
    const monthlyPaymentResult = loanAmount * (numerator / denominator);
    setMonthlyPayment(monthlyPaymentResult.toFixed(2));
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Car Loan Calculator
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="carPrice" className="block text-gray-600">
                Car Price ($)
              </label>
              <input
                type="number"
                id="carPrice"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                value={carPrice}
                onChange={(e) => setCarPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="downPayment" className="block text-gray-600">
                Down Payment ($)
              </label>
              <input
                type="number"
                id="downPayment"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="loanTerm" className="block text-gray-600">
                Loan Term (months)
              </label>
              <input
                type="number"
                id="loanTerm"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="interestRate" className="block text-gray-600">
                Interest Rate (%)
              </label>
              <input
                type="number"
                id="interestRate"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-blue-600 text-white mt-4 py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={calculateMonthlyPayment}
          >
            Calculate Monthly Payment
          </button>
          {monthlyPayment > 0 && (
            <div className="mt-4">
              <p className="text-lg font-semibold">
                Monthly Payment: ${monthlyPayment}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarLoanCalculator;
