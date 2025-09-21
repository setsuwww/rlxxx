import { useState } from "react";
import LinuxWindow from "../components/linux/LinuxWindow";
import LinuxHeading from "../components/linux/LinuxHeading";
import LinuxPopup from "../components/linux/LinuxPopup";
import { BiSend } from "react-icons/bi";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const message = formData.get("message")?.toLowerCase() || "";

    if (message.includes("dayat")) {
      setStatus('Ga dikirim, ada kata-kata "dayat", Tai lu!');
    } else {
      setStatus(
        "Makasi udah sempetin mampir sampe kirim pesan, sekiranya ada saran atau pesan demi kemajuan gw boleh disampaikan"
      );
    }

    setPopupOpen(true);
    e.target.reset();
  };

  return (
    <div className="element-children pb-4 px-6 md:max-w-4xl">
      <LinuxHeading
        title="Contact"
        description="Need something chat gw, gw bales gw bukan seleb cuman slowresp"
      />

      <LinuxWindow dark={false} title="~/Contact-Me">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-6xl w-full mx-auto p-2 md:p-4"
        >
          {/* Nama & Email sejajar */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block mb-2 text-md font-semibold text-gray-600">
                Nama <span className="text-blue-500">*</span>
              </label>
              <input type="text" name="name" required
                className="w-full px-4 py-2.5 text-sm font-semibold text-gray-600 border border-gray-300 rounded-md md:rounded-xl 
                           focus:ring-2 focus:ring-yellow-100 focus:outline-none 
                           focus:border-yellow-500 transition-all ease-in"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 text-md font-semibold text-gray-600">
                Email <span className="text-blue-500">*</span>
              </label>
              <input type="email" name="email" required
                className="w-full px-4 py-2.5 text-sm font-semibold text-gray-600 border border-gray-300 rounded-md md:rounded-xl 
                           focus:ring-2 focus:ring-yellow-100 focus:outline-none 
                           focus:border-yellow-500 transition-all ease-in"
              />
            </div>
          </div>

          {/* Pesan */}
          <div>
            <label className="block mb-2 text-md font-semibold text-gray-600">
              Pesan <span className="text-blue-500">*</span>
            </label>
            <textarea name="message" rows="4" required
              className="w-full px-4 py-2.5 text-sm font-semibold text-gray-600 border border-gray-300 rounded-md md:rounded-xl
                         focus:ring-2 focus:ring-yellow-100 focus:outline-none 
                         focus:border-yellow-500 transition-all ease-in"
            ></textarea>
          </div>

          <button type="submit"
            className="w-full px-2 py-2 font-bold text-base md:text-lg border border-gray-300 bg-white 
             shadow-sm hover:bg-radial hover:from-gray-100 hover:to-white hover:shadow-none text-gray-600 rounded-xl 
             transition-all ease-in duration-100 flex items-center justify-center gap-2"
          >
            <span>Kirim pesan</span>
            <BiSend />
          </button>
        </form>
      </LinuxWindow>

      <LinuxPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        message={status}
      />
    </div>
  );
}
