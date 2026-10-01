"""
Ply Dot Com - Landing Page Prompt Sheet PDF Generator
Generates a structured, professional design & specification PDF document.
"""

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    Image, KeepTogether
)
from reportlab.lib.colors import HexColor
from PIL import Image as PILImage
import os

out = "Ply_Dot_Com_Landing_Page_Prompt_Sheet.pdf"
design_img = "public/images/hero_interior.jpg"

doc = SimpleDocTemplate(
    out, pagesize=A4,
    leftMargin=16*mm, rightMargin=16*mm,
    topMargin=16*mm, bottomMargin=16*mm
)

ss = getSampleStyleSheet()

dark = HexColor("#2A1B14")
walnut = HexColor("#6B4226")
beige = HexColor("#D8B98A")
cream = HexColor("#F6F1E8")
gold = HexColor("#B88A4A")
charcoal = HexColor("#222222")
muted = HexColor("#6E655F")
white = colors.white

ss.add(ParagraphStyle(
    name="CoverTitleX", fontName="Helvetica-Bold", fontSize=26, leading=30,
    textColor=dark, alignment=TA_CENTER, spaceAfter=8
))
ss.add(ParagraphStyle(
    name="CoverSubX", fontName="Helvetica", fontSize=11, leading=16,
    textColor=muted, alignment=TA_CENTER
))
ss.add(ParagraphStyle(
    name="H1X", fontName="Helvetica-Bold", fontSize=20, leading=24,
    textColor=dark, spaceAfter=8
))
ss.add(ParagraphStyle(
    name="H2X", fontName="Helvetica-Bold", fontSize=12, leading=15,
    textColor=walnut, spaceBefore=8, spaceAfter=4
))
ss.add(ParagraphStyle(
    name="BodyX", fontName="Helvetica", fontSize=9.2, leading=13.2,
    textColor=charcoal, spaceAfter=6
))
ss.add(ParagraphStyle(
    name="SmallX", fontName="Helvetica", fontSize=8, leading=11,
    textColor=muted
))
ss.add(ParagraphStyle(
    name="PromptX", fontName="Helvetica", fontSize=8.5, leading=12.4,
    textColor=charcoal, backColor=HexColor("#FBF7F0"),
    borderColor=beige, borderWidth=.6, borderPadding=7, spaceAfter=8
))
ss.add(ParagraphStyle(
    name="QuoteX", fontName="Helvetica-Bold", fontSize=14, leading=18,
    textColor=walnut, spaceAfter=8
))

story = []

# Cover
story += [
    Spacer(1, 20*mm),
    Paragraph("PLY DOT COM", ss["CoverTitleX"]),
    Paragraph("LANDING PAGE DESIGN + DEVELOPMENT PROMPT SHEET", ss["CoverTitleX"]),
    Spacer(1, 4*mm),
    Paragraph(
        "Simple single-page plywood business website<br/>No 3D &bull; Lenis smooth scrolling &bull; GSAP reveal animations",
        ss["CoverSubX"]
    ),
    Spacer(1, 12*mm),
]

info = [
    ["Business", "Ply Dot Com"],
    ["Address", "Sr No 48, 11//2, Sus - Pashan Rd, near Shell Petrol Pump, Tapkir Vasti, Sus, Pune, Maharashtra 411021"],
    ["Phone", "080879 62121"],
    ["Website type", "Single-page landing page"],
    ["Interaction", "Lenis smooth scroll + GSAP animation only"],
]
tbl = Table(info, colWidths=[38*mm, 128*mm])
tbl.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (0,-1), cream),
    ("TEXTCOLOR", (0,0), (-1,-1), charcoal),
    ("FONTNAME", (0,0), (0,-1), "Helvetica-Bold"),
    ("FONTSIZE", (0,0), (-1,-1), 8.7),
    ("GRID", (0,0), (-1,-1), 0.35, beige),
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("LEFTPADDING", (0,0), (-1,-1), 6),
    ("RIGHTPADDING", (0,0), (-1,-1), 6),
    ("TOPPADDING", (0,0), (-1,-1), 6),
    ("BOTTOMPADDING", (0,0), (-1,-1), 6),
]))
story += [tbl, Spacer(1, 8*mm),
          Paragraph("Goal: a small, fast, trustworthy local plywood landing page with premium but simple visuals.", ss["QuoteX"]),
          PageBreak()]

