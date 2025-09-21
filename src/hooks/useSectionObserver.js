import { useState } from "react";
import LinuxWindow from "../components/linux/LinuxWindow";
import LinuxHeading from "../components/linux/LinuxHeading";
import LinuxPopup from "../components/linux/LinuxPopup";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Pesannya udah dikirim, tinggal gw baca 😎");
    setPopupOpen(true);
    e.target.reset();
  };

  return (
    <div className="element-children px-6 md:max-w-4xl">
      <LinuxHeading
        title="Contact"
        description="Need something chat gw, gw bales gw bukan seleb cuman slowresp"
      />

      <LinuxWindow dark={false} title="~/Contact-Me">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-6xl w-full mx-auto"
        >
          {/* Nama & Email sejajar */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block mb-2 text-md font-semibold text-gray-700">
                Nama <span className="text-blue-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-1.5 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-100 focus:outline-none focus:border-yellow-500 transition-all ease-in"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 text-md font-semibold text-gray-700">
                Email <span className="text-blue-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-1.5 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-100 focus:outline-none focus:border-yellow-500 transition-all ease-in"
              />
            </div>
          </div>

          {/* Pesan */}
          <div>
            <label className="block mb-2 text-md font-semibold text-gray-700">
              Pesan <span className="text-blue-500">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-1.5 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-100 focus:outline-none focus:border-yellow-500 transition-all ease-in"
            ></textarea>
          </div>

          {/* Tombol */}
          <button
            type="submit"
            className="w-full px-2 py-2 font-bold text-lg border border-gray-300 bg-white shadow-sm hover:bg-gray-50 hover:shadow-none text-gray-700 rounded-xl transition-all ease-in duration-100"
          >
            Kirim
          </button>
        </form>
      </LinuxWindow>

      {/* Popup Linux-style */}
      <LinuxPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        message={status}
      />
    </div>
  );
}
