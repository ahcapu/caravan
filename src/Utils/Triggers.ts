import { AppDataSource } from "../server";
import { ErrorHandling } from "./ErrorHandling";

export class Trigger {
  static process_consignment_delete = async () => {
    try {
      return await AppDataSource.query(`
          CREATE OR REPLACE FUNCTION process_consignment_delete()
          RETURNS TRIGGER
          LANGUAGE plpgsql AS
          $$
          DECLARE
          BEGIN
              DELETE FROM contacts WHERE consignment_id = OLD.id;
              DELETE FROM containers WHERE consignment_id = OLD.id;
              RETURN NULL;
          END;
          $$;`);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };

  static trigger_consignment_delete = async () => {
    try {
      return await AppDataSource.query(`
            CREATE OR REPLACE TRIGGER trigger_consignment_delete
            AFTER DELETE ON
            consignments FOR EACH ROW EXECUTE FUNCTION process_consignment_delete()`);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };

  static process_bilty_delete = async () => {
    try {
      return await AppDataSource.query(`
          CREATE OR REPLACE FUNCTION process_bilty_delete()
          RETURNS TRIGGER
          LANGUAGE plpgsql AS
          $$
          DECLARE
          BEGIN
              DELETE FROM bilty_details WHERE bilty_id = OLD.id;
              RETURN NULL;
          END;
          $$;`);
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };

  static trigger_bilty_delete = async () => {
    try {
      return await AppDataSource.query(`
            CREATE OR REPLACE TRIGGER trigger_bilty_delete
            AFTER DELETE ON
            bilties FOR EACH ROW EXECUTE FUNCTION process_bilty_delete()`); 
    } catch (error) {
      return await ErrorHandling.modeHandling(error);
    }
  };
}
