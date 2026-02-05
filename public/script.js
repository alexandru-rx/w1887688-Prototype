

window.UK_LOCATIONS = window.UK_LOCATIONS || [
  'All Of England',
  'London',
  'Manchester',
  'Birmingham',
  'Liverpool',
  'Leeds',
  'Bristol',
  'Nottingham',
  'Brighton',
  'Leicester',
  'Bournemouth'
];

var UK_LOCATIONS = window.UK_LOCATIONS;

window.GENRE_DATA = window.GENRE_DATA || {
  'All Genres': ['All Genres'],
  'Pop': ['All Pop', 'Pop Rock', 'Synth Pop', 'Teen Pop'],
  'Rock/Indie': ['All Rock/Indie', 'Alternative', 'Punk', 'Classic Rock', 'Britpop'],
  'Hip Hop/R&B': ['All Hip Hop/R&B', 'Trap', 'Grime', 'Pop Rap'],
  'Electronic/Dance': ['All Electronic/Dance', 'House', 'Techno', 'Drum & Bass', 'Trance', 'Garage'],
  'Classical': ['All Classical', 'Opera', 'Chamber Music'],
  'Jazz/Blues': ['All Jazz/Blues'],
  'Other Genres': ['All Other Genres', 'A Cappella', 'Folk', 'World Music']
};

var GENRE_DATA = window.GENRE_DATA;

window.EVENT_DATA = window.EVENT_DATA || [
  {
    id: 1,
    artist: 'The Killers',
    title: 'Imploding The Mirage Tour',
    venue: 'O2 Arena',
    location: 'London',
    date: new Date(2026, 11, 15),
    mainGenre: 'Rock/Indie',
    subGenre: 'Alternative',
    price: 75.00,
    image: 'https://picsum.photos/350/180?random=1',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 75.00 },
      { id: 'vip', name: 'VIP', price: 120.00 }
    ]
  },
  {
    id: 2,
    artist: 'Dua Lipa',
    title: 'Future Nostalgia',
    venue: 'AO Arena',
    location: 'Manchester',
    date: new Date(2026, 0, 2),
    mainGenre: 'Pop',
    subGenre: 'Pop Rock',
    price: 60.00,
    image: 'https://picsum.photos/350/180?random=2',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 60.00 },
      { id: 'gold', name: 'Gold Circle', price: 95.00 }
    ]
  },
  {
    id: 3,
    artist: 'Calvin Harris',
    title: 'Summer House Party',
    venue: 'Creamfields',
    location: 'Liverpool',
    date: new Date(2026, 5, 25),
    mainGenre: 'Electronic/Dance',
    subGenre: 'House',
    price: 85.00,
    image: 'https://picsum.photos/350/180?random=3',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 85.00 },
      { id: 'vip', name: 'VIP', price: 140.00 }
    ]
  },
  {
    id: 4,
    artist: 'Stormzy',
    title: 'Heavy Is The Head',
    venue: 'Utilita Arena',
    location: 'Birmingham',
    date: new Date(2026, 2, 10),
    mainGenre: 'Hip Hop/R&B',
    subGenre: 'Trap',
    price: 55.00,
    image: 'https://picsum.photos/350/180?random=4',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 55.00 },
      { id: 'seated', name: 'Seated', price: 70.00 },
      { id: 'vip', name: 'VIP', price: 105.00 }
    ]
  },
  {
    id: 5,
    artist: 'Ed Sheeran',
    title: '÷ Tour',
    venue: 'Wembley Stadium',
    location: 'London',
    date: new Date(2026, 10, 5),
    mainGenre: 'Pop',
    subGenre: 'Pop Rock',
    price: 90.00,
    image: 'https://picsum.photos/350/180?random=5',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 90.00 },
      { id: 'seated', name: 'Seated', price: 110.00 },
      { id: 'vip', name: 'VIP', price: 170.00 }
    ]
  },
  {
    id: 6,
    artist: 'Coldplay',
    title: 'Music of the Spheres',
    venue: 'Emirates Old Trafford',
    location: 'Manchester',
    date: new Date(2026, 7, 20),
    mainGenre: 'Pop',
    subGenre: 'Pop Rock',
    price: 80.00,
    image: 'https://picsum.photos/350/180?random=6',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 80.00 },
      { id: 'seated', name: 'Seated', price: 105.00 },
      { id: 'vip', name: 'VIP', price: 155.00 }
    ]
  },
  {
    id: 7,
    artist: 'Taylor Swift',
    title: 'The Eras Tour',
    venue: 'Murrayfield Stadium',
    location: 'Edinburgh',
    date: new Date(2026, 6, 7),
    mainGenre: 'Pop',
    subGenre: 'Teen Pop',
    price: 100.00,
    image: 'https://picsum.photos/350/180?random=7',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 100.00 },
      { id: 'gold', name: 'Gold Circle', price: 160.00 },
      { id: 'vip', name: 'VIP', price: 250.00 }
    ]
  },
  {
    id: 8,
    artist: 'Skrillex',
    title: 'Rumble Tour',
    venue: 'First Direct Arena',
    location: 'Leeds',
    date: new Date(2026, 7, 14),
    mainGenre: 'Electronic/Dance',
    subGenre: 'Dubstep',
    price: 65.00,
    image: 'https://picsum.photos/350/180?random=8',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 65.00 },
      { id: 'seated', name: 'Seated', price: 80.00 },
      { id: 'vip', name: 'VIP', price: 115.00 }
    ]
  },
  {
    id: 9,
    artist: 'Adele',
    title: 'Weekends with Adele',
    venue: 'SSE Hydro',
    location: 'Glasgow',
    date: new Date(2026, 8, 1),
    mainGenre: 'Pop',
    subGenre: 'Pop Rock',
    price: 120.00,
    image: 'https://picsum.photos/350/180?random=9',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 120.00 },
      { id: 'seated', name: 'Seated', price: 150.00 },
      { id: 'vip', name: 'VIP', price: 230.00 }
    ]
  },
  {
    id: 10,
    artist: 'Foo Fighters',
    title: 'Everything or Nothing',
    venue: 'Ashton Gate',
    location: 'Bristol',
    date: new Date(2026, 1, 28),
    mainGenre: 'Rock/Indie',
    subGenre: 'Alternative',
    price: 70.00,
    image: 'https://picsum.photos/350/180?random=10',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 70.00 },
      { id: 'seated', name: 'Seated', price: 90.00 },
      { id: 'vip', name: 'VIP', price: 135.00 }
    ]
  },
  {
    id: 11,
    artist: 'Dua Lipa',
    title: 'Studio 2054',
    venue: 'O2 Academy',
    location: 'Bournemouth',
    date: new Date(2026, 3, 15),
    mainGenre: 'Pop',
    subGenre: 'Synth Pop',
    price: 50.00,
    image: 'https://picsum.photos/350/180?random=11',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 50.00 },
      { id: 'balcony', name: 'Balcony', price: 65.00 },
      { id: 'vip', name: 'VIP', price: 95.00 }
    ]
  },
  {
    id: 12,
    artist: 'Above & Beyond',
    title: 'Group Therapy',
    venue: 'Rock City',
    location: 'Nottingham',
    date: new Date(2026, 4, 1),
    mainGenre: 'Electronic/Dance',
    subGenre: 'Trance',
    price: 45.00,
    image: 'https://picsum.photos/350/180?random=12',
    ticketTypes: [
      { id: 'standard', name: 'Standard', price: 45.00 },
      { id: 'early', name: 'Early Entry', price: 60.00 },
      { id: 'vip', name: 'VIP', price: 90.00 }
    ]
  }
];

var EVENT_DATA = window.EVENT_DATA;

var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);
var BOOKING_FEE_PERCENTAGE = 0.05;

window.CURRENT_FILTERS = window.CURRENT_FILTERS || {
  location: "All Of England",
  date: new Date(TODAY),
  genre: "All Genres",
  subGenre: "All Genres",
  searchQuery: ""
};
var CURRENT_FILTERS = window.CURRENT_FILTERS;

