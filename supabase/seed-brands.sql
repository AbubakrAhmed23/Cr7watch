-- ============================================================
--  Cr7watch — Marka seed verisi (dosyalar/ ile birebir, 21 marka)
--  schema.sql çalıştırıldıktan SONRA bunu çalıştırın.
-- ============================================================

insert into brands (slug, name, blurb, sort_order) values
  ('rolex',            'Rolex',             'Efsanevi tasarım, zamansız prestij.',       1),
  ('patek-philippe',   'Patek Philippe',    'Kusursuz zarafetin zirvesi.',               2),
  ('audemars-piguet',  'Audemars Piguet',   'Royal Oak ile ikonik duruş.',               3),
  ('cartier',          'Cartier',           'Mücevher inceliğinde saatler.',             4),
  ('richard-mille',    'Richard Mille',     'Teknik sanat, sıra dışı tasarım.',          5),
  ('tudor',            'Tudor',             'Karakterli ve dayanıklı.',                  6),
  ('tag-heuer',        'Tag Heuer',         'Yarış pistinden ilham.',                    7),
  ('jaeger-lecoultre', 'Jaeger-LeCoultre',  'İnce mekanik ustalığı.',                    8),
  ('longines',         'Longines',          'Klasik İsviçre zarafeti.',                  9),
  ('oris',             'Oris',              'Spor ve şıklığın dengesi.',                10),
  ('rado',             'Rado',              'Modern malzeme, minimal tasarım.',         11),
  ('ulysse-nardin',    'Ulysse Nardin',     'Denizci ruhlu lüks.',                      12),
  ('versace',          'Versace',           'Cesur, gösterişli, ikonik.',               13),
  ('bulgari',          'Bulgari',           'İtalyan tutkusu, mücevher dokunuşu.',      14),
  ('invicta',          'Invicta',           'İddialı ve sportif.',                      15),
  ('citizen',          'Citizen',           'Teknoloji ve güvenilirlik.',               16),
  ('seven-friday',     'Seven Friday',      'Endüstriyel, sıra dışı tasarım.',          17),
  ('frank-muller',     'Frank Müller',      'Tonneau kasa, ustalık işi.',               18),
  ('gc',               'GC',                'Şık ve güncel.',                           19),
  ('washaron',         'Washaron',          'Klasik tarz, uygun seçenek.',              20),
  ('aksesuar',         'Aksesuar & Kutular','Saat ve gözlük kutuları.',                 21)
on conflict (slug) do update
  set name = excluded.name,
      blurb = excluded.blurb,
      sort_order = excluded.sort_order;