# Section 1 - Visual reference
story.append(Paragraph("01 - APPROVED DESIGN DIRECTION", ss["H1X"]))
story.append(Paragraph(
    "Keep the final implementation clean, spacious and trustworthy; preserve the warm wood palette (#2A1B14, #6B4226, #F6F1E8, #D8B98A), strong product photography, simple navigation and obvious contact actions.",
    ss["BodyX"]
))
if os.path.exists(design_img):
    pil = PILImage.open(design_img)
    w, h = pil.size
    max_w = 178*mm
    max_h = 160*mm
    scale = min(max_w/w, max_h/h)
    img = Image(design_img, width=w*scale, height=h*scale)
    story += [Spacer(1, 3*mm), img]
story.append(PageBreak())

# Section 2 - Design system
story.append(Paragraph("02 - DESIGN SYSTEM", ss["H1X"]))
design_data = [
    ["Item", "Direction"],
    ["Primary background", "Warm cream #F6F1E8"],
    ["Dark sections / footer", "Dark walnut #2A1B14"],
    ["Primary wood tone", "Walnut brown #6B4226"],
    ["Plywood accent", "Plywood beige #D8B98A"],
    ["Accent", "Muted gold #B88A4A"],
    ["Text", "Charcoal #222222"],
    ["Typography", "Plus Jakarta Sans / Inter modern sans-serif"],
    ["Corners", "Small-medium radius, approximately 10-14px"],
    ["Shadows", "Soft and restrained; avoid floating-card overload"],
    ["Images", "Real plywood sheets, furniture/interiors, warm natural light"],
]
t = Table(design_data, colWidths=[48*mm, 121*mm], repeatRows=1)
t.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,0), dark),
    ("TEXTCOLOR", (0,0), (-1,0), white),
    ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTNAME", (0,1), (0,-1), "Helvetica-Bold"),
    ("FONTSIZE", (0,0), (-1,-1), 8.5),
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("GRID", (0,0), (-1,-1), .35, beige),
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, HexColor("#FBF8F3")]),
    ("LEFTPADDING", (0,0), (-1,-1), 6),
    ("RIGHTPADDING", (0,0), (-1,-1), 6),
    ("TOPPADDING", (0,0), (-1,-1), 6),
    ("BOTTOMPADDING", (0,0), (-1,-1), 6),
]))
story += [t, Spacer(1, 6*mm)]
story.append(Paragraph("Visual rules", ss["H2X"]))
story.append(Paragraph(
    "No 3D, no WebGL, no complex sliders, no heavy parallax, no animated cursor and no cinematic full-screen transitions. The site should feel premium through typography, photography, spacing and subtle motion rather than effects.",
    ss["BodyX"]
))
story.append(PageBreak())

# Section 3 - Landing page structure
story.append(Paragraph("03 - LANDING PAGE STRUCTURE", ss["H1X"]))
sections = [
    ("1. Header", "Logo/wordmark: PLY DOT COM. Navigation: Home, About, Products, Why Us, Contact. Add a Call Now button. Header is transparent/cream initially and gains a subtle solid background and shadow after scrolling."),
    ("2. Hero", "Large plywood/furniture/interior image. Headline: 'Quality Plywood for Better Spaces.' Supporting line: 'Reliable plywood for furniture, interiors and construction needs.' CTAs: Call Now and View Products."),
    ("3. About", "Short local-business introduction with one strong plywood image and three small highlights: Quality Materials, Multiple Options, Pune Based."),
    ("4. Products", "Four product cards: Commercial Plywood, Waterproof Plywood, Marine Plywood, Decorative / Furniture Plywood. Treat these as editable category placeholders until actual inventory is confirmed."),
    ("5. Why Choose Us", "Four simple benefits: Quality Materials, Multiple Options, Reliable Service, Convenient Location."),
    ("6. Contact + Footer", "Address, phone, Call Now, Get Directions, short enquiry invitation, footer links and copyright. Keep the footer compact."),
]
for h,b in sections:
    story.append(Paragraph(h, ss["H2X"]))
    story.append(Paragraph(b, ss["BodyX"]))
