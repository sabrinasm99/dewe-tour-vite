export type CustomerProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  is_admin: boolean;
  gender: string;
  image: string;
};

export type CountryProps = {
  id: string;
  name: string;
};

export type TripProps = {
  id: string;
  title: string;
  country: CountryProps;
  quota: number;
  booked_slots: number;
  accomodation: string;
  transportation: string;
  eat: string;
  days: number;
  nights: number;
  date: string;
  price: number;
  description: string;
  cover_image: string;
  detailed_images: string[];
};

export type TransactionProps = {
  id: number;
  customer: CustomerProps;
  quantity: number;
  total_payment: number;
  status: string;
  attachment: string;
  trip: TripProps;
  booking_date: string;
};
