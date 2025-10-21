import React from "react";
import { Loader2 } from "lucide-react";

export default function PrimaryButton({
  text = "Get Started",
  onClick,
  variant = "primary",
  loading = false,
  disabled = false,
  icon: Icon,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold text-base px-6 py-3 rounded-xl transition-all duration-200 ease-in-out focus:outline-none active:scale-[0.97]";

  const variants = {
    primary:
      "bg-[#2563EB] text-white hover:bg-[#1E3A8A] shadow-md hover:shadow-lg",
    outline:
      "border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white",
    secondary:
      "bg-[#F3F4F6] text-gray-800 hover:bg-gray-200 border border-gray-300",
  };

  const disabledStyles =
    "opacity-60 cursor-not-allowed pointer-events-none shadow-none";

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${
        disabled || loading ? disabledStyles : ""
      } ${className}`}
    >
      {loading ? (
        <Loader2 className="animate-spin w-5 h-5" />
      ) : (
        Icon && <Icon className="w-5 h-5" />
      )}
      {loading ? "Please wait..." : text}
    </button>
  );
}
