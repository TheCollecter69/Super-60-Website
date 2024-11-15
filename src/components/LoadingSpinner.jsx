import { PulseLoader } from "react-spinners";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <PulseLoader color="#2563eb" size={12} />
    </div>
  );
}

export default LoadingSpinner; 