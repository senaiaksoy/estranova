# Sanem Altan — Canonical Sources Whitelist

> **Bu dosya AI agent için bağlayıcıdır.** Korpus dışı atıf yapılacaksa **yalnız bu listedeki yazar+kaynak çiftinden** seçilir. Listede olmayan yazar/kaynaktan atıf YASAK — uydurma riski.
>
> **Mekanizma (Hybrid Whitelist + Editorial Gate):**
> 1. Korpus → ilk tercih (`../../sanem-altan-aphorism-pool.md`, 9 tema havuzu + 5 imza-cümle)
> 2. Korpusta uygun cümle yoksa → bu listedeki yazar+kanonik kaynaktan aday
> 3. Aday `pending.md`'ye düşer → insan editör onayı (haftalık batch)
> 4. Onaylanan aday `extended.md`'ye girer → sonraki makaleler korpus gibi kullanır
>
> **Uydurma alıntı yasağı:** AI bu listedeki bir yazara atıf yaparken **doğrulanabilir kaynak** belirtmek zorundadır (eser adı + sayfa/dize/bölüm). Web search yapılırsa **iki bağımsız kaynakla** çapraz doğrulanır.
>
> **Doktrin filtresi:** Wordsworth, Osho gibi mistik/spiritüel yazarlar için cümle "kültürel metafor" mu, "dini-doktrin hüküm" mü ayrımı yapılır. Hüküm cümleleri otomatik elenir; ibadet yöntemi / oruç / meditasyon talimatı önerisi YASAK (Sanem'de doktrin damarı yok zaten — Wordsworth doğa metaforu kalır).

---

## Frekans kuralı

`profile.yaml.citations.frequency_rule` ile aynı:

- En fazla **1 doğrudan alıntı** (Sanem'in kendi cümlesi VEYA aktarımı)
- En fazla **1 metafor** mevsim/doğa damarından
- En fazla **1 manifesto kalıbı** (5 imza-cümleden)
- En fazla **1-2 kültürel referans** (yazar/eser atfı, alıntı yapmadan)
- **Toplam ödünç-cümle ≤ 2** (üçü birden "alıntı yığını" — yasak)

Aile aktarımı (Ahmet/Çetin/Mehmet Altan) **bu sayıma dahildir** — max 1/makale.

---

## I. Sanem'in Kendi Köşelerinden Doğrudan Atıfladığı Yazar/Sanatçılar

> Korpusun (`../../sanem-altan-alintilar.md` Bölüm IV.2 ve IV.3) çekirdek atıf havuzu.

| Yazar | Atıf üslubu (Sanem kalıbı) | Kanonik kaynak | Sanem'in atıf bağlamı |
|---|---|---|---|
| **William Wordsworth** | "İngiliz şair William Wordsworth'ün dediği gibi..." | *Lyrical Ballads* (1798) — kanonik *"Bırakın da doğa size dadılık etsin"* dizesi | "Bırakın doğa size dadılık etsin" 3 Mart 2016 |
| **Edip Cansever** | "Edip Cansever'in o şiirinde..." (sade ad, Türkçe edebiyat kalıbı) | *Yerçekimli Karanfil*, *Çağrılmayan Yakup*, *Sonrası Kalır* | "Biz herşeyin iyi olmasını istemiştik..." 20 Şub 2016 |
| **Tomris Uyar** | "Tomris Uyar..." | Öyküler ve günlükler — *Sekizinci Günah*, *Gündökümü* | "Bir kadın üç şair..." 29 Ağu 2015 |
| **Turgut Uyar** | "Turgut Uyar..." | *Dünyanın En Güzel Arabistanı*, *Toplandılar* | aynı yazı |
| **Cemal Süreyya** | "Cemal Süreyya'nın o şiirinde..." | *Üvercinka*, *Göçebe* | aynı yazı |
| **Mihail Lermontov** | "Rus yazar Lermontov'un tek romanı..." | *Zamanımızın Bir Kahramanı* (1840, çev. Ergin Altay) | "Zamanımızın bir kahramanı..." 18 Oca 2014 |
| **Modigliani (üzerinden Picasso)** | "İtalyan ressam Modigliani için Picasso..." | Andrei Konchalovsky, *Modigliani* (2004 film); Picasso'nun atıf cümleleri | "Kahkaha ve Modigliani..." 29 Tem 2014 |
| **Umberto Eco** | "İtalyan yazar Umberto Eco..." | *Gülün Adı* (1980, ilk romanı 48 yaşında); *Foucault Sarkacı*, *Gizli Alev* | "Yalan söylüyoruz!" 27 Şub 2016 |
| **Osho (Rajneesh)** | "Hint mistik Osho..." | "Kahkaha gerçek dindir" — kanonik atıflı söz (sosyal medyada Sanem'in aktardığı) | "Kahkaha ve Modigliani..." 29 Tem 2014 |
| **Madam Bovary (Flaubert)** | "Flaubert'in Madam Bovary'si..." | *Madam Bovary* (1857, çev. Atilla Tokatlı) | "Biz herşeyin iyi olmasını istemiştik..." 20 Şub 2016 |
| **Nazım Hikmet** | "Nazım Hikmet..." (sade ad) | *Memleketimden İnsan Manzaraları*; *Kuvvayi Milliye*; *835 Satır* | "Akrep gibisin kardeşim" 10 Mart 2016 (politik bağlamlı — Estranova'da YASAK; başlık olarak kullanılan Akrep şiiri başka konuda kullanılabilir) |
| **Cahit Sıtkı Tarancı** | "Cahit Sıtkı'nın bir dizesi..." | *Otuz Beş Yaş*, *Düşten Güzel* | (Sanem'in zaman/yaş temalı yazılarında doğal köprü adayı) |
| **Leyla — Sanem'in kızı** (Çift Rol KRİTİK) | Default ANONİM ("kızım" / "yakınımdaki bir genç"); isim ancak Sanem birinci kişi + Leyla 18+ rıza | Sanem'in Kahkaha ve Modigliani 2014 köşesinde "yedi yaşındaki Leyla" geçti | 2007 doğumlu, 2026'da 19 yaşında. **Doğumunu Senai Aksoy yaptırdı** → muayene odası + doğum klinik detayı sızıntı YASAK (`hidden.md §5c-ek`) |
| **Richard Curtis (About Time)** | "İngiliz yönetmen Richard Curtis'in *Zamanda Aşk* filmi..." | *About Time* (2013 film) | "Geçmişin gölgesinde..." 5 Eyl 2015 |
| **Philippe Petit** | "Fransız ipte yürüme sanatçısı Philippe Petit..." | *Man on Wire* (2008 belgesel); *To Reach the Clouds* (kitap) | "Hatalar dersi..." 11 Şub 2016 |

---

## II. Aile Aktarımları (kamuya malolmuş şahsiyetler — 2026-05-01 kuralı)

> Sanem'in aile şahsiyetleri **isim+akrabalık+eser bağıyla** Estranova metnine doğal yansır. Yapay mesafe ("ailemden biri") YASAK. Politik/hukuki bağlam ayrı kategori (cezaevi, müebbet, dava — gövdeye taşınmaz).

| Akrabalık | İsim | Atıf üslubu | Kanonik kaynak | Sanem'in aktardığı çekirdek cümle |
|---|---|---|---|---|
| Baba | **Ahmet Altan** | "babam Ahmet Altan'ın bir köşe yazısında..." | *Tehlikeli Masallar*, *Sudaki İz*, *İsyan Günlerinde Aşk*, *Kılıç Yarası Gibi*, *Dünyayı Bir Daha Görmeyeceğim* (cezaevi anıları, 2018) | *"Gerçekleri sıradan cümleler söyler bize. Hayatımızı onlar belirler."* (Sanem'in 2 Şub 2013 köşesinden); *"Annesini küçümseyen kendini de küçümser."* (Sanem'in 29 Ağu 2015 köşesinden) |
| Dede | **Çetin Altan** | "dedem Çetin Altan'ın *Kopuk Kopuk* yazı dizisinde..." | *Kopuk Kopuk* (yazı dizisi, Milliyet); *Bir Yumak İnsan*; *Sancılı Yıllar* | *"Tılsımı olmalı hayatın. Vazgeçilmez bir öfke gibi, zapdedilmeyen bir aşk arayışı gibi, kaptırıp kendini şiirler yazmak gibi, gecenin büyüsünde çıldırmak gibi…"* (Sanem'in 2010 Mart Ara Güler röportajında aktardı) |
| Amca | **Mehmet Altan** | "amcam..." (kontekst gerektirdiğinde, daha az sık) | İktisat ve gazetecilik makaleleri | (Sanem'in yazılarında doğrudan aktarım nadir) |

### Yasak (politik / hukuki bağlam)

- *"Babam Silivri'de yazdı"*, *"Hayattan çalınan zamanı hayatına geri katmak"*, *"Saray-yargı"*, *"müebbet"*, *"basın özgürlüğü mücadelesi"* tipi cümleler **gövdeye taşınmaz**.
- Ahmet Altan'ın *Dünyayı Bir Daha Görmeyeceğim* (cezaevi anıları) kitabı **kaynak olarak listelenebilir** ama **alıntılanmaz** (siyasi/hukuki bağlam).
- Sanem'in Twitter @AltanSan tweet'lerinin büyük kısmı bu bağlamda — Estranova çerçevesine ait değil.

---

## III. Estranova editöryal damarına genişletilebilir adaylar (pending'e gider)

> Sanem'in kendi köşelerinde geçmeyen ama **karakter olarak uygun** olabilecek yazar/sanatçılar. Önce `pending.md`'ye atılır, editör onayından sonra `extended.md`'ye geçer.

| Yazar | Atıf üslubu | Kanonik kaynak | Sanem-uygunluk gerekçesi |
|---|---|---|---|
| **Anaïs Nin** | "Fransız-Amerikan yazar Anaïs Nin..." | *Henry ve June*, günlükler | İç gözlem, cinsellik-mahremiyet sınırında zarif dil — Sanem mahrem konuda yazarsa köprü |
| **Marguerite Duras** | "Fransız yazar Marguerite Duras..." | *Sevgili*, *Maddi Yaşam* | Lirik kayıp, anne-kız, kuşak — Sanem anne-kayıp temasında köprü |
| **Tezer Özlü** | "Tezer Özlü..." | *Çocukluğun Soğuk Geceleri*, *Yaşamın Ucuna Yolculuk* | Çocukluk-yalnızlık-büyüme halkasında Sanem'in damarına yakın |
| **Bilge Karasu** | "Bilge Karasu..." | *Göçmüş Kediler Bahçesi*, *Uzun Sürmüş Bir Günün Akşamı* | Lirik düzyazı, mevsim metaforu — Sanem'in akşam-tonuna yakın |
| **Sevim Burak** | "Sevim Burak..." | *Yanık Saraylar*, *Afrika Dansı* | Avant-garde Türk öykü; deneysel deneme dilinde köprü |
| **Birhan Keskin** | "Birhan Keskin..." (sade ad) | *Y'ol*, *Soğuk Kazı*, *Fakir Kene* | Doğa-mevsim-bedensellik şiiri — Sanem'in ağaç metaforuyla doğal akrabalık |
| **Adalet Ağaoğlu** | "Adalet Ağaoğlu..." | *Bir Düğün Gecesi*, *Üç Beş Kişi*, *Romantik* | Kadın deneyimi, kuşak, kimlik — Sanem'in tematik damarına yakın |
| **Sait Faik** | "Sait Faik..." | *Lüzumsuz Adam*, *Semaver*, *Mahalle Kahvesi* | Sokak / akşam / İstanbul — Sanem'in akşam yürüyüşü sahnesine kültürel köprü |
| **Cesare Pavese** | "İtalyan yazar Cesare Pavese..." | *Yaşama Uğraşı* (günlükler), *Ay ve Şenlik Ateşleri* | Yalnızlık-mevsim-melankoli — Sanem'in damarıyla tematik akrabalık |

> **Frekans:** Bu listeden bir yazar Estranova metnine girerse `pending.md`'ye **kaynak doğrulamayla** kaydedilir. Onaylananlar `extended.md`'ye geçer ve sonraki makalelerde korpus gibi kullanılır.

---

## IV. Yasak / Doğrulanmamış Atıflar

- **Apokrif "Mevlana"/"Rumi" alıntıları** — Sanem'in damarında tasavvuf yok; Mevlana atıfı Sanem profilinde **kullanılmaz** (Gamze imzası).
- **İnternet'te yaygın "anonim" alıntılar** — *"Hayat bisiklet sürmek gibidir, dengeyi korumak için..."* tipi yanlış atıflanmış sözler kullanılmaz.
- **Politik figür alıntıları** — herhangi bir siyasetçi sözü Estranova çerçevesine ait değil.
- **Self-help / motivasyonel literatür** — Sanem'in damarına yabancı; Tony Robbins, Rhonda Byrne tipi atıf YASAK.

---

## Süreç notu

Bu dosya yazar profiline kuruluş anında oluşturuldu. Yazar agent her makalede:

1. Önce **korpus**'a bakar (`../../sanem-altan-aphorism-pool.md`)
2. Korpusta uygun aforizma yoksa → bu **canonical-sources** listesine bakar
3. Aday seçilirse → `pending.md`'ye düşürür (insan editör onayı için)
4. Onaylanan aday → `extended.md`'ye girer
5. Onaylanmayan aday → reddedilir; gerekçe `pending.md` içinde tutulur
