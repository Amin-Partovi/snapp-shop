# Online Shop

## How to run project

### Package Manager

In the project directory, you can use npm as the package manager. First, run:

    npm i

This command installs all the project's dependencies. To start the local development server, use the following command:

    npm run dev

The project will be accessible at [http://localhost:3000](http://localhost:3000/).
To build the project for production use the following command:

    npm run build

To serve the production build, you can use the following command:

    npm run start

Again, the project will be accessible at [http://localhost:3000](http://localhost:3000/).

## Folder structure

the structure of the project is inspired by Atomic Design.
```
.
├── app
├── components/
│ ├── elements/
│ │ ├── Button.tsx
│ │ ├── ...
│ │ └── index.ts
│ ├── fragments/
│ │ ├── Modal.tsx
│ │ ├── ...
│ │ └── index.ts
│ ├── layouts/
│ │ ├── Header.tsx
│ │ ├── ...
│ │ └── index.ts
│ └── pages/
│ ├── products/
│ │ ├── ProductList.tsx
│ │ └── ...
│ ├── ...
│ └── index.ts
├── hooks/
│ ├── useCartInfo.ts
│ ├── ...
│ └── index.ts
├── lib
├── messages
├── public
├── store/
│ ├── shoppingCartStore.ts
│ ├── ...
│ └── index.ts
└── utils/
├── endpoints.ts
├── ...
└── index.ts
```

components folder divided to four modules as following:

1.  Elements: This folder contains shared components, also known as common components, that cannot be further divided into smaller independent components.
2.  Fragments: Fragments are reusable components that are built using elements. They combine multiple elements to form more complex and self-contained components.
3.  Layouts: The layouts folder encompasses components related to the overall layout and container structure of the application. These components define the high-level structure and positioning of other components.
4.  Pages: The pages folder contains components specific to individual pages. These components are unique to a particular.

Within this structure, each module has its own index file that serves as a central point of export for all the components within that module.

## Products API

### Get All Products

```http
GET /api/products
```

Returns all products from static data source.

### Get Product by ID

```http
GET /api/products/[id]
```

Returns a single product by ID.

**404 Response:**

```json
{
  "message": "Product not found"
}
```

### Data Source

- **Location:** `@/lib/products/data`
- **Type:** Static local data (pre-defined product array)

### Features

- Static data implementation
- 404 error handling for missing products
- JSON responses
- TypeScript support

## Pages Overview

### 🏠 Product List Page - PLP (`/`)

**Data Fetching Strategy:** **Static Generation with Incremental Static Regeneration (ISR)**

- **Strategy:** `fetch` with `revalidate: 10`
- **Reason:** Product list changes infrequently but needs occasional updates. ISR provides best performance while keeping data fresh.

**SEO Features:**

- Dynamic metadata generation
- OpenGraph tags for social sharing
- Robots.txt directives for indexing
- Persian locale optimization (`fa_IR`)

**Error Handling:**

- 404 handling for missing data
- Graceful error messages
- Fallback to static data

---

### 📦 Product Details Page - PDP (`/products/[id]`)

**Data Fetching Strategy:** **Static Generation with ISR**

- **Strategy:** `fetch` with `revalidate: 3600` (1 hour)
- **Reason:** Product details are stable but need periodic updates. Long cache duration for better performance.

**SEO Features:**

- Dynamic title and description
- OpenGraph images and metadata
- Twitter Card support
- Canonical URLs
- Structured product data

**Error Handling:**

- 404 for non-existent products
- Metadata fallback on errors

---

### Key Features

### 🚀 Performance

- **ISR:** Best of both worlds (static speed + dynamic updates)
- **Development Optimization:** Falls back to local data
- **Efficient Caching:** Strategic revalidation times

### 🔍 SEO Optimization

- Dynamic meta tags per page
- Social media rich snippets
- Multi-language support (Persian)
- Canonical URL management
- Robot indexing control

### ⚡ Error Resilience

- Graceful 404 handling
- Metadata fallbacks
- Development/production environment awareness

## Revalidation Strategy Explanation

### Current Revalidation Times

- **Product List Page:** `10 seconds`
- **Product Details Page:** `3600 seconds` (1 hour)

### Why Different Revalidation Times?

### 🛒 Product List Page (10 seconds)

- Product availability changes frequently
- New products may be added
- Prices can be updated
- Promotions and stock levels change often

### 📋 Product Details Page (1 hour)

- Product descriptions rarely change
- Images and specifications are stable
- Technical details remain constant

### Business Logic Behind the Strategy

| Page Type           | Change Frequency | Cache Duration | Reason                                   |
| ------------------- | ---------------- | -------------- | ---------------------------------------- |
| **Product List**    | High             | Short (10s)    | Real-time inventory, pricing, promotions |
| **Product Details** | Low              | Long (1h)      | Stable product info, better performance  |

### Shopping Cart Implementation

The shopping cart functionality is implemented using **Zustand** for client-side state management with **localStorage persistence**, ensuring cart data persists across browser sessions.

### Architecture Overview

**State Management:** Zustand store manages cart operations with automatic localStorage synchronization:

- Cart data persists between page refreshes and browser sessions
- Adding products to cart
- Incrementing/decrementing item quantities
- Removing individual items
- Clearing entire cart
- Calculating total price and item count

# Project Limitations

Due to time constraints during development, this project currently does not include unit or integration tests, which means components and API routes lack automated verification. Additionally, the application is not Dockerized, so containerization and streamlined deployment configurations are not yet implemented.
