"use client";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {children}

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center p-6 sm:p-8 lg:p-12 min-h-[400px] lg:min-h-screen">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl sm:text-[34px] lg:text-[40px] font-bold text-white mb-6 sm:mb-[12px]">
            ticktock
          </h2>
          <p className="text-base sm:text-[16px] text-blue-50 leading-relaxed">
            Introducing ticktock, our cutting-edge timesheet web application
            designed to revolutionize how you manage employee work hours. With
            ticktock, you can effortlessly track and monitor employee attendance
            and productivity from anywhere, anytime, using any
            internet-connected device.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .min-h-screen {
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthLayout;
