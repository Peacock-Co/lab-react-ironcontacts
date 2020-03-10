import contacts from "../contacts.json";

export const RamdomActor = () => {
  const actor = contacts[Math.floor(Math.random() * contacts.length)];
  contacts.concat(actor);

  console.log(actor);
};
