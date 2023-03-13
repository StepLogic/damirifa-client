import { BiPlay } from "@components/icons";
import OptionsButton from "@components/OptionsButton";
import { Button } from "@components/ui/dashboard";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BsPauseCircleFill } from "react-icons/bs";
import { Controls } from "./index";
import s from "./visualizer.module.css";

const filterData = (audioBuffer: AudioBuffer) => {
  const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
  const samples = 70; // Number of samples we want to have in our final data set
  const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
  const filteredData = [];
  for (let i = 0; i < samples; i++) {
    let blockStart = blockSize * i; // the location of the first sample in the block
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
    }
    filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
  }
  const multiplier = Math.pow(Math.max(...filteredData), -1);
  return filteredData.map((n) => n * multiplier);
};
const AudioVisualizer = (props: Controls) => {
  const {
    timeStampFormatted,
    timeStampPercent,
    isPlaying,
    pause,
    play,
    audioRef,
    src,
  } = props;
  const [bars, setBars] = useState<any>();
  const [waveform, setWaveForm] = useState<any>();

  const filterDataCallback = useCallback(() => {
    const audioContext = new AudioContext();
    fetch(src)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => setWaveForm(filterData(audioBuffer)));
  }, [src]);
  const _bars = useMemo(
    () =>
      waveform && waveform.length > 64
        ? waveform.filter(
            (_: number, i: number, r: number[]) =>
              Math.abs(_ - r[i - 1]) > 0.0001
          )
        : waveform,
    [waveform]
  );

  useEffect(() => {
    filterDataCallback();
  }, [audioRef, filterDataCallback, src]);

  useEffect(() => {
    if (waveform) {
      setBars(
        _bars.map((blockNumber: number, index: number, _arr: any) => {
          return (
            <div
              data-current={`${index / _arr.length < timeStampPercent / 100}`}
              className={s.bar}
              style={{
                height: `${blockNumber * 100}%`,
              }}
              key={index}
            />
          );
        })
      );
    }
  }, [_bars, timeStampPercent, waveform]);
  return (
    <div className={s.visualizer}>
      <div className={s.header}>
        <p>Audio Announcement</p>
        <OptionsButton />
      </div>
      <div className={s.body}>
        <div className={s.visuals}>{bars}</div>
        <div className={s.controls}>
          <p className={s.timestamp}>{timeStampFormatted}</p>
          <Button
            className="!p-0 text-3xl"
            variant="icon"
            onClick={() => (isPlaying ? pause() : play())}
          >
            {isPlaying ? <BsPauseCircleFill color="#BA181B" /> : <BiPlay />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudioVisualizer;
