# Gravity Digital RGB LED Module
## DFRobot DFR0605 — Τεχνική Τεκμηρίωση

---

## Τι είναι το DFR0605;

Το Gravity Digital RGB LED Module είναι ένα cascadable μονό RGB LED module συμβατό με RGB LED strip. Η κύρια διαφορά από ένα κοινό RGB LED:

- **Κοινό RGB LED** → χρειάζεται **3 pins** (ένα για R, ένα για G, ένα για B)
- **DFR0605** → χρειάζεται **1 μόνο pin** για όσα LEDs κι αν συνδέσεις σε σειρά

Χάρη στον σχεδιασμό του είναι δυνατόν να συνδέσεις πάνω από 100 modules με συνολικό μήκος αρκετών δεκάδων μέτρων με τροφοδοσία μόνο 5V 2A.

---

## Τεχνικά Χαρακτηριστικά

| Παράμετρος | Τιμή |
|---|---|
| Chip LED | WS2812 / WS2812B |
| Τάση λειτουργίας | 5V |
| Connector | 3-pin Gravity (GND / VCC / DI) |
| Χρώματα | 16.777.216 (256³) |
| Φωτεινότητα | 256 επίπεδα (0–255) |
| Πρωτόκολλο | Single-wire (NeoPixel) |
| Cascading | DI → DO αλυσίδα |
| Βιβλιοθήκη | Adafruit NeoPixel |
| Συμβατότητα | Arduino, micro:bit, ESP32, Raspberry Pi |

---

## Σύνδεση

```
DFR0605      →   IO Shield V7.1
─────────────────────────────────
Μαύρο (GND)  →   GND
Κόκκινο (VCC)→   5V
Μπλε (DI)    →   D3 (ή οποιοδήποτε digital pin)
```

### Cascading — Σύνδεση πολλών LEDs
```
Arduino D3 → LED_0 DI    LED_0 DO → LED_1 DI    LED_1 DO → LED_2 DI ...
```

> ⚠️ **Για πολλά LEDs:** Κάθε LED καταναλώνει έως 60mA στο λευκό (R+G+B=255). Για > 5 LEDs χρησιμοποίησε εξωτερική τροφοδοσία 5V — μην τα τροφοδοτείς από το Arduino 5V pin.

---

## Βιβλιοθήκη — Adafruit NeoPixel

## Κύριες Συναρτήσεις Βιβλιοθήκης

| Συνάρτηση | Παράμετροι | Περιγραφή |
|---|---|---|
| `strip.begin()` | — | Αρχικοποίηση |
| `strip.show()` | — | **Απαραίτητο!** Στέλνει δεδομένα στα LEDs |
| `strip.setBrightness(n)` | 0–255 | Συνολική φωτεινότητα |
| `strip.setPixelColor(i, color)` | i=δείκτης LED, color=χρώμα | Ορισμός χρώματος LED i |
| `strip.Color(r, g, b)` | 0–255 έκαστο | Δημιουργία χρώματος |
| `strip.clear()` | — | Σβήσε όλα τα LEDs (δεν κάνει show) |
| `strip.fill(color, first, count)` | — | Γέμισε πολλά LEDs με ένα χρώμα |
| `strip.numPixels()` | — | Επιστρέφει αριθμό LEDs |

> ⚠️ **Κοινό λάθος:** Ξεχνάς το `strip.show()` — τίποτα δεν αλλάζει στα LEDs χωρίς αυτό!

---

*Τεκμηρίωση βασισμένη στο επίσημο DFRobot wiki για DFR0605.*
*Τελευταία ενημέρωση: Μάρτιος 2026*
