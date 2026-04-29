# Gamze Cizreli — Canonical Sources Whitelist

> **Bu dosya AI agent için bağlayıcıdır.** Korpus dışı atıf yapılacaksa **yalnız bu listedeki yazar+kaynak çiftinden** seçilir. Listede olmayan yazar/kaynaktan atıf YASAK — uydurma riski.
>
> **Mekanizma (Hybrid Whitelist + Editorial Gate):**
> 1. Korpus → ilk tercih (`gamze-cizreli-aphorism-pool.md`, 56 distile cümle)
> 2. Korpusta uygun cümle yoksa → bu listedeki yazar+kanonik kaynaktan aday
> 3. Aday `pending.md`'ye düşer → insan editör onayı (haftalık batch)
> 4. Onaylanan aday `extended.md`'ye girer → sonraki makaleler korpus gibi kullanır
>
> **Uydurma alıntı yasağı:** AI bu listedeki bir yazara atıf yaparken **doğrulanabilir kaynak** belirtmek zorundadır (eser adı + sayfa/dize/bölüm). Web search yapılırsa **iki bağımsız kaynakla** çapraz doğrulanır. Tasavvuf yazarları (Mevlana, Yunus, İbn Arabî) için **yalnız kanonik çeviriler** kabul (Konuk, Gölpınarlı); apokrif internet alıntıları YASAK.
>
> **Doktrin filtresi:** Mevlana / Yunus / İbn Arabî için cümle "kültürel metafor" mu, "dini hüküm" mü ayrımı yapılır. Hüküm cümleleri otomatik elenir; ibadet yöntemi / tarikat / dergah / zikir önerisi YASAK.
>
> **Çift Rol filtresi:** Atıf seçimi `profile.yaml.dual_role_warning` ile çelişmez (muayene odası bilgisinden bağımsız).

---

## Frekans kuralı

`profile.yaml.citations.frequency_rule` ile aynı:

