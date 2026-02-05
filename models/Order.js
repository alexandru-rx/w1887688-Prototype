const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },

    userEmail: {
      type: String,
      default: null
    },

    userRole: {
      type: String,
      default: 'customer'
    },

    guestEmail: { type: String, default: null },
    guestName:  { type: String, default: null },
    guestPhone: { type: String, default: null },

    eventId:    { type: String, required: true },
    eventTitle: { type: String, required: true },
    eventDate:  { type: Date,   required: true },
    venue:      { type: String, required: true },
    location:   { type: String, required: true },

    ticketType: { type: String, required: true },
    qty:        { type: Number, required: true },
    unitPrice:  { type: Number, required: true },

    subTotal:   { type: Number, required: true },
    bookingFee: { type: Number, required: true },
    total:      { type: Number, required: true }
  },
  {
    timestamps: true   // adds createdAt + updatedAt automatically
  }
);

module.exports = mongoose.model('Order', OrderSchema);
