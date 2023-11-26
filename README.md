# e-com-app

E-Com App Uygulamasi

### Açıklama:

- Projeyi paketleri tek tek kurarak olusturdum.
- Gorsele gore Product List sayfasi olusturuldu. (Bosluklar goreceli ayarlanmistir. Figma vb. tasarim olmadigi icin goreceli yaptim.)
- Urun listelemede productlarin gorsel linkleri kirik oldugu icin loremflickr ile replace ettim.
- Uygulamaya girildiginde createsession olusturulmustur ve sessionstorage de bu id tutulmaktadir.
- Olusturulan session Id yi headers configine ekleyip add-to-cart ve view-cart servisleri kullanima uygun hale getirilmistir.
- Quantity de ekleme yapildiginda azaltma butonu cikacak sekilde ayarlanmistir.
- Add to cart ta servis sadece id ye gore 1 adet ekliyor. Ancak kullanim acisindan  ben quantity de aliyormus gibi quantity parametresi de yolladim.
- Ek olarak view-cart servisi calistirildiktan sonra bunu redux ile state de tuttuk ve toplam quantity sayisini header da sepet ikonu uzerinde gosterdik.
- Verilen mock apiler kullanildi.
- Webpack konfigurasyonlari yapildi.
- Material UI ve styled components kullanildi.
- Typescript kullanildi.
- Redux ile state management yapildi. (Aktif olarak redux kullandigim icin tercih ettim)
- Servis istegi atmak icin react-query ve axios kutuphanelerinden faydalanildi.
- Type'lara dikkat edilmeye calisildi.


### Kurulum ve Projeyi Calistirma:

- **npm install** ya da **yarn install**
- **npm run start** ya da **yarn start**

#### Demo
https://react-e-com-app-aykut.netlify.app/
