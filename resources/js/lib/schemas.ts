import { User } from "@/types";

export type PaginationLink = {
    url: string;
    label: string;
    active: boolean;
};

export interface Branch {
    id?: number;
    account_id?: number;
    name: string;
    phone: string;
    city: string;
    state?: string;
    postal_code?: string;
    email?: string;
    status?: string;
    created_at?: string;
    updated_at?: string;
}

export interface account {
    id?: number;
    name: string;
    plan: "free" | "basic" | "premium";
    created_at?: string;
    updated_at?: string;
}

export type Customer = {
    id: number;
    branch_id: number;
    name: string;
    contact: string;
    address: string;
    created_at: string;
    updated_at: string;
};

export type paginatedCustomer = {
    data: Customer[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
};

export type PaymentMethod = {
    id: number;
    name: string;
    branch_id: number;
    number: string;
    created_at: string;
    updated_at: string;
};

export type Product = {
    id?: number;
    account_id?: number;
    name: string;
    unit: string;
    buying_price: number;
    selling_price: number;
    price: number;
    stock: number;
    quantity_per_stock: number;
    price_per_each: number;
    whole_sale: number;
    discount: number;
    stock_alert: number;
    damages: 0;
    expire_date?: string;
    created_at?: string;
    updated_at?: string;
};

export type PaginatedProduct = {
    data: Product[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
};

export type Order = {
    id?: number;
    user: User;
    branch_id: number;
    customer: Customer;
    payment_method: PaymentMethod;
    order_number: string;
    paid: number;
    orderItems: OrderItems[];
    created_at: string;
    updated_at: string;
};

export type OrderItems = {
    id: number;
    order: Order;
    product: Product;
    price: number;
    discount: number;
    transport: number;
    created_at: number;
    updated_at: number;
};

export type PaginatedOrder = {
    data: Order[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
};


export type Cart = {
    id: number;
    user: User;
    items: CartItem[];
    created_at: string;
    updated_at: string;
};


export type CartItem = {
    id: number;
    cart: Cart;
    product: Product;
    quantity: number;
    price: number;
    discount: number;
    transport: number;
    created_at: string;
    updated_at: string;
};


export type PaginatedCart = {
    data: Cart[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
};