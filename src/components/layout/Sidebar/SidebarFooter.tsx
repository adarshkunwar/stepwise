import React from "react";
import { useNavigate } from "react-router-dom";
import AbsoluteModal from "../model/AbsoluteModal";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../stores/store";
import { closeModel, openModel } from "../../../configuration/ModelSlice";

const SidebarFooter = () => {
  const { isLeftBarOpen } = useSelector((state: RootState) => state.slidebar);
  const { isOpen } = useSelector((state: RootState) => state.model);
  const navigate = useNavigate();
  const footerRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const profile = {
    name: "John Doe", // Replace with actual profile data
    image: null, // Replace with actual profile image URL or null if not available
  };

  const handleLoginModal = () => {
    dispatch(
      openModel(
        <AbsoluteModal open={isOpen} onClose={() => dispatch(closeModel())}>
          <div className="p-6">
            <p className="text-gray-700">
              Please log in to access your profile.
            </p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => navigate("/login")}
            >
              Go to Login
            </button>
          </div>
        </AbsoluteModal>
      )
    );
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
              {profile?.name ? profile.name.charAt(0).toUpperCase() : "User"}
            </div>
          )}
        </div>
        {!isLeftBarOpen && <span className="font-medium">{profile?.name}</span>}
      </div>
    </div>
  );
};

export default SidebarFooter;
