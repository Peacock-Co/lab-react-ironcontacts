import React, { useState } from "react";
import contacts from "../contacts.json";

export const RamdomActor = () => {
  const actor = contacts[Math.floor(Math.random() * contacts.length)];

  console.log(actor);
};
