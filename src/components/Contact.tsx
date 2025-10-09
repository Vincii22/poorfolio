export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center px-24 text-gray-300 overflow-hidden"
    >
      {/* Top-Centered Label */}
      <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-3xl font-bold text-cyan-400">
         Initiate Connection
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between gap-12 w-full max-w-7xl">
        {/* LEFT SIDE - Contact Info */}
        <div className="flex-1 bg-[#0f0f0f] border border-cyan-400/30 rounded-2xl p-10 shadow-lg">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Let’s Connect</h3>
          <p className="text-gray-300 mb-6">
            Feel free to reach out if you have a project in mind, want to collaborate, or just say hi.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>
              <span className="text-cyan-400"></span> Email:{" "}
              <span className="font-medium">arvingm1522@gmail.com</span>
            </p>
            <p>
              <span className="text-cyan-400"></span> Phone:{" "}
              <span className="font-medium">+63 931 216 5223</span>
            </p>
            <p>
              <span className="text-cyan-400"></span> Location:{" "}
              <span className="font-medium">Philippines</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="flex-1 bg-[#0f0f0f] border border-cyan-400/30 rounded-2xl p-10 shadow-lg">
          <form className="flex flex-col space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border border-cyan-400/30 rounded-lg px-5 py-3 text-gray-200 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-cyan-400/30 rounded-lg px-5 py-3 text-gray-200 focus:outline-none focus:border-cyan-400"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="bg-transparent border border-cyan-400/30 rounded-lg px-5 py-3 text-gray-200 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