- En fazla **1 doğrudan alıntı** (Gamze'nin kendi cümlesi VEYA aktarımı)
- En fazla **1 metafor** Mevlana/tasavvuf damarından
- En fazla **1 manifesto kalıbı** (`warm.md` §4e)
- En fazla **1-2 kültürel referans** (yazar/eser atfı, alıntı yapmadan)
- **Toplam ödünç-cümle ≤ 2** (üçü birden "alıntı yığını" — yasak)

---

## I. Stoik-Realist Batı

| Yazar | Atıf üslubu (Cizreli kalıbı) | Kanonik kaynaklar |
|---|---|---|
| **Arthur Schopenhauer** | "Alman filozof Schopenhauer'in sözüdür..." | *Aforizmalar* (çev. Levent Özoğuz veya Sedat Umran); *İsteme ve Tasavvur Olarak Dünya* (çev. Levent Özoğuz) |
| **Friedrich Nietzsche** | "Alman filozof Nietzsche..." | *Böyle Buyurdu Zerdüşt* (çev. A. Turan Oflazoğlu); *İyinin ve Kötünün Ötesinde*; *Şen Bilim* |
| **Seneca** | "Romalı düşünür Seneca..." | *Ahlaki Mektuplar (Lucilius'a Mektuplar)* (çev. Türkan Uzel); *Kısa Olduğundan Hayat* |
| **Søren Kierkegaard** | "Danimarkalı filozof Kierkegaard'ın dediği gibi..." | *Korku ve Titreme* (çev. Nedim Çatlı); *Ya Hep Ya Hiç* |
| **Johann Wolfgang von Goethe** | "Alman yazar Goethe..." | *Faust* (çev. İclal Cankorel); *Genç Werther'in Acıları* |
| **Aristoteles** | "Yunan filozof Aristoteles..." | *Nikomakhos'a Etik* (çev. Saffet Babür); *Politika* |
| **Platon** | "Yunan filozof Platon..." | *Devlet* (çev. Sabahattin Eyüboğlu / M. Ali Cimcoz); *Şölen* |
| **Voltaire** | "Fransız yazar Voltaire..." | *Candide* (çev. Server Tanilli); *Felsefe Sözlüğü* |
| **Nassim Taleb** | "Lübnan asıllı düşünür Nassim Taleb..." | *Antifragile* (Türkçe: *Antikırılgan*); *The Black Swan* (Türkçe: *Siyah Kuğu*); *Skin in the Game* |
| **Viktor Frankl** | "Avusturyalı psikiyatr Viktor Frankl..." | *Man's Search for Meaning* (Türkçe: *İnsanın Anlam Arayışı*, çev. Selçuk Budak) |
| **Doğan Cüceloğlu** | "Türk psikolog Doğan Cüceloğlu..." | *İçimizdeki Çocuk*; *Yeniden İnsan İnsana*; *İletişim Donanımları* |

---

## II. Tasavvuf-Anadolu Hikmet

> **DİKKAT — Apokrif Mevlana uyarısı:** Türkçe internette uydurma Mevlana alıntıları çok yaygın. **Yalnız aşağıdaki kanonik çeviriler kabul.** Web search ile bulunan cümle iki bağımsız kanonik kaynakta yer almıyorsa **kullanma**.

| Yazar | Atıf üslubu | Kanonik kaynaklar | Doktrin filtresi |
|---|---|---|---|
| **Mevlana Celaleddin Rumi** | "Mevlana" (sade ad) | *Mesnevi* (Şefik Can çev. veya Abdülbaki Gölpınarlı çev. veya Tahir-ül Mevlevi çev.); *Divan-ı Kebir* (Gölpınarlı çev.); *Fihi Ma Fih* (Meliha Ülker Anbarcıoğlu çev.) | Mum/yol/kapı/su/ateş/kül/ışık metaforu KABUL. Tarikat/dergah/zikir/ibadet yöntemi YASAK. |
| **İbn Arabî** | (Estranova'da kullanılmaz — ad ağır gelir) | *Fusûsu'l-Hikem* (Ekrem Demirli çev.) — referans değil sadece bilgi | YASAK eksen |
| **Yunus Emre** | "Yunus" (sade ad), "Yunus Emre" | *Yunus Emre Divanı* (Mustafa Tatcı çev.); *Risaletü'n-Nushiyye* | "İlim ilim bilmektir" tarzı evrensel hikmet KABUL. Ritüel/ibadet yöntemi YASAK. |

---

## III. Pratik Yönetim / Amerikan Eksen

| Yazar | Atıf üslubu | Kanonik kaynaklar |
|---|---|---|
| **Jim Rohn** | "Amerikalı motivasyon yazarı Jim Rohn..." | *The Treasury of Quotes*; *Leading an Inspired Life* |
| **Dwight D. Eisenhower** | "Amerikalı devlet adamı Eisenhower..." | Konuşmalar; otobiyografi (*At Ease: Stories I Tell to Friends*) |
| **Abraham Lincoln** | "Amerikalı devlet adamı Lincoln..." | Gettysburg Konuşması; toplu mektuplar |
| **Steve Jobs** | "Amerikalı girişimci Steve Jobs..." | Stanford Üniversitesi Açılış Konuşması (2005, kanıtlı kayıt); Walter Isaacson biyografisi |
| **Ralph Waldo Emerson** | "Amerikalı yazar Emerson..." | *Self-Reliance*; *Nature*; *Essays: First and Second Series* |
| **Vehbi Koç** | "Türk girişimci Vehbi Koç..." | *Hayat Hikayem*; *Hatıralarım, Görüşlerim, Öğütlerim* |
| **Jack Welch** | "Amerikalı yönetici Jack Welch..." | *Winning*; *Jack: Straight from the Gut* |
| **Kevin Welch** | "Amerikalı sanatçı Kevin Welch..." | Şarkı sözleri; konser kayıtları |

---

## IV. Türk Edebiyatı

| Yazar | Atıf üslubu | Kanonik kaynaklar |
|---|---|---|
| **Sabahattin Ali** | "Sabahattin Ali..." | *Kürk Mantolu Madonna*; *İçimizdeki Şeytan*; *Kuyucaklı Yusuf*; öyküler ve şiirler |
| **Yaşar Kemal** | "Yaşar Kemal'in bir cümlesi..." | *İnce Memed* serisi; *Ortadirek*; *Yer Demir Gök Bakır* |
| **Tomris Uyar** | "Tomris Uyar'ın bir cümlesi..." | *Yürekte Bukağı*; *Sekizinci Günah*; *Otuzların Kadını*; günlükler |
| **Cemal Süreya** | "Cemal Süreya..." | *Sevda Sözleri*; *Üvercinka*; *Göçebe* |
| **Cahit Sıtkı Tarancı** | "Cahit Sıtkı'nın o şiirinde..." | *Otuz Beş Yaş*; *Düşten Güzel*; toplu şiirler |
| **Ece Temelkuran** | "Türk yazar Ece Temelkuran..." | *Muz Sesleri*; *Düğümlere Üfleyen Kadınlar*; *Türkiye: Çılgın ve Hüzünlü* |
| **Şükrü Erbaş** | "Şair Şükrü Erbaş..." | *Yoksulluk Bir Kuştur Dağlarda*; *Yağmurlu Mevsim*; toplu şiirler |
| **Birhan Keskin** | "Şair Birhan Keskin..." | *Ba*; *Y'ol*; *Yeryüzü Halleri* |
| **Buket Uzuner** | "Türk yazar Buket Uzuner..." | *Uzun Beyaz Bulut Gelibolu*; *İki Yeşil Susamuru*; *Su* |
| **Nazım Hikmet** | "Nazım Hikmet'in bir dizesi..." | *Memleketimden İnsan Manzaraları*; *Kuvâyi Milliye*; *Bütün Şiirleri* |

---

## V. Çağdaş / Yabancı Edebiyat

| Yazar | Atıf üslubu | Kanonik kaynaklar |
|---|---|---|
| **Lev Tolstoy** | "Rus yazar Tolstoy..." | *Anna Karenina*; *Savaş ve Barış*; *İvan İlyiç'in Ölümü* |
| **Jorge Luis Borges** | "Arjantinli yazar Borges..." | *Ficciones (Hayaller ve Hikayeler)*; *El Aleph*. **NOT:** "Anlar" şiiri Borges'e atıf belirsiz — ihtiyatlı kullanım, ya atıfsız ya "halk arasında Borges'e mal edilen şiir" çerçevesi. |
| **Anaïs Nin** | "Fransız yazar Anaïs Nin..." | *The Diary of Anaïs Nin* (7 cilt); *Henry and June*; *Delta of Venus* |
| **Aldous Huxley** | "İngiliz yazar Aldous Huxley..." | *Brave New World*; *The Doors of Perception*; *Island* |
| **Aret Vartanyan** | "Aret Vartanyan..." | *Bin Yüz Bir İnsan* |
| **Elif Şafak** | "Türk yazar Elif Şafak..." | *Aşk*; *Baba ve Piç*; *İskender*; *On Dakika Otuz Sekiz Saniye*; *Havva'nın Üç Kızı* |

---

## VI. Müzik (kanonik kayıt referansı)

| Sanatçı | Atıf üslubu | Kanonik referans |
|---|---|---|
| **Athena** | "Athena'nın bir şarkısı..." | Stüdyo albüm kayıtları (Spotify/Apple Music kanonik). Şarkı sözü atfı için stüdyo versiyonu temel alınır. |
| **Candan Erçetin** | "Candan Erçetin'in bir şarkısı..." | Stüdyo albümleri |
| **Ahmet Kaya** | "Ahmet Kaya'nın bir şarkısı..." | Stüdyo albümleri (1985-2000 arası kanonik) |
| **Sezen Aksu** | "Sezen Aksu'nun bir şarkısı..." | Stüdyo albümleri |

> **Şarkı sözü atfı için kural:** Sözü tam doğru aktarın (söz yazarı ayrıdır — "X'in Y şarkısının sözünde" formu kabul). Şarkı adı kesin doğrulanmalı.

---

## VII. Korpusta Yer Almayan Ama Atıf Hattına Uyan Aday Yazarlar

> **Bu liste Gamze'nin sesi için makul fakat henüz korpusta kanıtı olmayan yazarlardır.** Atıf yapılırsa `pending.md`'ye düşer, editör onayı sonrası `extended.md`'ye girer.

| Yazar | Atıf üslubu | Kanonik kaynaklar | Eksen |
|---|---|---|---|
| **Adalet Ağaoğlu** | "Türk yazar Adalet Ağaoğlu..." | *Ölmeye Yatmak*; *Bir Düğün Gecesi*; *Fikrimin İnce Gülü* | Türk edebiyatı / kuşak / kadın |
| **Tezer Özlü** | "Türk yazar Tezer Özlü..." | *Çocukluğun Soğuk Geceleri*; *Yaşamın Ucuna Yolculuk* | Türk edebiyatı / kadın / dil |
| **Sevgi Soysal** | "Türk yazar Sevgi Soysal..." | *Yenişehir'de Bir Öğle Vakti*; *Yürümek*; *Şafak* | Türk edebiyatı / kadın |
| **Latife Tekin** | "Türk yazar Latife Tekin..." | *Sevgili Arsız Ölüm*; *Berci Kristin Çöp Masalları* | Türk edebiyatı / Anadolu kadını |
| **Oğuz Atay** | "Türk yazar Oğuz Atay..." | *Tutunamayanlar*; *Tehlikeli Oyunlar*; *Korkuyu Beklerken* | Türk edebiyatı / iç dünya |
| **Marcus Aurelius** | "Romalı imparator-filozof Marcus Aurelius..." | *Düşünceler (Meditationes)* (çev. Şadan Karadeniz) | Stoik |
| **Epiktetos** | "Yunan filozof Epiktetos..." | *Encheiridion (El Kitabı)*; *Söyleşiler* | Stoik |
| **Marcus Tullius Cicero** | "Romalı düşünür Cicero..." | *De Officiis (Görev Üzerine)*; *Tusculum Tartışmaları* | Stoik / etik |
| **Carl Jung** | "İsviçreli psikiyatr Carl Jung..." | *Anılar, Düşler, Düşünceler*; *Modern Insanın Ruhsal Sorunları* | Psikoloji |
| **Mary Oliver** | "Amerikalı şair Mary Oliver..." | *Devotions* (toplu şiirler); *Wild Geese*; *Upstream* | Doğa şiiri / sabah |
| **Rainer Maria Rilke** | "Avusturyalı şair Rilke..." | *Genç Bir Şaire Mektuplar*; *Duino Ağıtları* | Sözünü dinlemek / iç ses |
| **Hermann Hesse** | "Alman yazar Hermann Hesse..." | *Siddhartha*; *Bozkırkurdu*; *Camsız Boncuk Oyunu* | İç yolculuk / sadeleşme |
| **Albert Camus** | "Fransız yazar Camus..." | *Yabancı*; *Sisifos Söyleni*; *Veba* | Anlam / kabul |
| **Simone de Beauvoir** | "Fransız yazar Simone de Beauvoir..." | *İkinci Cins*; *Yaşlılık*; *Bir Genç Kızın Anıları* | Kadın / yaşlanma |
| **Gloria Steinem** | "Amerikalı yazar Gloria Steinem..." | *Revolution from Within*; *My Life on the Road* | Kadın / orta yaş |
| **Annie Dillard** | "Amerikalı yazar Annie Dillard..." | *Pilgrim at Tinker Creek*; *The Writing Life* | Doğa / dikkat |
| **Pico Iyer** | "Pico Iyer..." | *The Art of Stillness*; *Autumn Light* | Yavaşlık / sessizlik |

---

## Atıf doğrulama protokolü (AI agent için)

Korpus dışı atıf önerirken AI agent şu adımları takip eder:

1. Cümle/kavram → korpus (`gamze-cizreli-aphorism-pool.md`) ara. Bulunduysa: kullan, bu liste tetiklenmez.
2. Korpusta yoksa → bu listedeki yazarlardan **konu eşleşmesi olan** birini seç.
3. Yazara ait cümle için web search yap → **iki bağımsız kanonik kaynakta** doğrula (eser adı + sayfa/dize).
4. Doğrulamadıysa: aday düşer, yumuşak referansa dön ("uzmanlar bunu söylüyor" tipi anonim).
5. Doğrulandıysa: aday `pending.md`'ye yazılır (yazar adı, eser, sayfa, cümle, kullanım bağlamı, makale slug'ı).
6. Editör (Senai veya delege) `pending.md`'yi haftalık inceler → onaylanan adaylar `extended.md`'ye taşınır.
7. `extended.md` korpus gibi kullanılır; sonraki makaleler doğrudan oradan çekebilir.

## Kullanılmaması gereken alanlar

- **Sosyal medya alıntıları** (Twitter, Instagram, TikTok) — Gamze'nin atıf hattında değil
- **Çağdaş blogger / influencer alıntıları** — sesini bozar
- **Doğrulanmamış internet folkloru** ("Mevlana dedi ki..." formundaki kanıtsız metinler)
- **Apokrif tasavvuf metinleri** — kanonik çeviri zorunlu
- **Pop psikoloji slogan kitapları** (Estranova editöryal kalitesini düşürür)
- **Akademik makale doğrudan alıntısı** — Gamze sesinde mesafe yaratır; "araştırmalar gösteriyor" tipi anonim referans tercih
