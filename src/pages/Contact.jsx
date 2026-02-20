import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[380px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/slide5.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="text-sm mt-2">
            Home / <span className="text-yellow-400">Contact</span>
          </p>
        </div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div data-aos="fade-up" className="bg-white rounded-xl shadow-lg p-8 text-center">
              <MapPin className="mx-auto text-yellow-400 mb-4" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-sm text-gray-600">
                Indala Phata, Mardi Road,<br /> Amravati, Maharashtra
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="150" className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Mail className="mx-auto text-yellow-400 mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">
                jitendradhole6474@gmail.com <br />
                nutanmukbadhir@gmail.com
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Phone className="mx-auto text-yellow-400 mb-4" />
              <h3 className="font-semibold mb-2">Call Now</h3>
              <p className="text-sm text-gray-600">
                +91 83790 79041 <br />
                +91 97663 92434
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800">
              Have Any Questions?
            </h2>
            <p className="text-gray-600 mt-2">
              We are here to help and answer any questions you may have.
            </p>
          </div>

          <form
            data-aos="fade-up"
            className="bg-white shadow-2xl rounded-xl p-8 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
              />

            </div>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="mt-6 w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
            ></textarea>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-md transition shadow"
              >
                Send Message <Send size={18} />
              </button>
            </div>
          </form>

        </div>
      </section>

      {/* ================= BRANCHES ================= */}
      <section className="py-20 bg-[#FFFEF5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">

          <h2 className="text-2xl font-bold text-center mb-14" data-aos="fade-up">
            Our Branches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div data-aos="fade-right" className="bg-white p-8 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2">Vidyadeep Special School</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Operated by Mental & Physically Challenged Development Institute, Amravati.<br />
                Indala Phata, Mardi Road, Amravati.<br />
                Recognized by Government of Maharashtra.
              </p>
              <p className="mt-3 text-sm">
                📞 8379079041 <br /> 📧 jitendradhole6474@gmail.com
              </p>
            </div>

            <div data-aos="fade-left" className="bg-white p-8 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2">Nutan Deaf & Dumb School</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Operated by Mental & Physically Challenged Development Institute, Amravati.<br />
                Indala Phata, Mardi Road, Amravati.<br />
                Recognized by Government of Maharashtra.
              </p>
              <p className="mt-3 text-sm">
                📞 7875021422 <br /> 📧 nutanmukbadhir@gmail.com
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="h-[400px] w-full">
        <iframe
          title="Amravati Map"
          src="https://maps.google.com/maps?q=Amravati&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </section>

      {/* ================= WHATSAPP ================= */}
      <a
        href="https://wa.me/918379079041"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition"
      >
        <MessageCircle />
      </a>

    </div>
  );
};

export default Contact;