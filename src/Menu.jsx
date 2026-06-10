import "./Menu.css";

const menuData = [
  {
    category: "DÖNER ÜRÜNLERİ",
    items: [
      { name: "Et Döner Ekmek Arası", price: "250₺" },
      { name: "Et Döner Lavaş Dürüm", price: "250₺" },
      { name: "Et Döner Servis", price: "250₺" },
      { name: "Tavuk Döner Ekmek Arası", price: "200₺" },
      { name: "Tavuk Döner Lavaş Dürüm", price: "200₺" },
      { name: "Tavuk Döner Servis", price: "200₺" },
      { name: "Hatay Usulü Tavuk Dürüm", price: "180₺" },
      { name: "Et İskender", price: "300₺" },
      { name: "Tavuk İskender", price: "250₺" },
      { name: "Et Döner (kg)", price: "2400₺" },
      { name: "Tavuk Döner (kg)", price: "1900₺" }
    ]
  },  
  {
    category: "PİDE VE IZGARA ÇEŞİTLERİ",
    items: [
      { name: "Adana Lavaş Dürüm", price: "250₺" },
      { name: "Adana (Porsiyon)", price: "250₺" },
      { name: "Tavuk Kanat", price: "210₺" },
      { name: "Lahmacun", price: "120₺" },
      { name: "Kıymalı Pide", price: "200₺" },
      { name: "Kuşbaşılı Pide", price: "275₺" },
      { name: "Kapalı Et Dönerli Pide", price: "275₺" },
      { name: "Köfte (Ekmek Arası)", price: "200₺" },
      { name: "Köfte Servis", price: "200₺" },
      { name: "Kuzu Şiş Dürüm", price: "280₺" },
      { name: "Kuzu Şiş Servis", price: "280₺" },
      { name: "Ciğer Şiş Dürüm", price: "225₺" },
      { name: "Ciğer Şiş Servis", price: "225₺" },
      { name: "Pirzola (5 Adet)", price: "350₺" }
    ]
  },
  {
    category: "ÖZEL LEZZETLER",
    items: [
      { name: "Çiğ Köfte (kg)", price: "400₺" },
      { name: "Çiğ Köfte (Porsiyon)", price: "100₺" },
      { name: "Çiğ Köfte (Dürüm)", price: "100₺" },
      { name: "Mantı (kg)", price: "600₺" },
      { name: "Mantı (Porsiyon)", price: "100₺" },
      { name: "İçli Köfte (adet)", price: "75₺" },
      { name: "Yaprak Sarma (kg)", price: "350₺" },
      { name: "Yaprak Sarma (Porsiyon)", price: "50₺" },
      { name: "Baklava (kg)", price: "550₺" },
      { name: "Baklava (Porsiyon)", price: "100₺" },
      { name: "Waffle", price: "100₺" },
      { name: "Börek (kg)", price: "400₺" },
      { name: "Poğaça", price: "20₺" },
      { name: "İçli Poğaça", price: "25₺" },
      { name: "Yaş Pasta", price: "500₺" },
      { name: "Höşmerim", price: "120₺" },
      { name: "Trileçe (kg)", price: "350₺" },
      { name: "Gözleme", price: "75₺" },
      { name: "Bazlama", price: "25₺" },
      { name: "Ekler (adet)", price: "20₺" },
      { name: "Truf (adet)", price: "15₺" },
      { name: "Tartolet (adet)", price: "15₺" },
      { name: "Magnolya", price: "75₺" },
      { name: "Kuru Pasta (kg)", price: "400₺" },
      { name: "Aşure", price: "100₺" }
    ]
  },
  {
    category: "ÇORBALAR",
    items: [
      { name: "Gerdan Çorbası", price: "100₺" },
      { name: "Kelle Paça Çorbası", price: "100₺" },
      { name: "Mercimek Çorbası", price: "100₺" }
    ]
  },
  {
    category: "İÇECEKLER",
    items: [
      { name: "Bardak Su", price: "5₺" },
      { name: "Sade Soda", price: "15₺" },
      { name: "Kapalı Ayran", price: "15₺" },
      { name: "Yayık Ayran", price: "25₺" },
      { name: "Gazoz", price: "20₺" },
      { name: "Kızılcık Şerbeti", price: "20₺" },
      { name: "Limonata", price: "20₺" },
      { name: "Bardak Çay", price: "İkram" }
    ]
  }
];

const MenuCategory = ({ category, items }) => (
    <div className="menu-category">
      <h2 className="category-title" style={{textAlign:"center", padding:"15px"}}>{category}</h2>
      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
  
  const Menu = () => (
    <div className="menu-container">
      <h1 className="menu-title">Kermes Menüsü</h1>
      <div className="menu-pages">
        {menuData.map((category, index) => (
          <MenuCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );

export default Menu;
