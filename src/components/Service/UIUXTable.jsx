import React from "react";

const UIUXTable = ({ className, comparisonData }) => {
  return (
    <section
      className={`w-full px-3.75 lg:py-25 py-15 relative overflow-hidden lg:my-25 my-15 ${className}`}
    >
      <div className="max-w-375 mx-auto">
        <div className="text-center mb-8">
          <h2 className="primary-heading">{comparisonData.mainHeading}</h2>
          <p
            className={`peragraph mt-3 text-paragraph-3  mx-auto w-full ${comparisonData.id === 2 ? "lg:w-4/5" : "lg:w-3/5"}`}
          >
            {comparisonData.mainDescription}
          </p>
        </div>

        <div
          className={`border border-[#E7E7E7] rounded-[30px] lg:p-10 p-8 scrollbarTable ${
            comparisonData.id === 2 ? "bg-[#FAFBFF]" : "bg-white"
          }`}
        >
          <table className="min-w-225 w-full">
            <thead>
              <tr className="">
                <th className="peragraph font-medium! text-[#232323] text-start pb-5 border-b border-[#D9D9D9] lg:w-11/20 w-2/5">
                  {comparisonData.title}
                </th>
                {comparisonData.columns.map((columns, index) => (
                  <th
                    className="peragraph font-medium! text-[#232323] pb-5 border-b border-[#D9D9D9] lg:w-3/20 w-1/5"
                    key={index}
                  >
                    {columns}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {comparisonData.rows.map((row, index) => (
                <tr key={index}>
                  <td className="py-5 align-middle border-b border-[#D9D9D9] text-[14px] font-urbanist font-normal leading-[100%] text-paragraph-4">
                    {row.label}
                  </td>
                  {row.values.map((value, colIndex) => (
                    <td
                      className="py-5 align-middle border-b border-[#D9D9D9] text-[14px] font-urbanist font-normal leading-[100%] text-paragraph-4"
                      key={colIndex}
                    >
                      <div className="flex items-center justify-center">
                        {value ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M19.9846 0.400883C14.5315 3.59473 10.3747 7.65641 7.38457 12.7049L7.0216 13.3128L6.91358 13.1674C5.61296 11.4009 2.89938 9.82823 0.531481 9.46699C0.203086 9.41854 0.168519 9.41854 0.0864197 9.49343C0.0388889 9.53748 0 9.62999 0 9.69607C0 9.79739 0.0648148 9.86788 0.375926 10.119C0.898765 10.5331 1.74568 11.3745 2.24259 11.9824C3.76358 13.8282 5.09012 16.1146 6.69321 19.6388C6.84012 19.9648 6.93518 20.0397 7.11667 19.9824C7.17284 19.9648 7.36728 19.5992 7.71728 18.8679C11.2735 11.3613 15.7543 5.04848 20.5377 0.797359C20.9136 0.462557 21 0.361235 21 0.264318C21 0.127754 20.8833 0 20.7537 0C20.7062 0 20.3605 0.180616 19.9846 0.400883Z"
                              fill="#0048FF"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="2"
                            viewBox="0 0 14 2"
                            fill="none"
                          >
                            <rect width="14" height="2" fill="#909090" />
                          </svg>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UIUXTable;
