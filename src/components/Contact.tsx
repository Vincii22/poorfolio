export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center px-24 text-gray-300  overflow-hidden">
      {/* <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">// Initiate Connection</h2> */}

      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT SIDE - Contact Info */}
        <div className="flex-1 bg-[#0f0f0f] border border-cyan-400/30 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Let’s Connect</h3>
          <p className="text-gray-300 mb-6">
            Feel free to reach out if you have a project in mind, want to collaborate, or just say hi.
          </p>

          <div className="space-y-3 text-gray-300">
            <p><span className="text-cyan-400">//</span> Email: <span className="font-medium">yourname@email.com</span></p>
            <p><span className="text-cyan-400">//</span> Phone: <span className="font-medium">+63 912 345 6789</span></p>
            <p><span className="text-cyan-400">//</span> Location: <span className="font-medium">Philippines</span></p>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="flex-1 bg-[#0f0f0f] border border-cyan-400/30 rounded-2xl p-8 shadow-lg">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border border-cyan-400/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-cyan-400/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="bg-transparent border border-cyan-400/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
