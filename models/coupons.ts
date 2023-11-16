export interface Coupon {
  id: number;
  value: number;
  itemName: string;
  vendorId: number;
  expirationDate: string;
}

export default Coupon;