import React from "react";

const GetInvolved = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ===== Heading ===== */}
        <div className="max-w-3xl" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Get Involved
          </h1>
          <p className="mt-4 text-gray-600">
            Your involvement helps us sustain education, care, and dignity for
            children with special needs.
          </p>
        </div>

        {/* ===== Donation Section ===== */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          data-aos="fade-right"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Support Through Donations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Donations enable us to provide educational materials, therapy,
              meals, infrastructure, and trained staff support. Every
              contribution directly impacts a child’s life.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-sm space-y-2">
            <p><strong>Bank:</strong> Central Bank of India</p>
            <p><strong>Account Name:</strong> Mandbudhi Va Sharirik Vikas Sanstha</p>
            <p><strong>Account Holder:</strong> Mr. Sanjay Krishnarao Gudadhe</p>
            <p><strong>Account Number:</strong> 5245073756</p>
            <p><strong>IFSC Code:</strong> CBIN0283671</p>
          </div>
        </div>

        {/* ===== Volunteer Section ===== */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          data-aos="fade-left"
        >
          <div className="order-2 lg:order-1">
            <div className="bg-green-50 rounded-2xl p-6">
              <ul className="space-y-3 text-gray-700">
                <li>• Classroom & activity support</li>
                <li>• Event & program assistance</li>
                <li>• Professional skill contribution</li>
                <li>• Community outreach support</li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Volunteer With Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Volunteers play a vital role in creating a supportive and inclusive
              environment. Your time and compassion can change lives.
            </p>

            <a
              href="https://wa.me/918379079041"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Connect via WhatsApp
            </a>
          </div>
        </div>

        {/* ===== Awareness ===== */}
        <div
          className="border-t pt-12 max-w-3xl"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Spread Awareness
          </h2>
          <p className="text-gray-600">
            By sharing our mission and advocating for inclusive education, you
            help build understanding, acceptance, and opportunity for children
            with special needs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GetInvolved;