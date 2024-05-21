import name from "../../shared/images/name.svg";
import email from "../../shared/images/email.svg";
import phone from "../../shared/images/phone.svg";
import place from "../../shared/images/place.svg";
import { useState, useRef } from "react";

export default function ProfileCard() {
  const [profilePhoto, setProfilePhoto] = useState<{
    fileObj: File | null;
    fileUrl: string;
  }>({
    fileObj: null,
    fileUrl: "",
  });

  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInput.current?.click();
  };

  const handleChangeProfilePhoto = (e: any) => {
    let file = e.target.files[0];
    if (file) {
      let changedPhoto = {
        fileObj: file,
        fileUrl: URL.createObjectURL(file),
      };
      setProfilePhoto(changedPhoto);
    } else {
      setProfilePhoto({
        fileObj: null,
        fileUrl: "",
      });
    }
  };

  return (
    <div className="bg-white rounded p-5 w-90% md:w-3/4 lg:w-2/3 xl:w-1/2">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 lg:w-2/3">
          <h1 className="text-2xl font-bold">Personal Info</h1>
          <div className="flex mt-5 sm:mt-8">
            <img src={name} className="mr-3" />
            <div>
              <h3 className="font-semibold text-sm">John Doe</h3>
              <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                Full name
              </h3>
            </div>
          </div>
          <div className="flex mt-3 sm:mt-6">
            <img src={email} className="mr-3" />
            <div>
              <h3 className="font-semibold text-sm">johndoe@mail.com</h3>
              <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                Email
              </h3>
            </div>
          </div>
          <div className="flex mt-3 sm:mt-6">
            <img src={phone} className="mr-3" />
            <div>
              <h3 className="font-semibold text-sm">0812-8623-8911</h3>
              <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                Mobile phone
              </h3>
            </div>
          </div>
          <div className="flex mt-3 sm:mt-6">
            <img src={place} className="mr-3" />
            <div>
              <h3 className="font-semibold text-sm">Loka Karya No. 3</h3>
              <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                Address
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col mt-3 sm:mt-0">
          {profilePhoto.fileUrl ? (
            <img
              src={profilePhoto.fileUrl}
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
              onChange={handleChangeProfilePhoto}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
