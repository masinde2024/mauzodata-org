export type PaginationLink = 
    {
        url: string;
        label: string;
        active: boolean;
    }

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
    id?: number;
    branch_id?: number;
    name: string;
    contact?: string;
    address?: string;
    created_at?: string;
    updated_at?: string;
};

export type PaymentMethod = {
    id?: number;
    name: string;
    account_id?: number;
    number: string;
    created_at?: string;
    updated_at?: string;
};

export type Product = {
    id?: number;
    account_id?: number;
    name: string;
    unit: string;
    buying_price: number;
    selling_price: number;
    stock: number;
    quantity_per_stock: number;
    whole_sale: number;
    discount: number;
    stock_alert: number;
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
