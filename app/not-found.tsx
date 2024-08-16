import { Metadata } from "next";
import NotFoundAnimation from "./components/NotFoundAnimation";

const NotFound = () => {
  return (
    <div className="h-[calc(100vh-74px) text-center p-6">
      <h1 className="text-3xl mb-4">Error: 404</h1>
      <h3 className="text-xl">The requested page does not exist</h3>
      <NotFoundAnimation />
    </div>
  );
};

export default NotFound;

export const metadata: Metadata = {
  title: "404 Page Not Found - Gregor Cox",
  description: "The requested page doesn't exist",
};
