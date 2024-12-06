import "./Menu.css";

const menuData = [
  {
    category: "DÖNER ÜRÜNLERİ",
    items: [
      { name: "Et Döner Ekmek Arası", price: "140₺" },
      { name: "Et Döner Lavaş Dürüm", price: "140₺" },
      { name: "Et Döner Servis", price: "170₺" },
      { name: "Tavuk Döner Ekmek Arası", price: "110₺" },
      { name: "Tavuk Döner Lavaş Dürüm", price: "110₺" },
      { name: "Tavuk Döner Servis", price: "130₺" },
      { name: "Hatay Usulü Tavuk Dürüm", price: "140₺" },
      { name: "Et İskender", price: "200₺" },
      { name: "Tavuk İskender", price: "150₺" },
      { name: "Et Döner (kg)", price: "1500₺" },
      { name: "Tavuk Döner (kg)", price: "900₺" }
    ]
  },  
  {
    category: "PİDE VE IZGARA ÇEŞİTLERİ",
    items: [
      { name: "Lahmacun", price: "75₺" },
      { name: "Kıymalı Pide", price: "130₺" },
      { name: "Kapalı Et Dönerli Pide", price: "200₺" },
      { name: "Köfte (Ekmek Arası)", price: "130₺" },
      { name: "Köfte Servis", price: "140₺" },
      { name: "Kuzu Şiş", price: "150₺"},
      { name: "Kuzu Ciğer Şiş", price: "110₺"},
      { name: "Pirzola", price: "200₺" }
    ]
  },
  {
    category: "ÖZEL LEZZETLER",
    items: [
      { name: "Balık Ekmek (Uskumru)", price: "110₺" },
      { name: "Balık Servis (Uskumru)", price: "110₺" },
      { name: "Çiğ Köfte (kg)", price: "200₺" },
      { name: "Çiğ Köfte (Porsiyon)", price: "50₺" },
      { name: "Çiğ Köfte (Dürüm)", price: "50₺" },
      { name: "Mantı (kg)", price: "350₺" },
      { name: "Mantı (Porsiyon)", price: "60₺" },
      { name: "İçli Köfte (adet)", price: "50₺" },
      { name: "Yaprak Sarma(kg)", price: "200₺" },
      { name: "Yaprak Sarma (Porsiyon)", price: "50₺" },
      { name: "Baklava (kg)", price: "350₺" },
      { name: "Baklava (Porsiyon)", price: "70₺" },
      { name: "Waffle", price: "70₺" },
      { name: "Börek (kg)", price: "250₺" },
      { name: "Yaş Pasta", price: "300₺" },
      { name: "Höşmerim", price: "60₺" },
      { name: "Trileçe", price: "200₺" },
      { name: "Gözleme", price: "50₺" },
      { name: "Bazlama", price: "15₺" },
      { name: "Ekler (adet)", price: "10₺" },
      { name: "Truf (adet)", price: "7.5₺" },
      { name: "Aşure", price: "60₺" }
    ]
  },
  {
    category: "ÇORBALAR",
    items: [
      { name: "Gerdan Çorbası", price: "80₺" },
      { name: "Mercimek Çorbası", price: "70₺"}
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
