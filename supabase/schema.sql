-- ============================================================
--  Cr7watch — Supabase şeması
--  Supabase > SQL Editor'a yapıştırıp "Run" deyin.
-- ============================================================

-- ---------- TABLOLAR ----------

create table if not exists brands (
  slug        text primary key,
  name        text not null,
  blurb       text,
  hero_image  text,
  sort_order  int default 999
);

create table if not exists products (
  id           uuid primary key default gen_random_uuid(),
  brand_slug   text not null references brands(slug) on delete cascade,
  name         text not null,
  slug         text unique not null,
  reference    text,
  series       text,
  gender       text not null default 'unisex',  -- erkek | bayan | unisex
  price        int,                              -- TL; null = "Fiyat için sorun"
  description  text,
  is_featured  boolean default false,
  is_active    boolean default true,
  sold         boolean default false,
  sort_order   int default 0,
  created_at   timestamptz default now()
);
create index if not exists products_brand_idx on products (brand_slug);

create table if not exists product_images (
  id          uuid primary key default gen_random_uuid(),
  product_id  uuid not null references products(id) on delete cascade,
  url         text not null,
  label       text,
  sort_order  int default 0
);
create index if not exists product_images_product_idx on product_images (product_id);

create table if not exists site_settings (
  id            int primary key default 1,
  whatsapp      text,
  instagram     text,
  hero_title    text,
  hero_subtitle text,
  contact_info  text,
  constraint single_row check (id = 1)
);
insert into site_settings (id) values (1) on conflict do nothing;

-- ---------- RLS (satır güvenliği) ----------

alter table brands          enable row level security;
alter table products        enable row level security;
alter table product_images  enable row level security;
alter table site_settings   enable row level security;

-- Herkes okuyabilir (genel site)
drop policy if exists "read brands" on brands;
create policy "read brands" on brands for select using (true);
drop policy if exists "read products" on products;
create policy "read products" on products for select using (true);
drop policy if exists "read images" on product_images;
create policy "read images" on product_images for select using (true);
drop policy if exists "read settings" on site_settings;
create policy "read settings" on site_settings for select using (true);

-- Sadece giriş yapmış (admin) yazabilir
drop policy if exists "write brands" on brands;
create policy "write brands" on brands for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
drop policy if exists "write products" on products;
create policy "write products" on products for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
drop policy if exists "write images" on product_images;
create policy "write images" on product_images for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
drop policy if exists "write settings" on site_settings;
create policy "write settings" on site_settings for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- ---------- STORAGE (foto yükleme) ----------

insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

drop policy if exists "read bucket" on storage.objects;
create policy "read bucket" on storage.objects for select
  using (bucket_id = 'product-images');
drop policy if exists "upload bucket" on storage.objects;
create policy "upload bucket" on storage.objects for insert to authenticated
  with check (bucket_id = 'product-images');
drop policy if exists "update bucket" on storage.objects;
create policy "update bucket" on storage.objects for update to authenticated
  using (bucket_id = 'product-images');
drop policy if exists "delete bucket" on storage.objects;
create policy "delete bucket" on storage.objects for delete to authenticated
  using (bucket_id = 'product-images');