window.CURRENT_CALENDAR_DATE = window.CURRENT_CALENDAR_DATE || new Date(TODAY);
var CURRENT_CALENDAR_DATE = window.CURRENT_CALENDAR_DATE;

window.USER_STATE = window.USER_STATE || {
  isLoggedIn: false,
  userEmail: null,
  userRole: "guest",
  userName: null
};
var USER_STATE = window.USER_STATE;

var USER_STORAGE_KEY = "ticketwizard_user";
var ORDERS_STORAGE_KEY = "ticketwizard_orders";
var LAST_ORDER_ID_KEY = "ticketwizard_last_order_id";
var SELECTED_EVENT_KEY = "ticketwizard_selected_event";
var SELECTED_TICKET_KEY = "ticketwizard_selected_ticket";
var GUEST_STORAGE_KEY = "ticketwizard_guest";

window.API_BASE = window.API_BASE || "";
var API_BASE = window.API_BASE;

async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options, // allow method/body/etc
    credentials: "include", // ALWAYS keep session cookie
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || data.error || `Request failed (${res.status})`);
  return data;
}

async function fetchMyOrders() {
  const data = await apiFetch('/api/orders/my', { method: 'GET' });
  return data.orders || [];
}

async function fetchCurrentUser() {
  try {
    const data = await apiFetch('/api/auth/me', { method: 'GET' });

    if (data?.user) {
      USER_STATE.isLoggedIn = true;
      USER_STATE.userEmail = data.user.email;
      USER_STATE.userRole = data.user.role || 'customer';
    } else {
      USER_STATE.isLoggedIn = false;
      USER_STATE.userEmail = null;
      USER_STATE.userRole = 'customer';
    }
  } catch (err) {
    console.error('fetchCurrentUser failed:', err);

    USER_STATE.isLoggedIn = false;
    USER_STATE.userEmail = null;
    USER_STATE.userRole = 'customer';
  }
}

function saveUserToStorage() {
  try {
    const data = {
      isLoggedIn: USER_STATE.isLoggedIn,
      userRole: USER_STATE.userRole,
      userEmail: USER_STATE.userEmail
    };

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save user to storage', err);
  }
}

function clearUserFromStorage() {
  try {
    localStorage.removeItem(USER_STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear user storage', err);
  }
}

function saveGuestToStorage(guest) {
  localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(guest));
}

function getGuestFromStorage() {
  try {
    return JSON.parse(localStorage.getItem(GUEST_STORAGE_KEY) || 'null');
  } catch {
    return null;
  }
}

function clearGuestFromStorage() {
  localStorage.removeItem(GUEST_STORAGE_KEY);
}

function saveSelectedEventToStorage(event) {
  try {
    localStorage.setItem(SELECTED_EVENT_KEY, JSON.stringify(event));
  } catch (err) {
    console.error('Failed to save selected event', err);
  }
}

