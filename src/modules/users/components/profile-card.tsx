import name from "../../shared/images/name.svg";
import email from "../../shared/images/email.svg";
import phone from "../../shared/images/phone.svg";
import place from "../../shared/images/place.svg";
import { useState, useRef } from "react";
import { useGetUserPofile, useUpdateUser } from "../api";

export default function ProfileCard() {
  const [photoProfile, setPhotoProfile] = useState<{
    fileObj: File | null;
    fileUrl: string;
  }>({
    fileObj: null,
    fileUrl: "",
  });

  const updateUserMutation = useUpdateUser();

  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInput.current?.click();
  };

  const handleChangePhotoProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      let changedImage = {
        fileObj: file,
        fileUrl: URL.createObjectURL(file),
      };
      setPhotoProfile(changedImage);
      const formData = new FormData();

      formData.append("image", file);

      updateUserMutation.mutate(formData);
    } else {
      setPhotoProfile({
        fileObj: null,
        fileUrl: "",
      });
    }
  };

  const {
    data: user,
    isLoading: isLoadingGetUserProfile,
    isError: isErrorGetUserProfile,
  } = useGetUserPofile();

  const phoneTransform = (phone: string) => {
    const phoneArr = [];
    while (phone) {
      phoneArr.push(phone.slice(0, 4));
      phone = phone.slice(4);
    }
    return phoneArr.join("-");
  };

  return (
    <div className="relative z-10 bg-white rounded p-5 w-90% md:w-3/4 lg:w-2/3 xl:w-1/2">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 lg:w-2/3">
          <h1 className="text-2xl font-bold">Personal Info</h1>
          <div className="flex mt-5 sm:mt-8">
            <img src={name} className="mr-3" />
            <div className="tracking-wide">
              {!isLoadingGetUserProfile && !isErrorGetUserProfile && (
                <h3 className="font-semibold text-sm">{user.name}</h3>
              )}
              <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                Full name
              </h3>
            </div>
          </div>
          <div className="flex mt-3 sm:mt-6">
            <img src={email} className="mr-3" />
            <div className="tracking-wide">
              {!isLoadingGetUserProfile && !isErrorGetUserProfile && (
                <h3 className="font-semibold text-sm">{user.email}</h3>
              )}
              <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                Email
              </h3>
            </div>
          </div>
          <div className="flex mt-3 sm:mt-6">
            <img src={phone} className="mr-3" />
            <div className="tracking-wide">
              {!isLoadingGetUserProfile && !isErrorGetUserProfile && (
                <h3 className="font-semibold text-sm">
                  {phoneTransform(user.phone)}
                </h3>
              )}
              <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                Mobile phone
              </h3>
            </div>
          </div>
          <div className="flex mt-3 sm:mt-6">
            <img src={place} className="mr-3" />
            <div className="tracking-wide">
              {!isLoadingGetUserProfile && !isErrorGetUserProfile && (
                <h3 className="font-semibold text-sm">{user.address}</h3>
              )}
              <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                Address
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col mt-3 sm:mt-0">
          {photoProfile.fileUrl || user?.image ? (
            <img
              src={photoProfile.fileUrl || user.image}
              className="rounded h-64 object-cover"
            />
          ) : (
            <div className="w-full rounded flex justify-center items-center text-center h-64 bg-#D3D3D3">
              <span
                style={{
                  color: "grey",
                  letterSpacing: "3px",
                  fontWeight: 400,
                }}
                className="px-1 text-2xl"
              >
                PROFILE PHOTO
              </span>
            </div>
          )}
          <div className="mt-auto">
            <button
              className="w-full py-2 mt-3 text-white text-center rounded font-semibold cursor-pointer focus:outline-none"
              style={{ backgroundColor: "#FFAF00" }}
              onClick={handleClick}
            >
              Change Profile Photo
            </button>
            <input
              type="file"
              accept="image/*"
              hidden
              ref={fileInput}
              onChange={handleChangePhotoProfile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
