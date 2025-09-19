import { useState } from "react";
import LinuxWindow from "../components/linux/LinuxWindow";
import LinuxHeading from "../components/linux/LinuxHeading";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Pesannya udah dikirim, tinggal gw baca");
    e.target.reset();
  };

  return (
    <div className="element-children">
      <LinuxHeading title="Contact" description="Need something chat gw, gw bales gw bukan seleb cuman slowresp" />

      <LinuxWindow dark={false} title="~/Contact-Me">
        <form onSubmit={handleSubmit}
          className="space-y-6 max-w-6xl w-full mx-auto"
        >
          {/* Nama & Email sejajar */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block mb-2 text-md font-medium text-gray-700">
                Nama <span className="text-blue-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-100 focus:outline-none focus:border-yellow-500 transition-all ease-in"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 text-md font-medium text-gray-700">
                Email <span className="text-blue-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-100 focus:outline-none focus:border-yellow-500 transition-all ease-in"
              />
            </div>
          </div>

          {/* Pesan */}
          <div>
            <label className="block mb-2 text-md font-medium text-gray-700">
              Pesan <span className="text-blue-500">*</span>
            </label>
            <textarea
              name="message"
              rows="6"
              required
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-100 focus:outline-none focus:border-yellow-500 transition-all ease-in focus:inset-shadow-sm focus:inset-shadow-yellow-100"
            ></textarea>
          </div>

          {/* Tombol */}
          <button
            type="submit"
            className="w-full px-2 py-3 text-lg bg-gradient-to-b from-gray-900 to-gray-700 text-white rounded-lg hover:bg-blue-700 font-semibold ring-gray-700 inset-shadow-xs inset-shadow-white"
          >
            Kirim
          </button>
        </form>

        {status && (
          <p className="mt-6 py-1 bg-green-100 text-green-600 font-medium text-center text-lg">
            {status}
          </p>
        )}
      </LinuxWindow>
    </div>
  );
}
