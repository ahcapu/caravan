const fs = require("fs");
import { Request, Response } from "express";
import { AppDataSource } from "../server";
import { City } from "./City.entity";
import { Country } from "./Country.entity";
import { Currency } from "./Currency.entity";
import { Distance } from "./Distance.entity";
import { ItemType } from "./ItemType.entity";
import { Size } from "./Size.entity";
import { TimeZone } from "./TimeZone.entity";
import { Volume } from "./Volume.entity";
import { Weight } from "./Weight.entity";
import { ContainerSize } from "./ContainerSize.entity";
import { Status } from "./Status.entity";
import { ChartOfAccount } from "./ChartOfAccount.entity";
import { VehicleType } from "./VehicleType.entity";
import { AccountTypeCoa } from "./AccountTypeCoa.entity";

const JsonWeight = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/Weight.json`)
);

const JsonSize = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/Size.json`)
);

const JsonVolume = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/Volume.json`)
);

const JsonItemType = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/ItemType.json`)
);

const JsonDistance = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/Distance.json`)
);

const JsonCountry = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/Country.json`)
);

const JsonCity1 = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/City1.json`)
);

const JsonCity2 = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/City2.json`)
);

const JsonCity3 = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/City3.json`)
);

const JsonCity4 = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/City4.json`)
);

const JsonCurrency = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/Currency.json`)
);

const JsonTimeZone = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/TimeZone.json`)
);

const JsonContainerSize = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/ContainerSize.json`)
);

const JsonStatus = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/Status.json`)
);

const JsonChartOfAccount = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/ChartOfAccount.json`)
);

const JsonVehicleType = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/VehicleType.json`)
);

const JsonAccountTypeCoa = JSON.parse(
  fs.readFileSync(`${__dirname}/../../src/parent/json/AccountTypeCoa.json`)
);

export class ParentController {
  private static weightRepo = AppDataSource.getRepository(Weight);
  private static statusRepo = AppDataSource.getRepository(Status);
  private static sizeRepo = AppDataSource.getRepository(Size);
  private static containerSizeRepo = AppDataSource.getRepository(ContainerSize);
  private static volumeRepo = AppDataSource.getRepository(Volume);
  private static item_typeRepo = AppDataSource.getRepository(ItemType);
  private static distanceRepo = AppDataSource.getRepository(Distance);
  private static countryRepo = AppDataSource.getRepository(Country);
  private static cityRepo = AppDataSource.getRepository(City);
  private static currencyRepo = AppDataSource.getRepository(Currency);
  private static time_zoneRepo = AppDataSource.getRepository(TimeZone);
  private static chart_accountRepo =
    AppDataSource.getRepository(ChartOfAccount);
  private static vehcile_typeRepo = AppDataSource.getRepository(VehicleType);
  private static accountTypeCoaRepo =
    AppDataSource.getRepository(AccountTypeCoa);

