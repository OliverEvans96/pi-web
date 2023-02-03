/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "landingTitle".
 */
export interface LandingTitle {
  id: string;
  header: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  name?: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title?: string;
  description?: string;
  slug?: string;
  author?: string | User;
  publishedDate?: string;
  category?: string | Category;
  tags?: string[] | Tag[];
  content?: {
    [k: string]: unknown;
  }[];
  status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  name?: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  name?: string;
  price?: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug: string;
  category?: string | Category;
  status?: 'draft' | 'published';
  blocks: (
    | {
        product: string | Product;
        id?: string;
        blockName?: string;
        blockType: 'ProductCard';
      }
    | {
        text: string;
        id?: string;
        blockName?: string;
        blockType: 'Paragraph';
      }
    | {
        header: string;
        id?: string;
        blockName?: string;
        blockType: 'Header';
      }
    | {
        title: string;
        date: string;
        price: number;
        description: string;
        id?: string;
        blockName?: string;
        blockType: 'EventCard';
      }
  )[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images".
 */
export interface Image {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    thumbnail: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
