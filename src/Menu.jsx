import "./Menu.css";

const menuData = [
  {
    category: "DÖNER ÜRÜNLERİ",
    items: [
      { name: "Et Döner Ekmek Arası", price: "200₺" },
      { name: "Et Döner Lavaş Dürüm", price: "200₺" },
      { name: "Et Döner Servis", price: "210₺" },
      { name: "Tavuk Döner Ekmek Arası", price: "170₺" },
      { name: "Tavuk Döner Lavaş Dürüm", price: "170₺" },
      { name: "Tavuk Döner Servis", price: "180₺" },
      { name: "Hatay Usulü Tavuk Dürüm", price: "180₺" },
      { name: "Et İskender", price: "250₺" },
      { name: "Tavuk İskender", price: "210₺" },
      { name: "Et Döner (kg)", price: "1800₺" },
      { name: "Tavuk Döner (kg)", price: "1500₺" }
    ]
  },  
  {
    category: "PİDE VE IZGARA ÇEŞİTLERİ",
    items: [
      { name: "Adana Lavaş Dürüm", price: "210₺" },
      { name: "Adana (Porsiyon)", price: "220₺" },
      { name: "Tavuk Kanat", price: "180₺" },
      { name: "Lahmacun", price: "100₺" },
      { name: "Kıymalı Pide", price: "200₺" },
      { name: "Kapalı Et Dönerli Pide", price: "250₺" },
      { name: "Köfte (Ekmek Arası)", price: "180₺" },
      { name: "Köfte Servis", price: "190₺" },
      { name: "Kuzu Şiş", price: "210₺"},
      { name: "Kuzu Şiş Servis", price: "220₺"},
      { name: "Kuzu Ciğer Şiş", price: "170₺"},
      { name: "Kuzu Ciğer Şiş Servis", price: "180₺"},
      { name: "Pirzola (5 Adet)", price: "300₺" }
    ]
  },
  {
    category: "ÖZEL LEZZETLER",
    items: [
      { name: "Çiğ Köfte (kg)", price: "250₺" },
      { name: "Çiğ Köfte (Porsiyon)", price: "75₺" },
      { name: "Çiğ Köfte (Dürüm)", price: "60₺" },
      { name: "Mantı (kg)", price: "450₺" },
      { name: "Mantı (Porsiyon)", price: "75₺" },
      { name: "İçli Köfte (adet)", price: "70₺" },
      { name: "Yaprak Sarma(kg)", price: "300₺" },
      { name: "Yaprak Sarma (Porsiyon)", price: "50₺" },
      { name: "Baklava (kg)", price: "550₺" },
      { name: "Baklava (Porsiyon)", price: "100₺" },
      { name: "Waffle", price: "100₺" },
      { name: "Börek (kg)", price: "350₺" },
      { name: "Yaş Pasta", price: "450₺" },
      { name: "Höşmerim", price: "100₺" },
      { name: "Trileçe (kg)", price: "350₺" },
      { name: "Gözleme", price: "60₺" },
      { name: "Bazlama", price: "20₺" },
      { name: "Ekler (adet)", price: "10₺" },
      { name: "Truf (adet)", price: "7.5₺" },
      { name: "Aşure", price: "75₺" }
    ]
  },
  {
    category: "ÇORBALAR",
    items: [
      { name: "Gerdan Çorbası", price: "100₺" },
      { name: "Mercimek Çorbası", price: "80₺"}
    ]
  },
  {
    category: "İÇECEKLER",
    items: [
      { name: "Su", price: "5₺" },
      { name: "Sade Soda", price: "15₺" },
      { name: "Kapalı Ayran", price: "10₺" },
      { name: "Yayık Ayran", price: "20₺" },
      { name: "Gazoz", price: "20₺" },
      { name: "Kızılcık Şerbeti", price: "20₺" },
      { name: "Limonata", price: "20₺" },
      { name: "Çay", price: "5₺" }
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