function getSelectedEventFromStorage() {
  try {
    const raw = localStorage.getItem(SELECTED_EVENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSelectedTicketToStorage(ticket) {
  try {
    localStorage.setItem(SELECTED_TICKET_KEY, JSON.stringify(ticket));
  } catch (err) {
    console.error('Failed to save selected ticket', err);
  }
}

function getSelectedTicketFromStorage() {
  try {
    const raw = localStorage.getItem(SELECTED_TICKET_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function formatPrice(price) {
  const n = Number(price);
  const safe = Number.isFinite(n) ? n : 0;
  return `£${safe.toFixed(2)}`;
}

function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = MONTHS[d.getMonth()];
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
}

function updateHeaderAuthUI() {
  const authStatusEl = document.getElementById('auth-status');
  const loginBtn = document.getElementById('header-login-btn');
  const logoutBtn = document.getElementById('header-logout-btn');

  if (!authStatusEl) return;

  if (USER_STATE.isLoggedIn) {
    const roleLabel = USER_STATE.userRole === 'promoter' ? 'Promoter' : 'Customer';
    const emailPart = USER_STATE.userEmail ? ` (${USER_STATE.userEmail})` : '';

    authStatusEl.textContent = `Logged in as ${roleLabel}${emailPart}`;
    authStatusEl.classList.add('status-logged-in');
    authStatusEl.classList.remove('status-guest');

    loginBtn?.classList.add('hidden');
    logoutBtn?.classList.remove('hidden');
    return;
  }

  let guest = null;

  if (typeof getGuestFromStorage === 'function') {
    guest = getGuestFromStorage();
  } else {
    const raw = localStorage.getItem('ticketwizard_guest');
    guest = raw ? JSON.parse(raw) : null;
  }

  if (guest?.email) {
    authStatusEl.textContent = `Guest: (${guest.email})`;
    authStatusEl.classList.add('status-guest');
    authStatusEl.classList.remove('status-logged-in');

    loginBtn?.classList.remove('hidden');
    logoutBtn?.classList.add('hidden');
    return;
  }

  authStatusEl.textContent = 'Not logged in';
  authStatusEl.classList.remove('status-logged-in', 'status-guest');

  loginBtn?.classList.remove('hidden');
  logoutBtn?.classList.add('hidden');
}

async function logoutUser() {
  try {
    await apiFetch('/api/auth/logout', { method: 'POST' });
  } catch (err) {
    console.warn('Logout request failed (still clearing UI):', err.message);
  }

  USER_STATE.isLoggedIn = false;
  USER_STATE.userRole = 'customer';
  USER_STATE.userEmail = null;
  USER_STATE.fullName = '';
  USER_STATE.phone = '';

  localStorage.removeItem(SELECTED_EVENT_KEY);
  localStorage.removeItem(SELECTED_TICKET_KEY);

  updateHeaderAuthUI();
  switchView?.('events');
}

function setupHeaderProfileMenu() {
  const btn = document.getElementById('header-profile-btn');
  const menu = document.getElementById('profile-menu');
  if (!btn || !menu) return;

  if (btn.dataset.bound === '1') return;
  btn.dataset.bound = '1';

  function isLoggedIn() {
    return USER_STATE.isLoggedIn && !!USER_STATE.userEmail;
  }

  function renderMenu() {
    if (isLoggedIn()) {
      menu.innerHTML = `
        <button class="menu-item" data-action="account">Account details</button>
        <button class="menu-item" data-action="orders">Order history</button>
        <div class="menu-divider"></div>
        <button class="menu-item danger" data-action="logout">Logout</button>
      `;
} else {
  const guest = isGuestActive();

  if (guest?.email) {
    menu.innerHTML = `
      <button class="menu-item" data-action="login">Switch account</button>
      <button class="menu-item danger" data-action="guest-logout">Clear guest</button>
    `;
  } else {
    menu.innerHTML = `
      <button class="menu-item" data-action="login">Login / Register</button>
    `;
  }
}
  }
  renderMenu();

function isGuestActive() {
  try {
    const raw = localStorage.getItem(GUEST_STORAGE_KEY); // 'ticketwizard_guest'
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function clearGuestCheckout() {
  localStorage.removeItem(GUEST_STORAGE_KEY);
  localStorage.removeItem(SELECTED_EVENT_KEY);
  localStorage.removeItem(SELECTED_TICKET_KEY);
}

btn.addEventListener('click', async (e) => {
  e.stopPropagation();

  await fetchCurrentUser();

  renderMenu();
  menu.classList.toggle('hidden');
});

menu.addEventListener('click', (e) => {
  const action = e.target.closest('button')?.dataset.action;
  if (!action) return;

  if (action === 'login') {
    const guest = isGuestActive();

    if (guest?.email) {
      const ok = confirm(
        `You're currently checking out as a guest (${guest.email}).\n\nSwitch account and remove guest details?`
      );
      if (!ok) return; // keep menu open

      clearGuestCheckout();
      updateHeaderAuthUI(); // refresh header immediately
    }

    menu.classList.add('hidden');
    window.location.href = 'LoginSystem.html';
    return;
  }

  if (action === 'guest-logout') {
    clearGuestCheckout();
    updateHeaderAuthUI();
    alert('Guest checkout cleared.');
    menu.classList.add('hidden');
    window.location.href = 'TicketingPlatform.html';
    return;
  }

  menu.classList.add('hidden');

  if (action === 'account') {
    window.location.href = 'UserProfile.html#account';
    return;
  }

  if (action === 'orders') {
    window.location.href = 'UserProfile.html#orders';
    return;
  }

  if (action === 'logout') {
    logoutUser();
    window.location.href = 'TicketingPlatform.html';
    return;
  }
});

  document.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
}

function setLastOrderId(orderId) {
  try { localStorage.setItem(LAST_ORDER_ID_KEY, String(orderId)); } catch {}
}
function getLastOrderId() {
  try { return localStorage.getItem(LAST_ORDER_ID_KEY); } catch { return null; }
}

function renderEvents(events) {
  const eventsListEl = document.getElementById('events-list');
  if (!eventsListEl) return;

  eventsListEl.innerHTML = '';

  if (!events || events.length === 0) {
    eventsListEl.innerHTML = `
      <p style="color: var(--text-muted); padding: 2rem;">
        No events match your current filters. Try adjusting your location, date, or genre.
      </p>
    `;
    return;
  }

  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';

    const bookingFee = event.price * BOOKING_FEE_PERCENTAGE;
    const totalWithFee = event.price + bookingFee;

    const genreDisplay = event.subGenre && !event.subGenre.startsWith('All ')
      ? event.subGenre
      : event.mainGenre;

    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}" class="card-image">
      <div class="card-content">
        <div class="card-date">${formatDate(event.date)} - ${genreDisplay}</div>
        <h3 class="card-title">${event.title}</h3>
        <p class="card-artist">By ${event.artist}</p>

        <div class="card-details">
          <div class="card-venue"><i data-lucide="building"></i>${event.venue}</div>
          <div class="card-location"><i data-lucide="map-pin"></i>${event.location}</div>
        </div>

        <div class="card-price-container">
          <div class="card-price-row">
            <span class="price-label">Ticket Price:</span>
            <span class="price-value">${formatPrice(event.price)}</span>
          </div>
          <div class="card-price-row booking-fee-detail">
            <span class="price-label"> Booking Fee:</span>
            <span class="price-value">${formatPrice(bookingFee)}</span>
          </div>
          <div class="price-separator"></div>
          <div class="card-price-row total-price">
            <span class="price-label">Total Price:</span>
            <span class="price-value">${formatPrice(totalWithFee)}</span>
          </div>
        </div>

        <button class="purchase-btn" onclick="openTicketTypeModal(${event.id})">
          <i data-lucide="ticket"></i> Get Tickets
        </button>
      </div>
    `;

    eventsListEl.appendChild(card);
  });

  lucide?.createIcons?.();
}

function getEventById(id) {
  return EVENT_DATA.find(e => String(e.id) === String(id));
}

function openTicketTypeModal(eventId) {
  const overlay = document.getElementById('ticket-type-overlay');
  const modal = document.getElementById('ticket-type-modal');
  const optionsHost = document.getElementById('ticket-type-options');
  const info = document.getElementById('ticket-type-event-info');
  const qtyEl = document.getElementById('ticket-qty');

  if (!overlay || !modal || !optionsHost || !info || !qtyEl) return;

  const event = getEventById(eventId);
  if (!event) return;

  saveSelectedEventToStorage(event);

  let qty = 1;
  qtyEl.textContent = String(qty);

  info.innerHTML = `
    <strong>${event.title}</strong><br/>
    ${formatDate(event.date)} • ${event.venue} • ${event.location}
  `;

  const ticketTypes = Array.isArray(event.ticketTypes) && event.ticketTypes.length
    ? event.ticketTypes
    : [{ id: 'standard', name: 'Standard', price: event.price }];

  let selectedType = ticketTypes[0];

  function renderOptions() {
    optionsHost.innerHTML = ticketTypes.map(t => `
      <div class="ticket-type-option ${t.id === selectedType.id ? 'selected' : ''}" data-id="${t.id}">
        <div class="ticket-type-left">
          <div class="ticket-type-name">${t.name}</div>
          <div class="ticket-type-desc">Choose ${t.name.toLowerCase()} access</div>
        </div>
        <div class="ticket-type-price">${formatPrice(t.price)}</div>
      </div>
    `).join('');
  }

  renderOptions();

  optionsHost.onclick = (e) => {
    const opt = e.target.closest('.ticket-type-option');
    if (!opt) return;

    const id = opt.dataset.id;
    const found = ticketTypes.find(t => t.id === id);
    if (!found) return;

    selectedType = found;
    renderOptions();
  };

  document.getElementById('qty-minus').onclick = () => {
    qty = Math.max(1, qty - 1);
    qtyEl.textContent = String(qty);
  };

  document.getElementById('qty-plus').onclick = () => {
    qty = Math.min(10, qty + 1);
    qtyEl.textContent = String(qty);
  };

document.getElementById('confirm-ticket-btn').onclick = async () => {
  saveSelectedTicketToStorage({
    eventId: event.id,
    ticketTypeId: selectedType.id,
    ticketType: selectedType.name,
    qty,
    unitPrice: Number(selectedType.price) || 0
  });

  const guest = getGuestFromStorage?.();
  await fetchCurrentUser(); // keeps USER_STATE accurate

  const alreadyAuthenticated = USER_STATE?.isLoggedIn && !!USER_STATE.userEmail;
  const alreadyGuest = !!(guest && guest.email);

  if (alreadyAuthenticated || alreadyGuest) {
    window.location.href = 'Payment.html';
  } else {
    window.location.href = 'LoginSystem.html?next=payment';
  }
};

  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  lucide?.createIcons?.();
}

function closeTicketTypeModal() {
  const overlay = document.getElementById('ticket-type-overlay');
  const modal = document.getElementById('ticket-type-modal');
  if (!overlay || !modal) return;
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
}

function updateFilterDisplay() {
  const locationVal = document.getElementById('location-value');
  const datesVal = document.getElementById('dates-value');
  const genreVal = document.getElementById('genre-value');

  if (locationVal) locationVal.textContent = CURRENT_FILTERS.location;

  if (datesVal) {
    const filterCopy = new Date(CURRENT_FILTERS.date);
    filterCopy.setHours(0, 0, 0, 0);

    const todayCopy = new Date(TODAY);
    todayCopy.setHours(0, 0, 0, 0);

    datesVal.textContent = (filterCopy.getTime() === todayCopy.getTime())
      ? 'All Dates'
      : formatDate(CURRENT_FILTERS.date);
  }

  if (genreVal) {
    const label = (CURRENT_FILTERS.subGenre !== CURRENT_FILTERS.genre)
      ? CURRENT_FILTERS.subGenre
      : CURRENT_FILTERS.genre;

    genreVal.textContent = label;
  }
}

function filterEvents() {
  const query = CURRENT_FILTERS.searchQuery.toLowerCase();

  const filtered = EVENT_DATA.filter(event => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);

    const filterDate = new Date(CURRENT_FILTERS.date);
    filterDate.setHours(0, 0, 0, 0);

    const isFutureEvent = eventDate >= TODAY;

    const locationMatch =
      CURRENT_FILTERS.location === 'All Of England' ||
      event.location === CURRENT_FILTERS.location;

    let dateMatch = true;

    const filterIsAllDates = (() => {
      const f = new Date(CURRENT_FILTERS.date);
      f.setHours(0, 0, 0, 0);

      const t = new Date(TODAY);
      t.setHours(0, 0, 0, 0);

      return f.getTime() === t.getTime();
    })();

    if (filterIsAllDates) {
      dateMatch = isFutureEvent;
    } else {
      dateMatch = eventDate.getTime() === filterDate.getTime();
    }

    let genreMatch = false;
    if (CURRENT_FILTERS.genre === 'All Genres') {
      genreMatch = true;
    } else if (
      CURRENT_FILTERS.subGenre === CURRENT_FILTERS.genre ||
      CURRENT_FILTERS.subGenre.startsWith('All ')
    ) {
      genreMatch = event.mainGenre === CURRENT_FILTERS.genre;
    } else {
      genreMatch = event.subGenre === CURRENT_FILTERS.subGenre;
    }

    const searchMatch =
      !query ||
      event.artist.toLowerCase().includes(query) ||
      event.title.toLowerCase().includes(query) ||
      event.venue.toLowerCase().includes(query);

    return locationMatch && dateMatch && genreMatch && searchMatch;
  });

  renderEvents(filtered);
  updateFilterDisplay();
}

function renderProfileCard() {
  const card = document.getElementById('profile-card');
  if (!card) return;

  const email = USER_STATE.userEmail || 'Unknown';

  const name = USER_STATE.fullName || USER_STATE.name || 'Not provided';
  const phone = USER_STATE.phone || 'Not provided';

  card.innerHTML = `
    <div class="summary-row">
      <span><strong>Email</strong></span>
      <span>: ${email}</span>
    </div>

    <div class="summary-row muted">
      <span>Full name</span>
      <span>: ${name}</span>
    </div>

    <div class="summary-row muted">
      <span>Phone</span>
      <span>: ${phone}</span>
    </div>
  `;
}

async function renderOrdersOnProfile() {
  const host = document.getElementById('orders-list');
  if (!host) return;

  host.innerHTML = `<p class="text-muted-center">Loading your orders...</p>`;

  await fetchCurrentUser();

  if (!USER_STATE.isLoggedIn) {
    host.innerHTML = `
      <p class="text-muted-center">
        Please <a href="LoginSystem.html">log in</a> to view your orders.
      </p>
    `;
    return;
  }

  try {
    const orders = await fetchMyOrders();

    if (!Array.isArray(orders) || orders.length === 0) {
      host.innerHTML = `<p class="text-muted-center">No orders yet.</p>`;
      return;
    }

    host.innerHTML = orders.map(order => {
      const created = order.createdAt ? new Date(order.createdAt) : null;
      const title = order.eventTitle || 'Event';
      const venue = order.venue || '';
      const location = order.location || '';
      const qty = Number(order.qty || 0);
      const ticketType = order.ticketType || '';
      const total = Number(order.total || 0);

      return `
        <div class="summary-card" style="margin-bottom: 1rem;">
          <div class="summary-row">
            <span><strong>${title}</strong></span>
            <span>${created ? created.toLocaleString() : ''}</span>
          </div>

          <div class="summary-row muted">
            <span>${venue} • ${location}</span>
            <span></span>
          </div>

          <div class="summary-divider"></div>

          <div class="summary-row">
            <span>${ticketType} × ${qty}</span>
            <span><strong>£${total.toFixed(2)}</strong></span>
          </div>
        </div>
      `;
    }).join('');
  } catch (err) {
    console.error(err);
    host.innerHTML = `<p class="text-muted-center">Failed to load orders: ${err.message}</p>`;
  }
}

function renderLocationDropdown() {
  const dropdown = document.getElementById('location-dropdown-menu');
  if (!dropdown) return;

  dropdown.innerHTML = '';

  UK_LOCATIONS.forEach(loc => {
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.textContent = loc;

    if (loc === CURRENT_FILTERS.location) item.classList.add('selected');

    item.addEventListener('click', () => {
      CURRENT_FILTERS.location = loc;
      filterEvents();

      dropdown.classList.add('hidden');
      document.getElementById('location-filter-segment')?.setAttribute('aria-expanded', 'false');
      overlayEl.classList.add('hidden');
    });

    dropdown.appendChild(item);
  });
}

function toggleLocationDropdown() {
  const dropdown = document.getElementById('location-dropdown-menu');
  const segment = document.getElementById('location-filter-segment');
  if (!dropdown || !segment) return;

  const isHidden = dropdown.classList.contains('hidden');

  document.querySelectorAll('.location-dropdown').forEach(el => el.classList.add('hidden'));

  if (isHidden) {
    dropdown.classList.remove('hidden');
    segment.setAttribute('aria-expanded', 'true');
    overlayEl.classList.remove('hidden');

    const rect = segment.getBoundingClientRect();
    dropdown.style.width = `${rect.width}px`;
  } else {
    dropdown.classList.add('hidden');
    segment.setAttribute('aria-expanded', 'false');
    overlayEl.classList.add('hidden');
  }
}

const overlayEl = document.createElement('div');
overlayEl.id = 'overlay';
overlayEl.className = 'overlay hidden';

let datePickerModal = null;
let datesGridEl = null;
let monthSelect = null;
let yearSelect = null;

function setupDatePickerRefs() {
  datePickerModal = document.getElementById('date-picker-modal');
  datesGridEl = document.getElementById('dates-grid');
  monthSelect = document.getElementById('month-select');
  yearSelect = document.getElementById('year-select');
}

function changeMonth(direction) {
  const newDate = new Date(CURRENT_CALENDAR_DATE);
  newDate.setMonth(newDate.getMonth() + direction);
  CURRENT_CALENDAR_DATE = newDate;
  renderCalendar();
}

function renderCalendar() {
  if (!datesGridEl || !monthSelect || !yearSelect) return;

  datesGridEl.innerHTML = '';

  const year = CURRENT_CALENDAR_DATE.getFullYear();
  const month = CURRENT_CALENDAR_DATE.getMonth();

  monthSelect.value = month;
  yearSelect.value = year;

  const firstOfMonth = new Date(year, month, 1);
  let startDay = firstOfMonth.getDay();
  startDay = (startDay === 0) ? 6 : startDay - 1; // Monday index 0

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < startDay; i++) {
    datesGridEl.appendChild(document.createElement('div'));
  }

  const todayCopy = new Date(TODAY);
  todayCopy.setHours(0, 0, 0, 0);

  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(year, month, d);
    dateObj.setHours(0, 0, 0, 0);

    const dayEl = document.createElement('div');
    dayEl.className = 'date-day';
    dayEl.textContent = d;

    if (dateObj < todayCopy) {
      dayEl.classList.add('inactive');
    } else {
      dayEl.classList.add('available');

      dayEl.addEventListener('click', () => {
        document.querySelectorAll('.date-day').forEach(el => el.classList.remove('selected'));
        dayEl.classList.add('selected');

        CURRENT_CALENDAR_DATE = new Date(dateObj);
        CURRENT_FILTERS.date = new Date(dateObj);

        filterEvents();

        closeDatePickerModal();
      });
    }

    const filterCopy = new Date(CURRENT_FILTERS.date);
    filterCopy.setHours(0, 0, 0, 0);
    if (filterCopy.getTime() === dateObj.getTime()) {
      dayEl.classList.add('selected');
    }

    datesGridEl.appendChild(dayEl);
  }
}

function openDatePickerModal() {
  if (!datePickerModal) setupDatePickerRefs();
  if (!datePickerModal) return;

  datePickerModal.classList.remove('hidden');
  overlayEl.classList.remove('hidden');

  CURRENT_CALENDAR_DATE = new Date(CURRENT_FILTERS.date);

  renderCalendar();
}

function closeDatePickerModal() {
  if (!datePickerModal) return;
  datePickerModal.classList.add('hidden');
  overlayEl.classList.add('hidden');
}

function confirmSelectedDate() {
  CURRENT_FILTERS.date = new Date(CURRENT_CALENDAR_DATE);
  filterEvents();
  closeDatePickerModal();
}

function resetDateFilter() {
  CURRENT_FILTERS.date = new Date(TODAY);
  CURRENT_CALENDAR_DATE = new Date(TODAY);
  filterEvents();
  closeDatePickerModal();
}

let genreModal = null;
let mainGenreListEl = null;
let subGenreListEl = null;

function setupGenreModalRefs() {
  genreModal = document.getElementById('genre-modal');
  mainGenreListEl = document.getElementById('main-genre-list');
  subGenreListEl = document.getElementById('sub-genre-list');
}

function selectMainGenre(mainGenre) {
  if (!mainGenreListEl || !subGenreListEl) return;

  document.querySelectorAll('.main-genre-item').forEach(el => {
    el.classList.toggle('active', el.dataset.genre === mainGenre);
  });

  subGenreListEl.innerHTML = '';
  const subGenres = GENRE_DATA[mainGenre] || [];

  subGenres.forEach(sub => {
    const item = document.createElement('div');
    item.className = 'genre-item';
    item.textContent = sub;
    item.dataset.main = mainGenre;
    item.dataset.sub = sub;

    if (sub === CURRENT_FILTERS.subGenre) item.classList.add('selected');

    item.addEventListener('click', () => {
      CURRENT_FILTERS.genre = mainGenre;
      CURRENT_FILTERS.subGenre = sub;
      filterEvents();
      closeGenreModal();
    });

    subGenreListEl.appendChild(item);
  });
}

function renderGenreModal() {
  if (!genreModal) setupGenreModalRefs();
  if (!mainGenreListEl) return;

  mainGenreListEl.innerHTML = '';
  const mainGenres = Object.keys(GENRE_DATA);

  mainGenres.forEach(main => {
    const div = document.createElement('div');
    div.className = 'main-genre-item';
    div.dataset.genre = main;

    const isActive =
      CURRENT_FILTERS.genre === main ||
      GENRE_DATA[main].includes(CURRENT_FILTERS.subGenre);

    if (isActive) div.classList.add('active');

    div.innerHTML = `
      <span>${main}</span>
      ${GENRE_DATA[main].length > 1 ? '<i data-lucide="chevron-right"></i>' : ''}
    `;

    div.addEventListener('click', () => selectMainGenre(main));
    mainGenreListEl.appendChild(div);
  });

  selectMainGenre(CURRENT_FILTERS.genre);

  lucide?.createIcons?.();
}

function openGenreModal() {
  if (!genreModal) setupGenreModalRefs();
  if (!genreModal) return;

  renderGenreModal();
  genreModal.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
}

function closeGenreModal() {
  if (!genreModal) return;
  genreModal.classList.add('hidden');
  overlayEl.classList.add('hidden');
}

function handleSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;

  CURRENT_FILTERS.searchQuery = input.value || '';
  filterEvents();
}

function switchView(viewName) {
  const eventsView = document.getElementById('events-view');
  const dashView = document.getElementById('dashboard-view');
  const navEvents = document.getElementById('nav-events');
  const navDash = document.getElementById('nav-dashboard');

  if (!eventsView || !dashView) return;

  if (viewName === 'dashboard') {
    eventsView.classList.add('hidden');
    dashView.classList.remove('hidden');
    navEvents?.classList.remove('active');
    navDash?.classList.add('active');
    renderDashboard();
  } else {
    eventsView.classList.remove('hidden');
    dashView.classList.add('hidden');
    navEvents?.classList.add('active');
    navDash?.classList.remove('active');
  }
}

function renderDashboard(filter = 'all') {
  const dash = document.getElementById('dashboard-view');
  if (!dash) return;

  updateHeaderAuthUI();

  if (!USER_STATE.isLoggedIn || USER_STATE.userRole !== 'promoter') {
    const list = document.getElementById('promoter-events-list');
    if (list) {
      list.innerHTML = `
        <p class="text-muted-center">
  You must be logged in as a <strong>Promoter</strong> to access this dashboard.
        </p>
      `;
    }

    document.getElementById('metric-total-sales') && (document.getElementById('metric-total-sales').textContent = '£0.00');
    document.getElementById('metric-upcoming-events') && (document.getElementById('metric-upcoming-events').textContent = '0');
    document.getElementById('metric-total-attendees') && (document.getElementById('metric-total-attendees').textContent = '0');

    return;
  }

  const orders = getOrdersFromStorage();

  const totalRevenue = orders.reduce((sum, o) => sum + Number(o.total || 0), 0);
  const totalTicketsSold = orders.reduce((sum, o) => sum + Number(o.qty || o.quantity || 0), 0);

  const totalSalesEl = document.getElementById('metric-total-sales');
  const upcomingEl = document.getElementById('metric-upcoming-events');
  const ticketsSoldEl = document.getElementById('metric-total-attendees');

  if (totalSalesEl) totalSalesEl.textContent = formatPrice(totalRevenue);
  if (ticketsSoldEl) ticketsSoldEl.textContent = String(totalTicketsSold);

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const upcomingCount = EVENT_DATA.filter(e => {
    const d = new Date(e.date);
    d.setHours(0, 0, 0, 0);
    return d >= now;
  }).length;

  if (upcomingEl) upcomingEl.textContent = String(upcomingCount);

  const list = document.getElementById('promoter-events-list');
  if (!list) return;

  const soldForEvent = (eventId) =>
    orders
      .filter(o => String(o.eventId) === String(eventId))
      .reduce((sum, o) => sum + Number(o.qty || o.quantity || 0), 0);

  const revenueForEvent = (eventId) =>
    orders
      .filter(o => String(o.eventId) === String(eventId))
      .reduce((sum, o) => sum + Number(o.total || 0), 0);

  const eventsToShow = EVENT_DATA.filter(e => {
    const d = new Date(e.date);
    d.setHours(0, 0, 0, 0);

    if (filter === 'upcoming') return d >= now;
    if (filter === 'past') return d < now;
    return true;
  });

  if (!eventsToShow.length) {
    list.innerHTML = `<p class="text-muted-center">No events to show.</p>`;
    return;
  }

  list.innerHTML = eventsToShow.map(e => {
    const sold = soldForEvent(e.id);
    const rev = revenueForEvent(e.id);

    return `
      <div class="dash-event-card">
        <div class="dash-event-top">
          <div class="dash-event-title">${e.title}</div>
          <div class="dash-event-price">${formatPrice(e.price)}</div>
        </div>

        <div class="dash-event-meta">
          ${formatDate(e.date)} • ${e.venue} • ${e.location}
        </div>

        <div class="dash-event-stats">
          <div class="dash-mini">
            <span class="dash-mini-label">Tickets Sold</span>
            <span class="dash-mini-value">${sold}</span>
          </div>
          <div class="dash-mini">
            <span class="dash-mini-label">Revenue</span>
            <span class="dash-mini-value">${formatPrice(rev)}</span>
          </div>
        </div>

        <div class="dash-event-actions">
          <button class="secondary-btn" type="button" onclick="openEventModal('edit', ${e.id})">Edit</button>
          <button class="secondary-btn" type="button" onclick="deleteEvent(${e.id})">Delete</button>
        </div>
      </div>
    `;
  }).join('');

  lucide?.createIcons?.();
}

function setupDashboardFilters() {
  const buttons = document.querySelectorAll('.dash-filter');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderDashboard(btn.dataset.filter || 'all');
    });
  });
}

function openEventModal(modeOrId) {
  const modal = document.getElementById('event-management-modal');
  const titleEl = document.getElementById('event-modal-title');
  const form = document.getElementById('event-form');
  if (!modal || !titleEl || !form) return;

  const idEl = document.getElementById('event-id');
  const artistEl = document.getElementById('event-artist');
  const eventTitleEl = document.getElementById('event-title');
  const venueEl = document.getElementById('event-venue');
  const locationEl = document.getElementById('event-location');
  const mainGenreEl = document.getElementById('event-genre-main');
  const subGenreEl = document.getElementById('event-genre-sub');
  const dateEl = document.getElementById('event-date');
  const timeEl = document.getElementById('event-time');
  const priceEl = document.getElementById('event-price');
  const capacityEl = document.getElementById('event-capacity');
  const descEl = document.getElementById('event-description');

  if (!idEl || !artistEl || !eventTitleEl || !venueEl || !locationEl || !mainGenreEl ||
      !subGenreEl || !dateEl || !timeEl || !priceEl || !capacityEl || !descEl) return;

  function resetForm() {
    idEl.value = '';
    artistEl.value = '';
    eventTitleEl.value = '';
    venueEl.value = '';
    if (locationEl.tagName === 'SELECT') locationEl.value = locationEl.value || '';
    if (mainGenreEl.tagName === 'SELECT') mainGenreEl.value = mainGenreEl.value || '';
    if (subGenreEl.tagName === 'SELECT') subGenreEl.value = subGenreEl.value || '';

    dateEl.value = '';
    timeEl.value = '';
    priceEl.value = '';
    capacityEl.value = '';
    descEl.value = '';
  }

  if (modeOrId === 'new') {
    titleEl.textContent = 'Create New Event';
    resetForm();
    modal.classList.remove('hidden');
    lucide?.createIcons?.();
    return;
  }

  const ev = getEventById(modeOrId);
  if (!ev) return;

  titleEl.textContent = 'Edit Event';

  idEl.value = String(ev.id ?? '');
  artistEl.value = ev.artist ?? '';
  eventTitleEl.value = ev.title ?? '';
  venueEl.value = ev.venue ?? '';
  locationEl.value = ev.location ?? '';

  mainGenreEl.value = ev.mainGenre ?? '';
  if (typeof populateSubGenresForModal === 'function') {
    populateSubGenresForModal(mainGenreEl.value);
  }
  subGenreEl.value = ev.subGenre ?? '';

  const d = new Date(ev.date);
  if (!Number.isNaN(d.getTime())) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    dateEl.value = `${yyyy}-${mm}-${dd}`;
  } else {
    dateEl.value = '';
  }

  timeEl.value = ev.time ?? ''; // optional
  priceEl.value = (ev.price ?? '') === '' ? '' : String(ev.price);
  capacityEl.value = (ev.capacity ?? '') === '' ? '' : String(ev.capacity);
  descEl.value = ev.description ?? '';

  modal.classList.remove('hidden');
  lucide?.createIcons?.();
}

function closeEventModal() {
  const modal = document.getElementById('event-management-modal');
  if (!modal) return;
  modal.classList.add('hidden');
}

async function handleEventSave(e) {
  e.preventDefault();

  await fetchCurrentUser();

  if (!USER_STATE?.isLoggedIn || USER_STATE.userRole !== 'promoter') {
    alert('You must be logged in as a promoter to do that.');
    return;
  }

  const idEl = document.getElementById('event-id');
  const artistEl = document.getElementById('event-artist');
  const titleEl = document.getElementById('event-title');
  const venueEl = document.getElementById('event-venue');
  const locationEl = document.getElementById('event-location');
  const mainGenreEl = document.getElementById('event-genre-main');
  const subGenreEl = document.getElementById('event-genre-sub');
  const dateEl = document.getElementById('event-date');
  const timeEl = document.getElementById('event-time');
  const priceEl = document.getElementById('event-price');
  const capacityEl = document.getElementById('event-capacity');
  const descEl = document.getElementById('event-description');

  if (
    !idEl || !artistEl || !titleEl || !venueEl || !locationEl || !mainGenreEl ||
    !subGenreEl || !dateEl || !timeEl || !priceEl || !capacityEl || !descEl
  ) return;

  const isEdit = !!idEl.value;

  const dateValue = dateEl.value; // "yyyy-mm-dd"
  const timeValue = timeEl.value; // "hh:mm"

  const dateObj = dateValue ? new Date(`${dateValue}T00:00:00`) : null;

  const newData = {
    id: isEdit ? Number(idEl.value) : generateEventId(),
    artist: artistEl.value.trim(),
    title: titleEl.value.trim(),
    venue: venueEl.value.trim(),
    location: locationEl.value,
    mainGenre: mainGenreEl.value,
    subGenre: subGenreEl.value,
    date: dateObj || new Date(), // fallback to now if missing
    time: timeValue || '',
    price: Number(priceEl.value) || 0,
    capacity: Number(capacityEl.value) || 0,
    description: descEl.value.trim() || '',

    image:
      (isEdit && getEventById(Number(idEl.value))?.image) ||
      `https://picsum.photos/350/180?random=${Math.floor(Math.random() * 9999)}`,

    promoterEmail: USER_STATE.userEmail || null,
  };

  if (isEdit) {
    const idx = EVENT_DATA.findIndex(ev => String(ev.id) === String(newData.id));
    if (idx !== -1) EVENT_DATA[idx] = { ...EVENT_DATA[idx], ...newData };
  } else {
    EVENT_DATA.push(newData);
  }

  closeEventModal();
  renderDashboard();     // refresh dashboard list + metrics
  filterEvents?.();      // optional: refresh customer list too if you're currently showing it
}

function generateEventId() {
  const maxId = EVENT_DATA.reduce((m, ev) => Math.max(m, Number(ev.id) || 0), 0);
  return maxId + 1;
}

function deleteEventById(eventId) {
  const ok = confirm('Are you sure you would like to delete this Event?');
  if (!ok) return;

  const idx = EVENT_DATA.findIndex(ev => String(ev.id) === String(eventId));
  if (idx === -1) return;

  EVENT_DATA.splice(idx, 1);
  renderDashboard();
  filterEvents?.(); // optional refresh of customer list
}

async function renderDashboard() {
  const list = document.getElementById('promoter-events-list');
  if (!list) return;

  updateHeaderAuthUI?.();

  await fetchCurrentUser?.();
  if (!USER_STATE?.isLoggedIn || USER_STATE.userRole !== 'promoter') {
    list.innerHTML = `
      <p class="text-muted-center">
        You must be logged in as a <strong>Promoter</strong> to access this dashboard.
      </p>
    `;
    return;
  }

  const now = new Date();
  const upcoming = EVENT_DATA.filter(ev => new Date(ev.date) >= now);

  let totalSales = 0;
  let ticketsSold = 0;

  try {
    const orders = (typeof getOrdersFromStorage === 'function') ? getOrdersFromStorage() : [];
    orders.forEach(o => {
      totalSales += Number(o.total) || 0;

      const qty = Number(o.qty ?? o.quantity ?? o.ticketQty ?? 0) || 0;
      ticketsSold += qty;
    });
  } catch {}

  const metricSales = document.getElementById('metric-total-sales');
  const metricUpcoming = document.getElementById('metric-upcoming-events');
  const metricAttendees = document.getElementById('metric-total-attendees');

  const salesText = (typeof formatPrice === 'function')
    ? formatPrice(totalSales)
    : `£${totalSales.toFixed(2)}`;

  if (metricSales) metricSales.textContent = salesText;
  if (metricUpcoming) metricUpcoming.textContent = String(upcoming.length);
  if (metricAttendees) metricAttendees.textContent = String(ticketsSold);

  if (!Array.isArray(EVENT_DATA) || EVENT_DATA.length === 0) {
    list.innerHTML = `
      <p class="text-muted-center">
        No events found. Click 'Add New Event' to list your first event.
      </p>
    `;
    return;
  }

  list.innerHTML = EVENT_DATA.map(ev => {
    const d = new Date(ev.date);
    const dateStr = (typeof formatDate === 'function') ? formatDate(d) : d.toDateString();

    const price = Number(ev.price) || 0;
    const priceStr = (typeof formatPrice === 'function') ? formatPrice(price) : `£${price.toFixed(2)}`;

    const cap = (ev.capacity ?? ev.totalCapacity ?? ev.maxCapacity ?? 0);

    const media = ev.image
      ? `<div class="dash-event-media" style="background-image:url('${ev.image}')"></div>`
      : ``;

    return `
      <div class="dash-event-card">
        ${media}

        <div class="dash-event-body">
          <h4 class="dash-event-title">${ev.title || 'Untitled Event'}</h4>

          <div class="dash-event-meta">
            ${dateStr} • ${ev.venue || ''} • ${ev.location || ''}
          </div>

          <div class="dash-event-meta">
            Price: ${priceStr} • Capacity: ${cap}
          </div>

          <div class="dash-event-actions">
            <button type="button" class="dash-btn" onclick="openEventModal(${ev.id})">
              Edit
            </button>

            <button type="button" class="dash-btn danger" onclick="deleteEventById(${ev.id})">
              Delete
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide?.createIcons?.();
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('event-management-modal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeEventModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeEventModal();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-event-btn');
  if (addBtn && addBtn.dataset.bound !== '1') {
    addBtn.dataset.bound = '1';
    addBtn.addEventListener('click', () => openEventModal('new'));
  }
});

function proceedToLoginSystem(eventId) {
  localStorage.setItem('ticketwizard_selected_event', String(eventId));
  window.location.href = 'LoginSystem.html';
}

async function initApp() {
  document.body.appendChild(overlayEl);
  overlayEl.classList.add('hidden');

await fetchCurrentUser();
updateHeaderAuthUI();
setupHeaderProfileMenu();

  document.getElementById('header-login-btn')?.addEventListener('click', () => {
    window.location.href = 'LoginSystem.html';
  });
  document.getElementById('header-logout-btn')?.addEventListener('click', logoutUser);

  setupDatePickerRefs();

  if (monthSelect && yearSelect) {
    MONTHS.forEach((m, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = m;
      monthSelect.appendChild(opt);
    });

    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y <= currentYear + 5; y++) {
      const opt = document.createElement('option');
      opt.value = y;
      opt.textContent = y;
      yearSelect.appendChild(opt);
    }

    monthSelect.addEventListener('change', () => {
      CURRENT_CALENDAR_DATE.setMonth(parseInt(monthSelect.value, 10));
      renderCalendar();
    });

    yearSelect.addEventListener('change', () => {
      CURRENT_CALENDAR_DATE.setFullYear(parseInt(yearSelect.value, 10));
      renderCalendar();
    });
  }

  datePickerModal?.querySelector('.picker-close')?.addEventListener('click', closeDatePickerModal);
  const dateDoneBtn = datePickerModal?.querySelector('.done-button');
  dateDoneBtn?.addEventListener('click', confirmSelectedDate);

  const footer = datePickerModal?.querySelector('.picker-footer');
  if (footer && !footer.querySelector('.reset-button')) {
    const resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'reset-button';
    resetBtn.textContent = 'Reset';
    resetBtn.addEventListener('click', resetDateFilter);
    footer.insertBefore(resetBtn, dateDoneBtn);
  }

  setupGenreModalRefs();
  genreModal?.querySelector('.picker-close')?.addEventListener('click', closeGenreModal);

document.addEventListener('click', (e) => {
  const locSeg = document.getElementById('location-filter-segment');
  const locDrop = document.getElementById('location-dropdown-menu');
  const isLocArea = locSeg && (locSeg.contains(e.target) || locDrop?.contains(e.target));

  const dateSeg = document.getElementById('dates-filter-segment');
  const isDateTrigger = dateSeg && dateSeg.contains(e.target);
  const isDateModal = datePickerModal && datePickerModal.contains(e.target);

  const genreSeg = document.getElementById('genre-filter-segment');
  const isGenreTrigger = genreSeg && genreSeg.contains(e.target);
  const isGenreModal = genreModal && genreModal.contains(e.target);

  if (!isLocArea && locDrop && !locDrop.classList.contains('hidden')) {
    locDrop.classList.add('hidden');
    locSeg?.setAttribute('aria-expanded', 'false');
  }

  if (isDateTrigger || isGenreTrigger) return;

  if (!isDateModal && !isGenreModal) {
    if (datePickerModal && !datePickerModal.classList.contains('hidden')) closeDatePickerModal();
    if (genreModal && !genreModal.classList.contains('hidden')) closeGenreModal();
    overlayEl.classList.add('hidden');
  }
});

  document.getElementById('search-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  document.getElementById('nav-events')?.addEventListener('click', () => switchView('events'));
  document.getElementById('nav-dashboard')?.addEventListener('click', () => switchView('dashboard'));

  renderLocationDropdown();
  filterEvents();
  renderCalendar();

  lucide?.createIcons?.();
}

function handleGuestCheckout(e) {
  e.preventDefault();

  const email = document.getElementById('guest-email')?.value.trim();
  const name  = document.getElementById('guest-name')?.value.trim();
  const phone = document.getElementById('guest-phone')?.value.trim() || '';

  if (!email || !name) {
    alert('Please enter your email and full name.');
    return;
  }

  const guest = { email, name, phone };
  localStorage.setItem('ticketwizard_guest', JSON.stringify(guest));

  const selectedEvent = getSelectedEventFromStorage?.();
  const nextUrl = selectedEvent ? 'Payment.html' : 'TicketingPlatform.html';

  alert('Guest details captured. Redirecting...');
  window.location.href = nextUrl;
}

async function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  try {
    const data = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    USER_STATE.isLoggedIn = true;
    USER_STATE.userEmail = data.user.email;
    USER_STATE.userRole = data.user.role;

    const selectedEvent = getSelectedEventFromStorage();
    const nextUrl = selectedEvent ? 'Payment.html' : 'TicketingPlatform.html';

    alert(`Logged in as ${USER_STATE.userRole}. Redirecting...`);
    window.location.href = nextUrl;

  } catch (err) {
    alert(err.message);
  }
}

function clearGuestCheckout() {
  localStorage.removeItem('ticketwizard_guest');
  localStorage.removeItem('ticketwizard_selected_event');
  localStorage.removeItem('ticketwizard_selected_ticket');
}

async function handleSignUp(e) {
  e.preventDefault();

  const fullName = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  if (!fullName || !email || password.length < 6) {
    alert('Please enter name, email and password (min 6 characters).');
    return;
  }

  try {
    const data = await apiFetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        fullName,
        email,
        password,
        role: 'customer'   // default role from your UI
      })
    });

    USER_STATE.isLoggedIn = true;
    USER_STATE.userEmail = data.user.email;
    USER_STATE.userRole = data.user.role;

    const selectedEvent = getSelectedEventFromStorage();
    const nextUrl = selectedEvent ? 'Payment.html' : 'TicketingPlatform.html';

    alert('Account created! Redirecting...');
    window.location.href = nextUrl;

  } catch (err) {
    alert(err.message);
  }
}

function renderOrderSummaryOnLoginPage() {
  const container = document.getElementById('order-summary');
  const body = document.getElementById('order-summary-body');
  if (!container || !body) return;

  const event = getSelectedEventFromStorage();
  if (!event) {
    container.classList.add('hidden');
    return;
  }

  const bookingFee = event.price * BOOKING_FEE_PERCENTAGE;
  const total = event.price + bookingFee;

  container.classList.remove('hidden');

body.innerHTML = `
  <div class="summary-card">
    <div class="summary-row">
      <span><strong>${event.title}</strong></span>
      <span></span>
    </div>

    <div class="summary-row muted">
      <span>${formatDate(event.date)} • ${event.venue} • ${event.location}</span>
      <span></span>
    </div>

    <div class="summary-divider"></div>

    <div class="summary-row">
      <span>Ticket price</span>
      <span>${formatPrice(event.price)}</span>
    </div>

    <div class="summary-row muted">
      <span>Booking fee</span>
      <span>+ ${formatPrice(bookingFee)}</span>
    </div>

    <div class="summary-divider"></div>

    <div class="summary-row summary-total">
      <span>Total</span>
      <span>${formatPrice(total)}</span>
    </div>
  </div>
`;

  lucide?.createIcons?.();
}

function getLoginNextTarget() {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get('next'); // e.g. "payment"
  } catch {
    return null;
  }
}

async function initLoginSystem() {
  await fetchCurrentUser(); 

const next = getLoginNextTarget();
const selectedEvent = getSelectedEventFromStorage();

const guest = getGuestFromStorage?.();
const hasGuest = !!(guest && guest.email);

if ((USER_STATE.isLoggedIn && USER_STATE.userEmail) || hasGuest) {
  if (next === 'payment' && selectedEvent) {
    window.location.href = 'Payment.html';
  } else {
    window.location.href = 'TicketingPlatform.html';
  }
  return;
}

  renderOrderSummaryOnLoginPage();

  lucide?.createIcons?.();

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.form-section').forEach(sec => sec.classList.add('hidden'));
      document.getElementById(target)?.classList.remove('hidden');
    });
  });

  document.getElementById('guest-form')?.addEventListener('submit', handleGuestCheckout);
  document.getElementById('login-form')?.addEventListener('submit', handleLogin);
  document.getElementById('signup-form')?.addEventListener('submit', handleSignUp);

  document.getElementById('back-to-events-btn')?.addEventListener('click', () => {
    window.location.href = 'TicketingPlatform.html';
  });
}

async function initUserProfilePage() {
  await fetchCurrentUser();

  if (!USER_STATE.isLoggedIn || !USER_STATE.userEmail) {
    alert('Please log in first.');
    window.location.href = 'LoginSystem.html';
    return;
  }

  renderProfileCard();
  await renderOrdersOnProfile();

  const tabButtons = document.querySelectorAll('.profile-tabs .tab-btn');
  const sections = document.querySelectorAll('.profile-section');

  function showSection(id) {
    sections.forEach(sec => sec.classList.add('hidden'));
    document.getElementById(id)?.classList.remove('hidden');

    tabButtons.forEach(b => b.classList.toggle('active', b.dataset.target === id));
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showSection(btn.dataset.target);
      const hash = btn.dataset.target === 'profile-orders' ? '#orders' : '#account';
      history.replaceState(null, '', 'UserProfile.html' + hash);
    });
  });

  if (window.location.hash === '#orders') showSection('profile-orders');
  else showSection('profile-account');

  document.getElementById('logout-btn')?.addEventListener('click', () => {
    logoutUser();
    window.location.href = 'TicketingPlatform.html';
  });

  document.getElementById('back-to-events-btn')?.addEventListener('click', () => {
    window.location.href = 'TicketingPlatform.html';
  });

  lucide?.createIcons?.();
}

function renderPaymentSummary() {
  const body = document.getElementById('payment-summary-body');
  if (!body) return;

  const event = getSelectedEventFromStorage();
  const ticket = getSelectedTicketFromStorage();

  if (!event) {
    body.innerHTML = `<div class="summary-row muted">No event selected.</div>`;
    return;
  }

  if (!ticket || String(ticket.eventId) !== String(event.id)) {
    body.innerHTML = `<div class="summary-row muted">No ticket selection found. Please go back and choose tickets.</div>`;
    return;
  }

  const qty = Number(ticket.qty || 1);
  const unitPrice = Number(ticket.unitPrice || 0);
  const subTotal = unitPrice * qty;

  const bookingFee = subTotal * BOOKING_FEE_PERCENTAGE;
  const total = subTotal + bookingFee;

  body.innerHTML = `
    <div class="summary-card">
      <div class="summary-row">
        <span><strong>${event.title}</strong></span>
        <span></span>
      </div>

      <div class="summary-row muted">
        <span>${formatDate(event.date)} • ${event.venue} • ${event.location}</span>
        <span></span>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-row">
        <span>${ticket.ticketType} × ${qty}</span>
        <span>${formatPrice(subTotal)}</span>
      </div>

      <div class="summary-row muted">
        <span>Booking fee</span>
        <span>+ ${formatPrice(bookingFee)}</span>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-row summary-total">
        <span>Total</span>
        <span>${formatPrice(total)}</span>
      </div>
    </div>
  `;

  lucide?.createIcons?.();
}

async function confirmPayment() {
  try {
    await fetchCurrentUser();

    const event = getSelectedEventFromStorage();
    if (!event) {
      alert('No event selected.');
      return;
    }

    const ticket = getSelectedTicketFromStorage();
    if (!ticket || String(ticket.eventId) !== String(event.id)) {
      alert('No ticket selection found. Please choose tickets first.');
      window.location.href = 'TicketingPlatform.html';
      return;
    }

    const guest = getGuestFromStorage();

if (!USER_STATE.isLoggedIn && !guest) {
  try {
    const me = await apiFetch("/api/auth/me");

    if (me?.user) {
      USER_STATE.isLoggedIn = true;
      USER_STATE.user = me.user;
    } else {
      alert("Please login or continue as guest to proceed to payment.");
      window.location.href = "LoginSystem.html?next=payment";
      return;
    }
  } catch (err) {
    alert("Please login or continue as guest to proceed to payment.");
    window.location.href = "LoginSystem.html?next=payment";
    return;
  }
}

    const qty = Number(ticket.qty || 1);
    const unitPrice = Number(ticket.unitPrice || 0);
    const subTotal = unitPrice * qty;

    const bookingFee = subTotal * BOOKING_FEE_PERCENTAGE;
    const total = subTotal + bookingFee;

    const fallbackEmail = guest?.email || '';
    const fallbackName  = guest?.name || '';      
    const fallbackPhone = guest?.phone || '';

    const payload = {
      guestEmail: fallbackEmail,
      guestName: fallbackName,
      guestPhone: fallbackPhone,

      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      venue: event.venue,
      location: event.location,

      ticketType: ticket.ticketType,
      qty,
      unitPrice,

      subTotal,
      bookingFee,
      total
    };

    const result = await apiFetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    if (!result?.ok) {
      throw new Error(result?.message || 'Order failed');
    }

    alert('Payment successful!');
    window.location.href = 'SuccessPayment.html';
  } catch (err) {
    alert(err.message || 'Payment failed');
  }
}

async function initPaymentPage() {
  await fetchCurrentUser();

  const guest = getGuestFromStorage();
  const event = getSelectedEventFromStorage();

  if (!event) {
    window.location.href = 'TicketingPlatform.html';
    return;
  }

if (!USER_STATE.isLoggedIn && !guest) {
  try {
    const me = await apiFetch("/api/auth/me", { method: "GET" });

    if (me?.user) {
      USER_STATE.isLoggedIn = true;
      USER_STATE.userEmail = me.user.email;
      USER_STATE.userRole = me.user.role || "customer";
    } else {
      alert("Login or guest details required.");
      window.location.href = "LoginSystem.html?next=payment";
      return;
    }
  } catch (err) {
    alert("Login or guest details required.");
    window.location.href = "LoginSystem.html?next=payment";
    return;
  }
}

  renderPaymentSummary();

  document.getElementById('confirm-payment-btn')
    ?.addEventListener('click', confirmPayment);

  document.getElementById('back-to-checkout-btn')
    ?.addEventListener('click', () => {
      window.location.href = 'LoginSystem.html?next=payment';
    });

  lucide?.createIcons?.();
}

async function initSuccessPaymentPage() {
  localStorage.removeItem('ticketwizard_selected_event');
  localStorage.removeItem('ticketwizard_selected_ticket');
  localStorage.removeItem('ticketwizard_guest');

  await fetchCurrentUser();
  updateHeaderAuthUI?.();
  lucide?.createIcons?.();

  document.getElementById('view-events-btn')?.addEventListener('click', () => {
    window.location.href = 'TicketingPlatform.html';
  });

  setTimeout(() => {
    window.location.href = 'TicketingPlatform.html';
  }, 3500);
}

window.openEventModal = openEventModal;
window.closeEventModal = closeEventModal;
window.handleEventSave = handleEventSave;
window.deleteEventById = deleteEventById;

document.addEventListener('DOMContentLoaded', () => {
  const href = window.location.href;

  const isUserProfile = href.includes('UserProfile.html');
  const isSuccessPayment = href.includes('SuccessPayment.html');
  const isPayment = href.includes('Payment.html');
  const isLoginPage = document.body.classList.contains('login-page');

  if (isLoginPage && isUserProfile) {
    initUserProfilePage();
  } else if (isLoginPage && isSuccessPayment) {
    initSuccessPaymentPage();
  } else if (isLoginPage && isPayment) {
    initPaymentPage();
  } else if (isLoginPage) {
    initLoginSystem();
  } else {
    initApp();
  }
});