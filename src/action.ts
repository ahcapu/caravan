import { Trigger } from "./Utils/Triggers";

export const action = async () => {
  await Trigger.process_consignment_delete();
  await Trigger.trigger_consignment_delete();
  await Trigger.process_bilty_delete();
  await Trigger.trigger_bilty_delete();
};
