export interface Customer {
  id: string;
  name: {
    fa: string;
    en?: string;
  };
  contactDetails: {
    email: string;
    phone: string;
  };
  billingAddress: string;
  shippingAddress: string;
  paymentTerms: string;
  creditLimit: number;
}

export interface OrderItem {
  productId: string;
  productName: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  productionStatus: 'pending' | 'in_progress' | 'completed';
  qualityStatus: 'pending' | 'passed' | 'failed';
  specifications?: Record<string, string>;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: Customer;
  orderDate: string;
  requiredDeliveryDate: string;
  actualDeliveryDate?: string;
  status: 'draft' | 'confirmed' | 'in_production' | 'ready' | 'delivered';
  shippingMethod: string;
  specialInstructions?: string;
  totalAmount: number;
  paymentStatus: 'pending' | 'partial' | 'paid';
  items: OrderItem[];
}