  static addWeight = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.weightRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const weight = new Weight();
      for (const jsonWeight of JsonWeight) {
        weight.value = jsonWeight.value;
        weight.label = jsonWeight.label;
        weight.user = user;
        await this.weightRepo.save(weight);
      }
      return res.status(201).json({ status: 201, message: "weight added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addSize = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.sizeRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const size = new Size();
      for (const jsonSize of JsonSize) {
        size.value = jsonSize.value;
        size.label = jsonSize.label;
        size.user = user;
        await this.sizeRepo.save(size);
      }
      return res.status(201).json({ status: 201, message: "size added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addItemType = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.item_typeRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const item = new ItemType();
      for (const jsonItemType of JsonItemType) {
        item.value = jsonItemType.value;
        item.label = jsonItemType.label;
        item.user = user;
        await this.item_typeRepo.save(item);
      }
      return res.status(201).json({ status: 201, message: "item added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addVolume = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.volumeRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const volume = new Volume();
      for (const jsonVolume of JsonVolume) {
        volume.value = jsonVolume.value;
        volume.label = jsonVolume.label;
        volume.user = user;
        await this.volumeRepo.save(volume);
      }
      return res.status(201).json({ status: 201, message: "volume added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addDistance = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.distanceRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const distance = new Distance();
      for (const jsonDistance of JsonDistance) {
        distance.value = jsonDistance.value;
        distance.label = jsonDistance.label;
        distance.user = user;
        await this.distanceRepo.save(distance);
      }
      return res.status(201).json({ status: 201, message: "distance added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addTimeZone = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.time_zoneRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const zone = new TimeZone();
      for (const jsonTimeZone of JsonTimeZone) {
        zone.value = jsonTimeZone.value;
        zone.label = jsonTimeZone.label;
        zone.user = user;
        await this.time_zoneRepo.save(zone);
      }
      return res.status(201).json({ status: 201, message: "zone added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addCountry = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.countryRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const country = new Country();
      for (const jsonCountry of JsonCountry) {
        country.value = jsonCountry.value;
        country.label = jsonCountry.label;
        country.currency_id = jsonCountry.currency_id;
        country.capital_tz_id = jsonCountry.capital_tz_id;
        country.iso2 = jsonCountry.iso2;
        country.iso3 = jsonCountry.iso3;
        country.user = user;
        await this.countryRepo.save(country);
      }
      return res.status(201).json({ status: 201, message: "country added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addCity = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.cityRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const city = new City();
      for (const jsonCity of JsonCity1) {
        city.value = jsonCity.value;
        city.label = jsonCity.label;
        city.city_tz_id = jsonCity.city_tz_id;
        city.country_id = jsonCity.country_id;
        city.user = user;
        await this.cityRepo.save(city);
      }

      for (const jsonCity of JsonCity2) {
        city.value = jsonCity.value;
        city.label = jsonCity.label;
        city.city_tz_id = jsonCity.city_tz_id;
        city.country_id = jsonCity.country_id;
        city.user = user;
        await this.cityRepo.save(city);
      }

      for (const jsonCity of JsonCity3) {
        city.value = jsonCity.value;
        city.label = jsonCity.label;
        city.city_tz_id = jsonCity.city_tz_id;
        city.country_id = jsonCity.country_id;
        city.user = user;
        await this.cityRepo.save(city);
      }

      for (const jsonCity of JsonCity4) {
        city.value = jsonCity.value;
        city.label = jsonCity.label;
        city.city_tz_id = jsonCity.city_tz_id;
        city.country_id = jsonCity.country_id;
        city.user = user;
        await this.cityRepo.save(city);
      }
      return res.status(201).json({ status: 201, message: "city added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addContainerSize = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.containerSizeRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const containerSize = new ContainerSize();
      for (const jsonContainerSize of JsonContainerSize) {
        containerSize.value = jsonContainerSize.value;
        containerSize.label = jsonContainerSize.label;
        containerSize.user = user;
        await this.containerSizeRepo.save(containerSize);
      }
      return res
        .status(201)
        .json({ status: 201, message: "Container Size added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addCurrency = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.currencyRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const currency = new Currency();
      for (const jsonCurrency of JsonCurrency) {
        currency.value = jsonCurrency.value;
        currency.label = jsonCurrency.label;
        currency.currency_code = jsonCurrency.currency_code;
        currency.currency_symbol = jsonCurrency.currency_symbol;
        currency.user = user;
        await this.currencyRepo.save(currency);
      }
      return res.status(201).json({ status: 201, message: "Currency added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addStatus = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.statusRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const status = new Status();
      for (const jsonStatus of JsonStatus) {
        status.value = jsonStatus.value;
        status.label = jsonStatus.label;
        status.user = user;
        await this.statusRepo.save(status);
      }
      return res.status(201).json({ status: 201, message: "status added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addChartOfAccount = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.chart_accountRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const chart = new ChartOfAccount();
      for (const jsonChartOfAccount of JsonChartOfAccount) {
        chart.acc_code = jsonChartOfAccount.acc_code;
        chart.acc_type = jsonChartOfAccount.acc_type;
        chart.acc_nature = jsonChartOfAccount.acc_nature;
        chart.user = user;
        await this.chart_accountRepo.save(chart);
      }
      return res
        .status(201)
        .json({ status: 201, message: "chart of accounts added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addVehicleType = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.vehcile_typeRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const vehicle_type = new VehicleType();
      for (const jsonVehicleType of JsonVehicleType) {
        vehicle_type.value = jsonVehicleType.value;
        vehicle_type.label = jsonVehicleType.label;
        vehicle_type.user = user;
        await this.vehcile_typeRepo.save(vehicle_type);
      }
      return res
        .status(201)
        .json({ status: 201, message: "vehcile type added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static addAccountTypeCoa = async (req: Request, res: Response) => {
    try {
      let user = req.user?.id;
      const check = await this.accountTypeCoaRepo.find();
      if (check.length) {
        return res.status(400).json({ error: "already exists" });
      }

      const vehicle_type = new AccountTypeCoa();
      for (const jsonAccountTypeCoa of JsonAccountTypeCoa) {
        vehicle_type.ref_code = jsonAccountTypeCoa.ref_code;
        vehicle_type.acc_type = jsonAccountTypeCoa.acc_type;
        vehicle_type.acc_name = jsonAccountTypeCoa.acc_name;
        vehicle_type.user = user;
        await this.accountTypeCoaRepo.save(vehicle_type);
      }
      return res
        .status(201)
        .json({ status: 201, message: "account type coa added" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