story.append(PageBreak())

# Section 4 - Copy
story.append(Paragraph("04 - READY-TO-USE WEBSITE COPY", ss["H1X"]))
copy_blocks = [
    ("Hero", "<b>PLY DOT COM</b><br/><b>Quality Plywood for Better Spaces.</b><br/>Reliable plywood for furniture, interiors and construction needs.<br/><br/><b>Buttons:</b> Call Now | View Products"),
    ("About", "<b>Your Local Plywood Partner in Pune.</b><br/>Ply Dot Com supplies plywood for furniture, interiors and construction requirements in Pune. We focus on useful product options, straightforward service and convenient local access."),
    ("Products intro", "<b>Plywood for Every Need.</b><br/>Explore practical plywood options for furniture, interiors and construction projects. Product availability and exact specifications should be confirmed directly with Ply Dot Com."),
    ("Why Us", "<b>Simple Reasons to Choose Us.</b><br/>Quality Materials - Multiple Options - Reliable Service - Convenient Sus-Pashan Location."),
    ("Contact", "<b>Let's Build Better Spaces Together.</b><br/>Get in touch for product enquiries, availability and pricing.<br/><br/>Sr No 48, 11//2, Sus - Pashan Rd, near Shell Petrol Pump, Tapkir Vasti, Sus, Pune, Maharashtra 411021<br/>080879 62121"),
]
for h,b in copy_blocks:
    story.append(Paragraph(h, ss["H2X"]))
    story.append(Paragraph(b, ss["PromptX"]))
story.append(PageBreak())

# Section 5 - Animations
story.append(Paragraph("05 - LENIS + GSAP MOTION SPEC", ss["H1X"]))
story.append(Paragraph(
    "Motion should be subtle enough that the website still feels like a normal local-business landing page.",
    ss["BodyX"]
))
motion_data = [
    ["Element", "Animation"],
    ["Lenis", "Smooth vertical scrolling. Keep default-like easing; do not make scroll feel slow or floaty."],
    ["Hero heading", "GSAP fade + y: 28px -> 0, duration ~0.8s, stagger lines slightly."],
    ["Hero buttons", "Fade up after heading, short stagger."],
    ["About image", "Clip-path or overflow reveal from bottom; subtle 1.02 -> 1 scale."],
    ["About text", "Fade + y 24px on ScrollTrigger enter."],
    ["Product cards", "Stagger 0.08-0.12s, y 24px -> 0, opacity 0 -> 1."],
    ["Why Us items", "Simple staggered reveal, no bounce."],
    ["Header", "Add solid background / subtle shadow after hero scroll threshold."],
    ["Contact", "Fade in as a single group; avoid multiple competing movements."],
    ["Reduced motion", "Disable Lenis and show content without animated transforms when prefers-reduced-motion is active."],
]
mt = Table(motion_data, colWidths=[42*mm, 127*mm], repeatRows=1)
mt.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,0), dark),
    ("TEXTCOLOR", (0,0), (-1,0), white),
    ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTSIZE", (0,0), (-1,-1), 8.4),
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("GRID", (0,0), (-1,-1), .35, beige),
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, HexColor("#FBF8F3")]),
    ("LEFTPADDING", (0,0), (-1,-1), 5),
    ("RIGHTPADDING", (0,0), (-1,-1), 5),
    ("TOPPADDING", (0,0), (-1,-1), 5),
    ("BOTTOMPADDING", (0,0), (-1,-1), 5),
]))
story += [mt, PageBreak()]

