export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-950 mt-6 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0 text-sm">
          © {new Date().getFullYear()} Riinsss. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
