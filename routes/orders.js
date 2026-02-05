const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const User = require("../models/user");

async function getSessionUser(req) {
  if (!req.session?.userId) return null;

  return await User.findById(req.session.userId)
    .select("_id email role fullName phone");
}

const safeStr = (v) => (v === undefined || v === null ? "" : String(v));
const safeNum = (v) => {
  if (v === undefined || v === null || v === "") return 0;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

router.post("/", async (req, res) => {
  try {
    const sessionUser = await getSessionUser(req);

    const {
      guestEmail,
      guestName,
      guestPhone,

      eventId,
      eventTitle,
      eventDate,
      venue,
      location,

      ticketType,
      qty,
      unitPrice,

      subTotal,
      bookingFee,
      total
    } = req.body || {};

    const isLoggedIn = !!sessionUser;
    const hasGuest = !!guestEmail && !!guestName;

    if (!isLoggedIn && !hasGuest) {
      return res.status(401).json({
        ok: false,
        message: "Login or guest details required."
      });
    }

    if (!eventId || !eventTitle || !eventDate || !venue || !location) {
      return res.status(400).json({
        ok: false,
        message: "Missing event details."
      });
    }

    const parsedEventDate = new Date(eventDate);
    if (Number.isNaN(parsedEventDate.getTime())) {
      return res.status(400).json({
        ok: false,
        message: "Invalid event date."
      });
    }

    const qtyNum = safeNum(qty);
    if (!ticketType || qtyNum < 1) {
      return res.status(400).json({
        ok: false,
        message: "Invalid ticket details."
      });
    }

    if (unitPrice == null || subTotal == null || bookingFee == null || total == null) {
      return res.status(400).json({
        ok: false,
        message: "Missing ticket/pricing details."
      });
    }

    const order = await Order.create({
      userId: sessionUser?._id || null,
      userEmail: sessionUser?.email || null,
      userRole: sessionUser?.role || "customer",

      guestEmail: isLoggedIn ? null : safeStr(guestEmail),
      guestName: isLoggedIn ? null : safeStr(guestName),
      guestPhone: isLoggedIn ? null : safeStr(guestPhone),

      eventId: safeStr(eventId),
      eventTitle: safeStr(eventTitle),
      eventDate: parsedEventDate,
      venue: safeStr(venue),
      location: safeStr(location),

      ticketType: safeStr(ticketType),
      qty: qtyNum,
      unitPrice: safeNum(unitPrice),

      subTotal: safeNum(subTotal),
      bookingFee: safeNum(bookingFee),
      total: safeNum(total),

      status: "paid"
    });

    return res.json({ ok: true, order });

  } catch (err) {
    console.error("Create order error:", err);
    return res.status(500).json({ ok: false, message: err.message });
  }
});

router.get("/my", async (req, res) => {
  try {
    const sessionUser = await getSessionUser(req);
    if (!sessionUser) {
      return res.status(401).json({ ok: false, message: "Not logged in." });
    }

    const orders = await Order.find({ userId: sessionUser._id })
      .sort({ createdAt: -1 })
      .limit(50);

    return res.json({ ok: true, orders });

  } catch (err) {
    console.error("Fetch my orders error:", err);
    return res.status(500).json({ ok: false, message: err.message });
  }
});

module.exports = router;