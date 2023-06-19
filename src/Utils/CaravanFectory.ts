import { validate } from "class-validator";

export class CaravanFactory {
  static validator = async (dto: any) => {
    const errors = await validate(dto);

    if (errors.length) {
      for (let i = 0; i < errors.length; i++) {
        const element = errors[i];

        return element.constraints;
      }
    }
  };
}
