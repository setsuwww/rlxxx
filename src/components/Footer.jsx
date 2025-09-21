export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0 text-sm font-semibold">
          © {new Date().getFullYear()} Rlxxx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
