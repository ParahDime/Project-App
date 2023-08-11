import React from "react";
import { Image } from "react-native";

import data from '../components/botConfig/bot.json'

const Pulse = require("react-native-pulse").default;

export default function Pulsing() {

     return (
    <Pulse
      color={data.FontColour}
      numPulses={data.NumPulseumPulses}
      diameter={data.Diam}
      speed={data.Speed}
      duration={data.Duration}
      opacity={data.Opacity}
    />
  );
}
