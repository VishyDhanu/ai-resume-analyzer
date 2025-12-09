import React, { useState } from "react";
import Navbar from "~/components/Navbar";

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [statusText, setStatusText] = useState(" ");

  return (
    <main className="bg-gradient">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart feedback for your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img
                src="/public/images/resume-scan.gif"
                alt=""
                className="w-full"
              />
            </>
          ) : (
            <h2>Drop your resume for an ATS score and improvement tips</h2>
          )}
          {!isProcessing && (
            <form
              id="upload-form"
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-4">
              <label htmlFor="company-name">Company Name</label>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default upload;
