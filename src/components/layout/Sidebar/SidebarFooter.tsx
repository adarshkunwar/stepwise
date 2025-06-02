import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AbsoluteModal from "../model/AbsoluteModal";
import { useSelector } from "react-redux";
import type { RootState } from "../../../stores/store";
import useGetUserDetails from "../../../hooks/get/getUserDetails";

const SidebarFooter = () => {
  const { isLeftBarOpen } = useSelector((state: RootState) => state.slidebar);
  const navigate = useNavigate();
  const footerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const profile = useGetUserDetails();

  const handleLoginModal = () => {
    <AbsoluteModal
      open={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
      }}
    >
      <div className="p-6">
        <p className="text-gray-700">Please log in to access your profile.</p>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    </AbsoluteModal>;
  };

  return (
    <div className="py-4 px-2 border-t border-gray-700 relative">
      <div
        ref={footerRef}
        onClick={handleLoginModal}
        className={`flex items-center rounded-full cursor-pointer text-gray-300 hover:bg-gray-700 p-2 gap-3`}
        tabIndex={0}
        aria-haspopup="true"
      >
        <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden">
          {profile?.image ? (
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold">
              {profile?.user?.full_name
                ? profile?.user?.full_name.charAt(0).toUpperCase()
                : "User"}
            </div>
          )}
        </div>
        {!isLeftBarOpen && <span className="font-medium">{profile?.name}</span>}
      </div>
    </div>
  );
};

export default SidebarFooter;
