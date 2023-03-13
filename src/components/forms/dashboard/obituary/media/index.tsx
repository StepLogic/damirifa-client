import AddButton from "@components/AddButton";
// import AudioPlayer from "@components/audio-player";
import { BiStreamLink } from "@components/icons";
import OptionsButton from "@components/OptionsButton";
import { TipText } from "@components/TipText";
import { Image } from "@components/ui/common";
import { RadioButton, Textfield } from "@components/ui/dashboard";
import Dropzone from "@components/ui/dashboard/dropzone";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";
import cn from "classnames";
import dynamic from "next/dynamic";
import React from "react";
import s from "./index.module.css";

// import AudioVisualizer from '../../../../audio-player/AudioVisualizer';

interface Props {}

const AddAlbum = dynamic(() => import("./AddAlbum"), {
  suspense: true,
});
const AudioVisualizer = dynamic(
  () => import("@components/audio-player/AudioVisualizer"),
  {
    suspense: true,
  }
);
const AudioPlayer = dynamic(() => import("@components/audio-player"), {
  suspense: true,
});

function AlbumCard() {
  return (
    <div className={s.album}>
      <div className={s.thumbnails}>
        <Image src={"/constants/ImageOne.png"} />
        <Image src={"/constants/ImageTwo.png"} />
        <Image src={"/constants/ImageThree.png"} />
        <Image src={"/constants/ImageOne.png"} />
        <div className={s.overlay}>+8</div>
      </div>
      <div className={cn("flex flex-col", s.text)}>
        <h4>The First Album’s Goes Here</h4>
        <p>12 photos in album</p>
      </div>
      <div className="absolute right-[15px] top-[15px]">
        <OptionsButton />
      </div>
    </div>
  );
}

const Media: React.FC<Props> = (props) => {
  const modal = useModalContext();
  return (
    <div className={"flex-col mt-[25px] pb-10"}>
      {/* <Dropzone variant="icon" /> */}
      <div className="flex flex-row justify-between items-center mb-[18px]">
        <p className="fieldLabel">Photos</p>
        <AddButton
          label="Add album"
          className="ml-auto"
          onClick={() => modal.openModal(<AddAlbum />, "New Album")}
        />
      </div>
      <div className="flex flex-row  flex-wrap gap-2 mb-[42px]">
        <AlbumCard />
        {/* <AlbumCard /> */}
      </div>
      <p className="fieldLabel ">Video</p>
      <div className="grid lg:grid-cols-2 gap-[2.125rem] mt-[1.4063rem] mb-[1.1563rem]  w-full">
        <div className="flex flex-col justify-start">
          <div className="flex flex-row w-full pl-2 gap-2 items-center">
            <RadioButton checked={true} />
        ````    <p
              className={
                "text-base font-normal leading-5 text-[#626262] capitalize"
              }
            >
              External Link
            </p>
          </div>

          <Textfield
            icon={<BiStreamLink className={""} />}
            color="secondary"
            className="mt-[1.125rem] !h-[3.5rem] mb-[4px] pl-[1rem]"
            placeholder="Paste video link here"
          />
          {/* <p className="text-[11px] font-[700]   mb-4 text-[#363636] opacity-50">
            <b>NOTE:</b>No duration limits apply
          </p> */}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row w-full pl-2 gap-2 items-center mb-[18px]">
            <RadioButton />
            <p
              className={
                "text-base font-normal leading-5 text-[#626262] capitalize"
              }
            >
              upload
            </p>
          </div>
          <Dropzone className="!h-[88px]  mb-[6.84px] ">
            <p className="text-[13px]  font-[400]  w text-center  mt-auto mb-4 !text-[#363636] w-[192px]">
              Drop deceased or event video here. Maximum size xxmb&nbsp;
              <b className="text-[#E03A3D]">(approx. one hour)</b>
            </p>
          </Dropzone>
          {/* <p className="text-[11px] font-[700] mb-4 text-[#363636] opacity-50">
            <b>NOTE:</b> Uploads limited to xxmb (approx 45 minutes)
          </p> */}
        </div>
      </div>
      <p className="fieldLabel mb-[17px] mt-[35px]">Audios</p>
      {/* <TipText className="text-[11px] mb-[17px]">
        <a className="text-[#0094FF] !underline">Upgrade</a> to an authentic
        Traditional African announcement.
      </TipText> */}
      <AudioPlayer
        renderPlayer={(props) => <AudioVisualizer {...props} />}
        src={"/audio/amazing-grace.mp3"}
      />
      <TipText className="text-[11px] mt-2 mb-[31px] text-[#363636]">
        Record a short message with your phone to upload.
        {/* Record and upload a short message on your phone or get a professional
        announcer to do it for you. Upload limited to xxxmb (approx 2
        minutes)&nbsp;
        <a className="text-[#0094FF] !underline">Sample</a> */}
      </TipText>
      <div className="flex flex-col">
        <Dropzone className="!h-[106px] mt-[1.125rem] !border-[#E0999B]">
          <div className="text-left  self-start  pl-[12px] my-auto !text-[#363636] ">
            <p className="!text-[base] font-bold">Audio Tribute</p>
            <p className="text-[11px]">
              Drop an <b>audio</b>&nbsp;File. Maximum size xxmb&nbsp;
              <b className="text-[#E03A3D]">(approx one hour)</b>
            </p>
          </div>
        </Dropzone>
        <TipText className="text-[11px]  mt-2 text-[#363636]">
          Record a family member or loved ones pay tribute to the deceased.
        </TipText>
      </div>
    </div>
  );
};

export default React.memo(Media);
