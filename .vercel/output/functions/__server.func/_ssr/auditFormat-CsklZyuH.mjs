function humanizeAudit(event) {
  const d = event.details ?? {};
  const lines = [];
  const who = event.actor.username;
  switch (event.action) {
    /* ---------------- AUTH ---------------- */
    case "auth.login":
      lines.push(`${who} signed in to the system.`);
      break;
    case "auth.logout":
      lines.push(`${who} signed out of the system.`);
      break;
    case "auth.role_switch":
      lines.push(event.summary);
      break;
    /* ---------------- BOOKINGS ---------------- */
    case "booking.created": {
      const room = d.room ?? "?";
      const guest = d.guestName || "an unnamed guest";
      const checkIn = d.checkIn;
      const checkOut = d.checkOut;
      const status = d.status;
      const bed = d.bedIndex;
      lines.push(
        `Created a new booking in room ${room}${typeof bed === "number" ? ` (bed #${bed + 1})` : ""} for ${guest}.`
      );
      if (checkIn && checkOut) {
        lines.push(`Check-in ${formatDate(checkIn)}, check-out ${formatDate(checkOut)}.`);
      }
      if (status) lines.push(`Initial status set to "${status}".`);
      break;
    }
    case "booking.deleted": {
      const room = d.roomNumber ?? d.room ?? "?";
      const guest = d.guestName || "the guest";
      lines.push(`Deleted the booking for room ${room} (${guest}).`);
      if (d.checkIn && d.checkOut) {
        lines.push(
          `It was scheduled from ${formatDate(d.checkIn)} to ${formatDate(
            d.checkOut
          )}.`
        );
      }
      break;
    }
    case "booking.updated": {
      const before = d.before;
      const patch = d.patch;
      const room = before?.roomNumber ?? "?";
      lines.push(`Edited the booking in room ${room}.`);
      if (before && patch) {
        for (const k of Object.keys(patch)) {
          const b = before[k];
          const a = patch[k];
          if (b === a) continue;
          lines.push(
            `• Changed ${prettyField(k)} from "${prettyValue(k, b)}" to "${prettyValue(k, a)}".`
          );
        }
      }
      break;
    }
    /* ---------------- ADMINS ---------------- */
    case "admin.created":
      lines.push(
        `Registered a new administrator account "${d.username ?? ""}"${d.idNumber ? ` (ID ${d.idNumber})` : ""}.`
      );
      break;
    case "admin.deleted":
      lines.push(
        `Removed administrator account "${d.username ?? ""}"${d.idNumber ? ` (ID ${d.idNumber})` : ""} from the system.`
      );
      break;
    case "admin.updated": {
      const before = d.before;
      const patch = d.patch;
      lines.push(`Updated administrator "${patch?.username ?? before?.username ?? ""}".`);
      if (before && patch) {
        for (const k of Object.keys(patch)) {
          if (k === "password") {
            if (before[k] !== patch[k]) lines.push(`• Changed the password.`);
            continue;
          }
          if (before[k] === patch[k]) continue;
          lines.push(
            `• Changed ${prettyField(k)} from "${prettyValue(k, before[k])}" to "${prettyValue(
              k,
              patch[k]
            )}".`
          );
        }
      }
      break;
    }
    /* ---------------- SHIFT / FORM / SYSTEM ---------------- */
    default:
      lines.push(event.summary);
      break;
  }
  return lines;
}
function formatDate(iso) {
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString(void 0, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } catch {
    return iso;
  }
}
const FIELD_LABELS = {
  guestName: "guest name",
  guestPhone: "guest phone",
  guestEmail: "guest email",
  guestCount: "number of guests",
  checkIn: "check-in date",
  checkOut: "check-out date",
  status: "status",
  notes: "notes",
  price: "price",
  roomNumber: "room number",
  bedIndex: "bed",
  guestFirstName: "guest first name",
  guestLastName: "guest last name",
  guestMiddleName: "guest middle name",
  guestWhatsapp: "WhatsApp",
  guestTelegram: "Telegram",
  guestInstagram: "Instagram",
  name: "name",
  surname: "surname",
  username: "username",
  idNumber: "ID number",
  fingerprintId: "fingerprint"
};
function prettyField(k) {
  return FIELD_LABELS[k] ?? k.replace(/([A-Z])/g, " $1").toLowerCase().trim();
}
function prettyValue(k, v) {
  if (v === void 0 || v === null || v === "") return "—";
  if (k === "checkIn" || k === "checkOut") return formatDate(String(v));
  if (k === "bedIndex" && typeof v === "number") return `#${v + 1}`;
  return String(v);
}
export {
  humanizeAudit as h
};
