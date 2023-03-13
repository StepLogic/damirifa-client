import { BiStreamLink } from "@components/icons";
import { TipText } from "@components/TipText";
import { RadioButton, Textfield } from "@components/ui/dashboard";
import Dropzone from "@components/ui/dashboard/dropzone";
import {useModalContext} from "@root/src/utils/contexts/ModalContext";
import dynamic from "next/dynamic";
import React from "react";

// import AudioPlayer from "@components/audio-player";
// import Dropzone from "@components/ui/dashboard/dropzone";
// import AudioVisualizer from '../../../../audio-player/AudioVisualizer';

interface Props {}

const AudioVisualizer = dynamic(
  () => import("@components/audio-player/AudioVisualizer"),
  {
    suspense: true,
  }
);
const AudioPlayer = dynamic(() => import("@components/audio-player"), {
  suspense: true,
});

const Media: React.FC<Props> = (props) => {
  const modal = useModalContext();
  return (
    <div className={"flex-col mt-[25px] pb-10"}>
      <p className="fieldLabel mt-[]">Audio</p>
      <div className="grid lg:grid-cols-2 gap-[2.125rem] mt-[1.4063rem] mb-[1.1563rem]  w-full">
        <div className="flex flex-col justify-start">
          <div className="flex flex-row w-full pl-2 gap-2 items-center">
            <RadioButton checked={true} />
            <p
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
            placeholder="Paste audio link here"
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
      </div>
      <p className="fieldLabel mb-[17px] mt-[35px]">Audios</p>

      <AudioPlayer
        renderPlayer={(props) => <AudioVisualizer {...props} />}
        src={"/audio/amazing-grace.mp3"}
      />
      <TipText className="text-[11px] mt-2 mb-[31px] text-[#363636]">
        Record a short message with your phone to upload.
      </TipText>
    </div>
  );
};

export default React.memo(Media);
