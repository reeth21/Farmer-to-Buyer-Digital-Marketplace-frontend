import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Leaf, MapPin, Menu, Package, Search, ShieldCheck, ShoppingBasket, Sprout, UserRound, X } from 'lucide-react';
import { demoUser, initialOrders, initialProduce } from './demoData.js';
import { fallbackProductImage, productImageFor } from './productImages.js';
import './styles.css';

const money = (amount) => new Intl.NumberFormat('en-IN', {
  style: 'currency', currency: 'INR', maximumFractionDigits: 2,
}).format(amount || 0);

function App() {
  const [view, setView] = useState('market');
  const [inventory, setInventory] = useState(initialProduce);
  const [orders, setOrders] = useState(initialOrders);
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [quantities, setQuantities] = useState({});
  const [notice, setNotice] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const products = useMemo(() => inventory.filter((product) => {
    const matchesQuery = !query.trim() || `${product.name} ${product.category} ${product.description}`
      .toLowerCase().includes(query.trim().toLowerCase());
    const matchesLocation = !location.trim() || product.location
      .toLowerCase().includes(location.trim().toLowerCase());
    return matchesQuery && matchesLocation && product.quantity > 0;
  }), [inventory, query, location]);

  const flash = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 3500);
  };

  function placeOrder(product) {
    const quantity = Number(quantities[product.id] || 1);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      flash('Enter a valid quantity.');
      return;
    }
    if (quantity > product.quantity) {
      flash(`Only ${product.quantity} ${product.unit} currently available.`);
      return;
    }

    const order = {
      id: Date.now(), produceId: product.id, produceName: product.name,
      buyerId: demoUser.id, buyerName: demoUser.name,
      farmerId: product.farmerId, farmerName: product.farmerName,
      quantity, unit: product.unit, totalPrice: quantity * product.price,
      status: 'PENDING', createdAt: new Date().toISOString(),
    };
    setOrders((current) => [order, ...current]);
    setInventory((current) => current.map((item) => item.id === product.id
      ? { ...item, quantity: item.quantity - quantity }
      : item));
    setQuantities((current) => ({ ...current, [product.id]: '1' }));
    flash('Sample order placed. It is saved in this browser session.');
  }

  return <div className="app-shell">
    <header className="topbar">
      <div className="nav-wrap">
        <button className="brand" onClick={() => setView('market')}>
          <span className="brand-icon"><Sprout size={24} /></span>
          <span>Harvest<span className="brand-accent">Link</span><small>GROW TOGETHER</small></span>
        </button>
        <nav className={mobileOpen ? 'nav-links open' : 'nav-links'}>
          <button className={view === 'market' ? 'nav-link active' : 'nav-link'} onClick={() => { setView('market'); setMobileOpen(false); }}>Marketplace</button>
          <button className={view === 'orders' ? 'nav-link active' : 'nav-link'} onClick={() => { setView('orders'); setMobileOpen(false); }}>Sample orders <span className="order-count">{orders.length}</span></button>
        </nav>
        <div className="nav-actions">
          <span className="user-chip" title={`${demoUser.email} · ${demoUser.phone} · ${demoUser.location}`}>
            <span className="avatar"><UserRound size={15} /></span>
            <span className="user-name">{demoUser.name}<small>Sample buyer · local demo</small></span>
          </span>
          <button className="mobile-menu" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>

    {notice && <div className="toast" role="status">{notice}<button aria-label="Dismiss" onClick={() => setNotice('')}>×</button></div>}

    <main>
      {view === 'market' ? <>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> THE FARM-TO-FORK CONNECTION</div>
            <h1>Good food starts<br />with <em>good roots.</em></h1>
            <p>Meet the farmers behind your food. Discover fresh, locally grown produce and build a fairer food system — together.</p>
            <div className="hero-actions"><button className="button button-lime" onClick={() => document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })}>Explore produce <ArrowRight size={17} /></button></div>
            <div className="hero-trust"><span><ShieldCheck size={15} /> Direct from growers</span><span><Leaf size={15} /> Fresh &amp; seasonal</span></div>
          </div>
          <div className="hero-art"><div className="sun" /><div className="art-label"><span className="art-label-icon"><Sprout size={18} /></span><span><b>Grown with care</b><small>From our fields to your table</small></span></div><div className="produce-emoji">🥬 🍅 🌽</div><div className="art-caption">LOCAL HARVEST · FAIR PRICES</div></div>
        </section>

        <section className="value-strip">
          <div><span className="value-icon"><Sprout /></span><span><b>For farmers</b><small>Reach more buyers</small></span></div>
          <div><span className="value-icon"><ShoppingBasket /></span><span><b>For buyers</b><small>Source fresh produce</small></span></div>
          <div><span className="value-icon"><MapPin /></span><span><b>Closer to home</b><small>Find local harvests</small></span></div>
        </section>

        <section className="market-section" id="marketplace">
          <div className="section-heading"><div><div className="eyebrow muted">SAMPLE MARKETPLACE</div><h2>Fresh from the farm</h2><p>Browse sample listings from farmers around Telangana.</p></div></div>
          <div className="search-panel">
            <div className="search-input"><Search size={18} /><input aria-label="Search produce" placeholder="Search crops, fruits, vegetables..." value={query} onChange={(event) => setQuery(event.target.value)} /></div>
            <div className="search-input location-input"><MapPin size={18} /><input aria-label="Filter by location" placeholder="Location (e.g. Hyderabad)" value={location} onChange={(event) => setLocation(event.target.value)} /></div>
            <button className="button button-dark search-button" onClick={() => { setQuery(query.trim()); setLocation(location.trim()); }}>Search</button>
          </div>
          {products.length === 0 ? <div className="empty-state"><div className="empty-icon"><Package size={28} /></div><h3>No sample produce found</h3><p>Try another crop or location search.</p></div> : <div className="produce-grid">
            {products.map((product, index) => <article className="produce-card" key={product.id}>
              <div className={`produce-visual visual-${index % 6}`}><span className="category-tag">{product.category}</span><img className="crop-emoji" src={productImageFor(product.name)} alt={product.name} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallbackProductImage; }} /><span className="fresh-badge"><span /> Available</span></div>
              <div className="produce-info">
                <div className="product-title-row"><h3>{product.name}</h3><strong>{money(product.price)}<small> / {product.unit}</small></strong></div>
                <p className="product-description">{product.description}</p>
                <div className="product-meta"><span><MapPin size={14} />{product.location}</span><span>{product.quantity} {product.unit} left</span></div>
                <div className="farmer-row"><span className="farmer-avatar"><Sprout size={16} /></span><span><b>{product.farmerName}</b><small>Local grower · {product.quality}</small></span></div>
                <div className="buy-row"><label className="qty-field"><span className="sr-only">Quantity</span><input type="number" min="0.1" max={product.quantity} step="0.1" value={quantities[product.id] || '1'} onChange={(event) => setQuantities((current) => ({ ...current, [product.id]: event.target.value }))} /><span>{product.unit}</span></label><button className="button button-dark buy-button" onClick={() => placeOrder(product)}>Place sample order <ArrowRight size={15} /></button></div>
              </div>
            </article>)}
          </div>}
          <div className="market-footnote"><Leaf size={15} /> This is sample data stored in the browser. Orders reset when you refresh.</div>
        </section>
      </> : <section className="workspace">
        <div className="section-heading"><div><div className="eyebrow muted">LOCAL DEMO</div><h2>Your sample orders</h2><p>Orders placed here stay in this browser session.</p></div><button className="button button-outline dark-outline" onClick={() => setView('market')}>Back to marketplace</button></div>
        {orders.length === 0 ? <div className="empty-state"><div className="empty-icon"><ShoppingBasket /></div><h3>No sample orders yet</h3><p>Place an order from the marketplace to see it here.</p><button className="button button-dark" onClick={() => setView('market')}>Explore produce</button></div> : <div className="orders-list">{orders.map((order) => <article className="order-card" key={order.id}>
          <div className="order-icon"><Package /></div><div className="order-main"><div className="order-title"><h3>{order.produceName}</h3><span className={`order-status status-${order.status.toLowerCase()}`}>{order.status}</span></div>
            <p>Order #{order.id} · {order.quantity} {order.unit} · {new Date(order.createdAt).toLocaleDateString('en-IN')}</p><p className="order-person">Sample buyer: {demoUser.name} · Farmer: {order.farmerName}</p></div><div className="order-total"><b>{money(order.totalPrice)}</b></div>
        </article>)}</div>}
      </section>}
    </main>

    <footer className="footer"><div className="footer-inner"><div className="footer-brand"><Sprout size={19} /><b>HarvestLink</b></div><p>Bringing farmers and buyers closer, one harvest at a time.</p><span>© {new Date().getFullYear()} HarvestLink · Local sample demo</span></div></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
