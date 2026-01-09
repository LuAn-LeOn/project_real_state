import {
  FaBuilding,
  FaHome,
  FaCity,
  FaDoorOpen,
  FaWarehouse,
} from "react-icons/fa";

import { MdApartment } from "react-icons/md";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  Apartment: MdApartment,
  House: FaHome,
  Condo: FaBuilding,
  Studio: FaDoorOpen,
  Loft: FaWarehouse,
};