# Section 6 - WhatsApp
story.append(Paragraph("06 - FLOATING WHATSAPP BUTTON", ss["H1X"]))
story.append(Paragraph(
    "Add a circular floating WhatsApp button fixed to the bottom-right corner on desktop and mobile. It should stay visible while scrolling, use a small hover scale on desktop and a subtle one-time entrance animation.",
    ss["BodyX"]
))
story.append(Paragraph(
    "<b>Prefilled message:</b><br/>Hello Ply Dot Com, I would like to enquire about plywood products.",
    ss["PromptX"]
))
story.append(Paragraph(
    "<b>Important:</b> The supplied phone number is 080879 62121. Confirm that this same number is WhatsApp-enabled before publishing the wa.me link. Until confirmed, keep the WhatsApp destination configurable in one data/config file instead of hardcoding it throughout the app.",
    ss["BodyX"]
))
story.append(PageBreak())

# Section 7 - Responsive
story.append(Paragraph("07 - RESPONSIVE BEHAVIOR", ss["H1X"]))
responsive = [
    ("Desktop 1200px+", "Two-column hero/about where appropriate. Four product cards in one row. Full nav visible."),
    ("Tablet 768-1199px", "Two product cards per row. Reduce hero text size. Compact spacing."),
    ("Mobile <768px", "Single-column layout. Hamburger menu. Full-width CTAs or two compact buttons. Product cards stack vertically. Floating WhatsApp stays above the safe area."),
]
for h,b in responsive:
    story.append(Paragraph(h, ss["H2X"]))
    story.append(Paragraph(b, ss["BodyX"]))

story.append(Paragraph("Basic accessibility", ss["H2X"]))
story.append(Paragraph(
    "Use semantic headings, visible keyboard focus, meaningful alt text, sufficient contrast, real button/link elements, phone links with tel:, and accessible mobile navigation. Do not make any important information animation-only.",
    ss["BodyX"]
))
story.append(PageBreak())

# Section 8 - Stack & File structure
story.append(Paragraph("08 - DEVELOPMENT STACK + FILE STRUCTURE", ss["H1X"]))
story.append(Paragraph(
    "Recommended stack: React + Vite + Tailwind CSS + GSAP + ScrollTrigger + Lenis. No backend is required for the first version unless an enquiry form is added later.",
    ss["BodyX"]
))
structure = """
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Products.jsx
    WhyUs.jsx
    Contact.jsx
    Footer.jsx
    WhatsAppButton.jsx
    EnquiryModal.jsx
  data/
    siteContent.js
  styles/
    globals.css
  App.jsx
  main.jsx
public/
  images/
"""
story.append(Paragraph(structure.replace("\n", "<br/>"), ss["PromptX"]))
story.append(PageBreak())

# Section 9 - Final checklist
story.append(Paragraph("09 - FINAL CHECKLIST", ss["H1X"]))
checks = [
    "Single-page landing page only",
    "No 3D / WebGL",
    "Lenis + GSAP only for motion",
    "Business name, phone and address match supplied information",
    "Product names remain editable placeholders until inventory is confirmed",
    "Floating WhatsApp button included, number configurable until WhatsApp is confirmed",
    "Call Now uses tel: link",
    "Get Directions links to Google Maps destination",
    "Mobile navigation works seamlessly",
    "Reduced-motion mode supported and tested",
    "No invented certifications, email, opening hours, brand claims or technical specs",
]
for c in checks:
    story.append(Paragraph("&bull; " + c, ss["BodyX"]))

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(muted)
    canvas.drawString(16*mm, 8*mm, "Ply Dot Com - Landing Page Prompt Sheet")
    canvas.drawRightString(A4[0]-16*mm, 8*mm, str(doc.page))
    canvas.restoreState()

if __name__ == "__main__":
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"Generated PDF prompt sheet: {out}")
